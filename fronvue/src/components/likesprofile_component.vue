<template>
  <!-- Toolbar-->
  <div class="container d-flex justify-content-start align-items-center mb-4">
    <h2 class="h3 mb-0">Favoritos</h2>
  </div>

  <!-- grid books -->
  <div v-if="posts.length > 0" class="container mb-2 mb-md-4 library-grid py-3">
    <article class="library-item" v-for="post in posts" :key="post.id">
      <div class="card">
        <LikeComponent :postId="post.id" customClass="btn-wishlist btn-sm position-absolute" :customStyle="{
          top: '0.5rem',
          right: '0.5rem',
          zIndex: 2,
          background: 'rgba(255, 255, 255, 0.7)',
          borderRadius: '50%',
        }" />

        <div style="position: relative">
          <RouterLink class="blog-entry-thumb" :to="`/posts/${post.id}`">
            <img class="card-img-top" :src="post.image" alt="Post" />
          </RouterLink>
          <div v-if="isCurrentUser" class="position-absolute"
            style="right: 10px; bottom: 10px; display: flex; gap: 8px">
            <button class="btn btn-warning btn-sm d-flex align-items-center" @click="editPost(post)" title="Editar">
              <i class="ci-edit"></i>
            </button>
            <button class="btn btn-danger btn-sm d-flex align-items-center" @click="deletePost(post)" title="Eliminar">
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
    <p class="text-center mt-4">No hay publicaciones para mostrar.</p>
  </div>
  <!-- Pagination-->
  <pagination_component v-model="page" v-if="posts.length > 0" :totalPages="totalPages"
    @update:modelValue="onPageChange" />
</template>

<script>
import apiClient from "@/services/ApiService";
import pagination_component from "@/components/pagination_component.vue";
import LikeComponent from "@/components/like_component.vue";

export default {
  components: {
    pagination_component,
    LikeComponent,
  },
  props: {
    // postId: {
    //   type: String,
    //   required: true,
    // },
    // customClass: {
    //   type: String,
    //   default: "",
    // },
    // customStyle: {
    //   type: Object,
    //   default: () => ({}),
    // },
  },
  data() {
    return {
      posts: [],
      page: 1,
      totalPages: 0,
      userData: {},
      totalPosts: 0,
      postsPerPage: 6,
    };
  },

  methods: {
    onPageChange(n) {
      this.page = n;
      this.fetchPosts();
    },
    async fetchPosts() {
      try {
        const token = localStorage.getItem("authToken");

        const username = this.$route.params.username;

        const res = await apiClient.get(
          `/posts/user/liked/${username}?page=${this.page}&limit=${this.postsPerPage}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res.data);
        this.posts = res.data.posts;
        this.page = res.data.page;
        this.totalPosts = res.data.totalPosts;
        this.totalPages = parseInt(res.data.totalPages, 10)
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },

  },
  mounted() {
    this.fetchPosts();
  },
};
</script>
