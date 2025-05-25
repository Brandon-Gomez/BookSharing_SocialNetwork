<template>
  <div>
    <!-- Toolbar-->
    <div class="container d-flex justify-content-between align-items-center mb-4">
      <h2 class="h3 mb-0">Publicaciones</h2>
      <button v-if="isCurrentUser" class="btn btn-success btn-sm d-none d-lg-block" @click="$router.push(`/profile/${userData.username}/create-post`)">
        Crear publicación
      </button>
    </div>

    <!-- grid books -->
    <div v-if="posts.length > 0" class="container mb-2 mb-md-4 library-grid py-3">
      <article class="library-item" v-for="post in posts" :key="post.id">
        <div class="card">
            <like_component :postId="post.id.toString()" customClass="btn-wishlist btn-sm position-absolute" :customStyle="{
            top: '0.5rem',
            right: '0.5rem',
            zIndex: 2,
            background: 'rgba(255, 255, 255, 0.7)',
            borderRadius: '50%',
          }" />
          <div style="position: relative;">
            <RouterLink class="blog-entry-thumb" :to="`/posts/${post.id}`">
              <img class="card-img-top" :src="post.image" alt="Post" />
            </RouterLink>
            <div v-if="isCurrentUser" class="position-absolute"
              style="right: 10px; bottom: 10px; display: flex; gap: 8px;">
              <button class="btn btn-warning btn-sm d-flex align-items-center" @click="editPost(post)" title="Editar">
                <i class="ci-edit"></i>
              </button>
              <button class="btn btn-danger btn-sm d-flex align-items-center" @click="deletePost(post)"
                title="Eliminar">
                <i class="ci-trash"></i>
              </button>
            </div>
          </div>
          <div class="card-body">
            <h2 class="h6 blog-entry-title">
              <RouterLink :to="`/posts/${post.id}`">
                {{ post.title }}
              </RouterLink>
            </h2>
            <a class="btn-tag me-2 mb-2" :href="`/category/${post.category_id}`">{{ post.category_name }}</a>
          </div>
          <div class="card-footer d-flex align-items-center fs-xs">
            {{
              new Date(post.created_at).toLocaleString("es-ES", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })
            }}

            <div class="ms-auto text-nowrap">
              <a class="blog-entry-meta-link text-nowrap">
                <i class="ci-eye"></i>{{ post.views }}
              </a>
              <span class="blog-entry-meta-divider mx-2"></span>
              <a class="blog-entry-meta-link text-nowrap">
                <i class="ci-heart"></i>{{ post.total_likes }}
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
    <div v-else>
      <div class="container text-center">
        <p class=" mt-4">No hay publicaciones para mostrar.</p>

       <button class="btn btn-success btn-sm d-lg-none" @click="$router.push(`/profile/${userData.username}/create-post`)">
        Crear publicación
      </button>
      </div>
    
    </div>
    <!-- Pagination-->
    <pagination_component v-model="page" v-if="posts.length > 0" :totalPages="totalPages"
      @update:modelValue="onPageChange" />
  </div>
</template>

<script>
import apiClient from "@/services/ApiService";
import pagination_component from "./pagination_component.vue";
import { logoutUser } from '@/services/useAuth.js';
import like_component from "./like_component.vue";

export default {
  components: {
    pagination_component,
    like_component,
  },
  data() {
    return {
      page: 1,
      totalPages: 0,
      postsPerPage: 6,

      userData: {
        id: "",
        name: "",
        username: "",
        birthdate: "",
        description: "",
        user_picture: "",
      },
      isCurrentUser: null,
      publications: 0,
      follows: {
        isFollowing: false,
        followers: 0,
        following: 0,
      },
      countPosts: 0,
      profileImageFile: null,
      profilePhoto: null, // Para la vista previa
      posts: [],
    };
  },

  methods: {
    onPageChange(n) {
      this.page = n;
      this.fetchPosts();
    },

    async fetchUser() {
      try {
        const token = localStorage.getItem("authToken");
        const username = this.$route.params.username;
        const response = await apiClient.get(`/profile/${username}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        let user = response.data.user;
        // Formatea la fecha para el input date
        if (user.birthdate) {
          user.birthdate = user.birthdate.split("T")[0];
        }
        this.userData = {
          ...user,
          password: "",
        };
        this.isCurrentUser = response.data.isCurrentUser;

        // Obtener seguidores y seguidos
        if (user.id) {
          // Seguidores
          const resFollowers = await apiClient.get(
            `/follow/followers/count/${user.id}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          this.follows.followers = resFollowers.data.followerCount || 0;

          // Seguidos
          const resFollowing = await apiClient.get(
            `/follow/following/count/${user.id}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          this.follows.following = resFollowing.data.followingCount || 0;
        }
        // cantidad de publicaciones
        const res = await apiClient.get(`/posts/count/${user.id}`);
        this.countPosts = res.data.post_count;


      } catch (error) {
        console.error(
          "Error al obtener el usuario:",
          error.response?.data || error
        );
        alert("Error al obtener los datos del usuario.");
      }
    },

    async fetchPosts() {
      try {
        const token = localStorage.getItem("authToken");
        const username = this.$route.params.username;
        const res = await apiClient.get(
          `/profile/${username}/posts?page=${this.page}&limit=${this.postsPerPage}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        this.posts = res.data.posts;
        this.page = res.data.page;
        this.totalPosts = res.data.totalPosts;
        this.totalPages = res.data.totalPages;
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },
    getUserImage() {
      return (
        this.userData.profile_picture ||
        "https://firebasestorage.googleapis.com/v0/b/booksharing-socialnetwork.appspot.com/o/profile%2Fdefault.jpg?alt=media"
      );
    },
    logout() {
      logoutUser(this.$router);
    },

    goToEditProfile() {
      this.$router.push(`/profile/${this.userData.username}/edit-account`);
    },

    editPost(post) {
      // Redirige a la vista de edición del post del usuario
      this.$router.push(`/posts/${post.id}/edit-post`);
    },
    async deletePost(post) {
      if (confirm('¿Estás seguro de que deseas eliminar esta publicación?')) {
        try {
          const token = localStorage.getItem('authToken');
          await apiClient.delete(`/posts/${post.id}`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          // Recarga las publicaciones después de eliminar
          this.fetchPosts();
          alert('Publicación eliminada correctamente');
        } catch (error) {
          alert('Error al eliminar la publicación');
          console.error(error);
        }
      }
    },
  },

  mounted() {
    this.fetchUser(), this.fetchPosts();
  },
};
</script>
