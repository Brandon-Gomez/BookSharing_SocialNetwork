<template>


  <!--
DATA
posts
: 
Array(20)
0
: 
category_description
: 
"Historias futuristas o especulativas con elementos tecnológicos o espaciales."
category_id
: 
17
category_name
: 
"Ciencia ficción"
created_at
: 
"2025-01-28T05:00:00.000Z"
description
: 
"Una aventura épica en tierras desconocidas."
image
: 
null
pdf_file
: 
null
post_id
: 
7
title
: 
"Amor en tiempos difíciles"
total_likes
: 
"0"
updated_at
: 
"2025-01-28T05:00:00.000Z"
user_id
: 
443
username
: 
"user443"
views
: 
68 -->


  <MainLayout>

    <div class="bg-secondary py-4">
      <div class="container d-lg-flex justify-content-between py-2 py-lg-3">
        <div class="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-start"
              style="background-color: unset;">
              <li class="breadcrumb-item"><a class="text-nowrap" href="index.html"><i class="ci-home"></i>Home</a></li>
              <li class="breadcrumb-item text-nowrap"><a href="#">Blog</a>
              </li>
              <li class="breadcrumb-item text-nowrap active" aria-current="page">Grid no sidebar</li>
            </ol>
          </nav>
        </div>
        <div class="order-lg-1 pe-lg-4 text-center text-lg-start">
          <h1 class="h3 mb-0">Explora</h1>
        </div>
      </div>
    </div>

    <div class="container pb-5 mb-2 mb-md-4">
      <div class="pt-5 mt-md-2">
        <!-- Nuevo grid de artículos -->
        <div class="library-grid">
          <article class="library-item" v-for="(post) in posts" :key="post.post_id">
            <div class="card">

              <RouterLink class="blog-entry-thumb" :to="`posts/${post.post_id}`">
                <img class="card-img-top"
                  src="https://tunovela.es/wp-content/uploads/Cien-anos-de-soledad-de-Gabriel-Garcia-Marquez-resumen-y-analisis.jpg"
                  alt="Post">

              </RouterLink>
              <div class="card-body">
                <h2 class="h6 blog-entry-title">
                  <a href="#">
                    {{ post.title }}
                  </a>
                </h2>
                <a class=" btn-tag me-2 mb-2" href="#">{{ post.category_name }}</a>
              </div>
              <div class="card-footer d-flex align-items-center fs-xs">
                <RouterLink class="blog-entry-meta-link" :to="`/profile/${post.username}`">
                  {{ post.username }}
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
    Pagination

  },
  methods: {

    async getPostsPaginated() {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          this.isAuth = false;
          return;
        }
        const response = await apiClient.get(`/posts?page=${this.page}&limit=${this.limit}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Response data:", response.data);
        this.posts = response.data.posts;
        this.totalPages = response.data.totalPages;
      } catch (error) {
        // redirect to login if token is invalid
        if (error.response && error.response.data.message === "Token is invalid") {
          this.isAuth = false;
          localStorage.removeItem("authToken");
          this.$router.push({ name: "login" });
        } else {
          console.error("Error fetching posts:", error);
        }
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
