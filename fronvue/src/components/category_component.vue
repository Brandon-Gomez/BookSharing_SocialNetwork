<template>
    <div>
        <!-- Page Title-->
        <div class="page-title-overlap bg-dark pt-4">
            <div class="container d-lg-flex justify-content-between py-2 py-lg-3">
                <div class="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                    <BreadCrumbComponent :items="[
                        { label: 'Inicio', to: '/' },
                        { label: 'Categorías', to: '/categories' },
                        { label: category?.name || 'Categoría' }
                    ]" theme="breadcrumb-light" />
                </div>
                <div class="order-lg-1 pe-lg-4 text-center text-lg-start">
                    <h1 class="h3 text-light mb-0">{{ category?.name || 'Categoría' }}</h1>
                </div>
            </div>
        </div>
        <div class="container pb-5 mb-2 mb-md-4">
            <div class="row">
                <!-- Sidebar-->
                <aside class="col-lg-4">
                    <div class="offcanvas offcanvas-collapse bg-white w-100 rounded-3 shadow-lg py-1" id="shop-sidebar"
                        style="max-width: 22rem">
                        <div class="offcanvas-header align-items-center shadow-sm">
                            <h2 class="h5 mb-0">Categorías</h2>
                            <button class="btn-close ms-auto" type="button" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body py-grid-gutter px-lg-grid-gutter">
                            <div class="widget widget-categories mb-4 pb-4">
                                <h3 class="widget-title">Todas las categorías</h3>
                                <ul class="widget-list">
                                    <li v-for="cat in categories" :key="cat.id" class="widget-list-item pb-1">
                                        <router-link class="widget-list-link" :to="`/category/${cat.id}`">
                                            {{ cat.name }}
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </aside>
                <!-- Content  -->
                <section  class="col-lg-8">
                    <!-- Nuevo grid de artículos -->
                    <div v-if="posts.length > 0" class="library-grid">
                        <article class="library-item" v-for="(post) in posts" :key="post.post_id">
                            <div class="card">

                               <LikeComponent :postId="post.post_id "
                                customClass="btn-wishlist btn-sm position-absolute"
                                :customStyle="{
                                top: '0.5rem',
                                right: '0.5rem',
                                zIndex: 2,
                                background: 'rgba(255, 255, 255, 0.7)',
                                borderRadius: '50%',
                                }"
                                />
                               
                                <RouterLink class="blog-entry-thumb" :to="`posts/${post.post_id}`">
                                    <img
                                        class="card-img-top"
                                        :src="post.image"
                                        :alt="post.title"
                                    >
                                </RouterLink>
                                <div class="card-body">
                                    <h2 class="h6 blog-entry-title">
                                        <RouterLink :to="`/posts/${post.post_id}`">
                                            {{ post.title }}
                                        </RouterLink>
                                    </h2>
                                </div>
                                <div class="card-footer d-flex align-items-center fs-xs">
                                    <RouterLink class="blog-entry-meta-link" :to="`/profile/${post.username}`">
                                        {{ post.username }}
                                    </RouterLink>
                                    <div class="ms-auto text-nowrap">
                                        <a class="blog-entry-meta-link text-nowrap" href="#">
                                            {{ new Date(post.created_at).toLocaleString('en-US', {
                                                month: 'short', day:
                                                    '2-digit'
                                            }) }}
                                        </a>
                                        <span class="blog-entry-meta-divider mx-2"></span>
                                        <a class="blog-entry-meta-link text-nowrap" href="#">
                                            <i class="ci-heart"></i>{{ post.total_likes }}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>

                    </div>
                    <div v-else class="text-center ">
                        <p class="fs-lg text-light ">No hay publicaciones en esta categoría.</p>
                    </div>
                    <!-- Pagination-->
                    <pagination-component v-if="totalPages > 1" v-model="page" :totalPages="totalPages"
                        @update:modelValue="onPageChange" />
                </section>
               
            </div>
        </div>
    </div>
</template>

<script>
import apiClient from "@/services/ApiService";
import PaginationComponent from "@/components/pagination_component.vue";
import BreadCrumbComponent from "@/components/breadcrumb_component.vue";
import LikeComponent from "./like_component.vue";

export default {
    components: { PaginationComponent, BreadCrumbComponent, LikeComponent },
    data() {
        return {
            category: null,
            categories: [],
            posts: [],
            page: 1,
            limit: 9,
            totalPages: 0,
        };
    },
    watch: {
        '$route.params.categoryId': {
            immediate: true,
            handler() {
                this.page = 1;
                this.fetchAll();
            }
        },
        page() {
            this.fetchPosts();
        }
    },
    methods: {
        async fetchAll() {
            await Promise.all([
                this.fetchCategory(),
                this.fetchCategories(),
                this.fetchPosts()
            ]);
        },
        async fetchCategory() {
            try {
                const token = localStorage.getItem("authToken");
                const res = await apiClient.get(`/admin/categories/${this.$route.params.categoryId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                this.category = res.data;
            } catch (e) {
                this.category = null;
            }
        },
        async fetchCategories() {
            try {
                const token = localStorage.getItem("authToken");
                const res = await apiClient.get("/admin/categories", {
                    headers: { Authorization: `Bearer ${token}` }
                });
                this.categories = res.data;
            } catch (e) {
                this.categories = [];
            }
        },
        async fetchPosts() {
            try {
                const token = localStorage.getItem("authToken");
                const res = await apiClient.get(`/posts?category_id=${this.$route.params.categoryId}&page=${this.page}&limit=${this.limit}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                this.posts = res.data.posts;
                this.totalPages = res.data.totalPages;
            } catch (e) {
                this.posts = [];
                this.totalPages = 0;
            }
        },
        onPageChange(n) {
            this.page = n;
        }
    }
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