<template>
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
          <article class="library-item" v-for="n in 15" :key="n">
            <div class="card">
              <a class="blog-entry-thumb" href="blog-single.html">
                <img class="card-img-top"
                  src="https://tunovela.es/wp-content/uploads/Cien-anos-de-soledad-de-Gabriel-Garcia-Marquez-resumen-y-analisis.jpg"
                  alt="Post">
              </a>
              <div class="card-body">
                <h2 class="h6 blog-entry-title">
                  <a href="blog-single.html">Cien años de soledad" de Gabriel García Márquez</a>
                </h2>
                <a class=" btn-tag me-2 mb-2" href="#">Realismo Mágico</a>
              </div>
              <div class="card-footer d-flex align-items-center fs-xs">
                <a class="blog-entry-meta-link" href="#">

                  Cynthia Gomez
                </a>
                <div class="ms-auto text-nowrap">
                  <a class="blog-entry-meta-link text-nowrap" href="#">Jul 23</a>
                  <span class="blog-entry-meta-divider mx-2"></span>
                  <a class="blog-entry-meta-link text-nowrap" href="blog-single.html#comments">
                    <i class="ci-heart"></i>19
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
        <!-- Pagination-->
        <nav class="d-flex justify-content-between pt-2" aria-label="Page navigation">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#"><i class="ci-arrow-left me-2"></i>Ant</a></li>
          </ul>
          <ul class="pagination">
            <li class="page-item d-sm-none"><span class="page-link page-link-static">1 / 5</span></li>
            <li class="page-item active d-none d-sm-block" aria-current="page"><span class="page-link">1<span
                  class="visually-hidden">(current)</span></span></li>
            <li class="page-item d-none d-sm-block"><a class="page-link" href="#">2</a></li>
            <li class="page-item d-none d-sm-block"><a class="page-link" href="#">3</a></li>
            <li class="page-item d-none d-sm-block"><a class="page-link" href="#">4</a></li>
            <li class="page-item d-none d-sm-block"><a class="page-link" href="#">5</a></li>
          </ul>
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#" aria-label="Next">Sig<i
                  class="ci-arrow-right ms-2"></i></a></li>
          </ul>
        </nav>
      </div>
    </div>

  </MainLayout>
</template>

<script>
import apiClient from "@/services/ApiService";
import MainLayout from "@/layouts/MainLayout.vue";

export default {
  data() {
    return {
      isAuth: true,
      posts: [],
    };
  },
  components: {
    MainLayout,
  },
  methods: {
    async getAllPosts() {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          this.isAuth = false;
          return;
        }
        const response = await apiClient.get(`/posts`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.posts = response.data;
      } catch (error) {
        console.error("Error getting posts:", error);
      }
    },
  },
  mounted() {
    this.getAllPosts();
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
