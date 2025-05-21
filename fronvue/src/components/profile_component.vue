<template>
  <div>
    <div class="page-title-overlap bg-dark pt-4">
      <div
        class="container d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-sm-between align-items-center pt-2"
      >
        <div class="d-flex align-items-center pb-3">
          <div
            class="rounded-circle position-relative flex-shrink-0"
            style="width: 6.375rem"
          >
            <img
              class="rounded-circle" :src="userData.user_picture || getUserImage()"
              :alt="userData.name"
            />
          </div>
          <div class="ps-3">
            <h3 class="text-light fs-lg mb-0">{{ userData.name }}</h3>
            <span class="d-block text-light fs-ms opacity-60 py-1"
              >@{{ userData.username }}</span>
            <span class="d-block text-light fs-ms py-1 w-75" style="max-width: 450px">
              {{ userData.description }}</span
            >

          </div>
        </div>
        <!-- Desktop version -->
        <div class="d-none d-sm-flex"> 
          <div class="text-sm-end me-2">
            <div class="text-light fs-base mr-2">{{ posts.length }}<span class="text-light fs-ms opacity-60 py-1 ml-2">Publicaciones</span>
            </div>
          </div>
          <div class="text-sm-end me-2">
            <div class="text-light fs-base mr-2">{{ follows.followers }}<span class="text-light fs-ms opacity-60 py-1 ml-2">Seguidores</span>
            </div>
          </div>
          <div class="text-sm-end me-2">
            <div class="text-light fs-base mr-2">{{ follows.following }}<span class="text-light fs-ms opacity-60 py-1  ml-2">Siguiendo</span>
            </div>
          </div>
        </div>
        <!-- Mobile version -->
        <div class="d-flex d-sm-none w-100 justify-content-around my-3">
          <div class="text-center">
            <div class="text-light fs-6 fw-bold">{{ posts.length }}</div>
            <div class="text-light fs-ms opacity-60 py-1">Publicaciones</div>
          </div>
          
          <div class="text-center">
            <div class="text-light fs-6 fw-bold">{{ follows.followers }}</div>
            <div class="text-light fs-ms opacity-60 py-1">Seguidores</div>
          </div>
          <div class="text-center">
            <div class="text-light fs-6 fw-bold">{{ follows.following }}</div>
            <div class="text-light fs-ms opacity-60 py-1">Seguidos</div>
          </div>
        </div>


      </div>
    </div>
    <div class="container mb-5 pb-3">
      <div class="bg-light shadow-lg rounded-3 overflow-hidden">
        <div class="row">
          <!-- Sidebar-->
          <aside class="col-lg-4 pt-4 pt-lg-0 pe-xl-5">
            <div class="d-block d-lg-none p-4">
              <a
                class="btn btn-outline-accent d-block"
                href="#account-menu"
                data-bs-toggle="collapse"
                aria-expanded="true"
                ><i class="ci-menu me-2"></i>Account menu</a
              >
            </div>
            <div class="bg-white rounded-3 shadow-lg pt-1 mb-lg-0">
              <div class="d-lg-block collapse" id="account-menu">
                <div class="bg-secondary px-4 py-3">
                  <h3 class="fs-sm mb-0 text-muted">Cuenta</h3>
                </div>
                <ul class="list-unstyled mb-0">
                  <li class="border-bottom mb-0">
                    <a
                      class="nav-link-style d-flex align-items-center px-4 py-3 active"
                      href="#"
                    >
                      <i class="ci-book opacity-60 me-2"></i>
                      Publicaciones
                    </a>
                  </li>
                  <li class="border-bottom mb-0">
                    <a
                      class="nav-link-style d-flex align-items-center px-4 py-3"
                      href="#"
                    >
                      <i class="ci-heart opacity-60 me-2"></i>
                      Favoritos
                    </a>
                  </li>
                </ul>
                <div v-if="isCurrentUser">
                  <div class="bg-secondary px-4 py-3">
                    <h3 class="fs-sm mb-0 text-muted">Configuración</h3>
                  </div>
                  <ul class="list-unstyled mb-0">
                    <li class="border-bottom mb-0">
                      <a
                        type="button"
                        class="nav-link-style d-flex align-items-center px-4 py-3"
                        @click.prevent="goToEditProfile"
                      >
                        <i class="ci-user opacity-60 me-2"></i>
                        Información personal
                      </a>
                    </li>
                    <li class="border-top mb-0">
                      <a type="button"
                        class="nav-link-style d-flex align-items-center px-4 py-3"
                       
                        @click="logout"
                      >
                        <i class="ci-sign-out opacity-60 me-2"></i>
                        Cerrar sesión
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
          <!-- Content-->
          <section class="col-lg-8 pt-lg-4 pb-4 mb-3">
            <!-- Toolbar-->

            <h2
              class="h3 pt-2 pb-4 mb-0 text-center text-sm-start border-bottom mt-2"
            >
              Publicaciones
            </h2>
            <!-- grid books -->
            <div class="container mb-2 mb-md-4 library-grid py-3">
              <article
                class="library-item"
                v-for="post in posts"
                :key="post.id"
              >
                <div class="card">
                  <button
                    class="btn-wishlist btn-sm position-absolute"
                    type="button"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Me gusta"
                    style="
                      top: 0.5rem;
                      right: 0.5rem;
                      z-index: 2;
                      background: rgba(255, 255, 255, 0.7);
                      border-radius: 50%;
                    "
                  >
                    <i class="ci-heart"></i>
                  </button>
                  <RouterLink
                    class="blog-entry-thumb"
                    :to="`/posts/${post.id}`"
                  >
                    <img
                      class="card-img-top"
                      src="https://tunovela.es/wp-content/uploads/Cien-anos-de-soledad-de-Gabriel-Garcia-Marquez-resumen-y-analisis.jpg"
                      alt="Post"
                    />
                  </RouterLink>
                  <div class="card-body">
                    <h2 class="h6 blog-entry-title">
                      <RouterLink :to="`/posts/${post.id}`">
                        {{ post.title }}
                      </RouterLink>
                    </h2>
                    <a
                      class="btn-tag me-2 mb-2"
                      :href="`/category/${post.category_id}`"
                      >{{ post.category_name }}</a
                    >
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
            <!-- Pagination-->
            <pagination_component
              v-model="page"
              :totalPages="totalPages"
              @update:modelValue="onPageChange"
            />
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiClient from "@/services/ApiService";
import pagination_component from "./pagination_component.vue";
import { logoutUser } from '@/services/useAuth.js';

export default {
  components: {
    pagination_component,
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
        this.userData.user_picture ||
        "https://firebasestorage.googleapis.com/v0/b/booksharing-socialnetwork.appspot.com/o/profile%2Fdefault.jpg?alt=media"
      );
    },
    logout() {
        logoutUser(this.$router);
    },

    goToEditProfile() {
      this.$router.push(`/profile/${this.userData.username}/edit-account`);
    },
  },

  mounted() {
    this.fetchUser(), this.fetchPosts();
  },
};
</script>
<style scoped>
.library-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.library-item .card {
  height: 100%;
  max-width: 250px;
  margin: 0 auto;
}

.card-img-top {
  height: 300px;
  object-fit: cover;
}
</style>
