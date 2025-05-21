<template>

  <MainLayout>

    <div class="bg-dark py-4">
      <div class="container d-lg-flex justify-content-start py-2 py-lg-3">
        <div class="order-lg-1 pe-lg-4 text-center text-lg-start">
          <h1 class="h3 mb-0 text-light">Explora libros</h1>
        </div>
      </div>
    </div>

    <div class="container pb-5 mb-2 mb-md-4">
      <div class="pt-5 mt-md-2">
        <!-- Nuevo grid de artículos -->
        <div class="library-grid">
          <article class="library-item" v-for="(post) in posts" :key="post.post_id">
            <div class="card">

              <button data-v-336ea70c="" class="btn-wishlist btn-sm position-absolute" type="button"
                data-bs-toggle="tooltip" data-bs-placement="left" title="Me gusta"
                style="top: 0.5rem; right: 0.5rem; z-index: 2; background: rgba(255, 255, 255, 0.7); border-radius: 50%;"><i
                  data-v-336ea70c="" class="ci-heart"></i></button>
              <RouterLink class="blog-entry-thumb" :to="`posts/${post.post_id}`">
                <img class="card-img-top" :src="post.image" alt="Post">
              </RouterLink>
              <div class="card-body">
                <h2 class="h6 blog-entry-title">
                  <RouterLink :to="`/posts/${post.post_id}`">
                    {{ post.title }}
                  </RouterLink>
                </h2>
                <a class=" btn-tag me-2 mb-2" :href="`/category/${post.category_id}`">{{ post.category_name }}</a>
              </div>
              <div class="card-footer d-flex align-items-center fs-xs">
                <RouterLink class="blog-entry-meta-link" :to="`/profile/${post.username}`">
                  @{{ post.username }}
                </RouterLink>
                <div class="ms-auto text-nowrap">
                  <a class="blog-entry-meta-link text-nowrap" href="#">
                    {{ new Date(post.created_at).toLocaleString('en-US', { month: 'short', day: '2-digit' }) }}
                  </a>
                  <span class="blog-entry-meta-divider mx-2"></span>
                  <a class="blog-entry-meta-link text-nowrap" href="blog-single.html#comments">
                    <i class="ci-heart"></i>{{ post.total_likes }}
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
        <!-- Pagination-->
        <Pagination v-model="page" :totalPages="totalPages" @update:modelValue="onPageChange" />

      </div>
    </div>

  </MainLayout>
</template>

<script>
import apiClient from "@/services/ApiService";
import MainLayout from "@/layouts/MainLayout.vue";
import Pagination from "@/components/pagination_component.vue";
export default {
  data() {
    return {
      isAuth: true,
      posts: [],
      page: 1,
      limit: 15,
      totalPages: 0
    };
  },
  components: {
    MainLayout,
    Pagination,

  },
  methods: {

    async getPostsPaginated() {
      try {
        const token = localStorage.getItem("authToken");
        const response = await apiClient.get(`/posts?page=${this.page}&limit=${this.limit}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.posts = response.data.posts;
        this.totalPages = response.data.totalPages;
      } catch (error) {
        // redirect to login if token is invalid
        localStorage.removeItem("authToken");
        this.$router.push("/login");
      }
    },
    onPageChange(n) {
      this.page = n;
      this.getPostsPaginated();
    },
  },

  mounted() {
    this.getPostsPaginated();
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
