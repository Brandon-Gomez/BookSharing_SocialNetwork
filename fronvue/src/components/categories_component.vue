<template>
    <div>
        <!-- Page Title-->
        <div class="page-title-overlap bg-dark pt-4">
            <div class="container d-lg-flex justify-content-between py-2 py-lg-3">
                <div class="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                    <BreadCrumbComponent :items="[
                        { label: 'Inicio', to: '/' },
                        { label: 'Categorías', to: '/categories' },
                    ]" theme="breadcrumb-light" />
                </div>
                <div class="order-lg-1 pe-lg-4 text-center text-lg-start">
                    <h1 class="h3 text-light mb-0 py-3 py-lg-0">Categorías</h1>
                </div>
            </div>
        </div>
        <div class="container pb-5 mb-2 mb-md-4">
            <div class="row">
                <!-- Sidebar-->
                <sidebar class="col-lg-4">
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
                </sidebar>

                <!-- movil categorias list -->
                <div class="col-12 d-lg-none mb-4">
                    <div class="bg-white w-100 rounded-3 shadow-lg py-1" id="shop-sidebar"
                        style="max-width: 22rem">
                        
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
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import apiClient from "@/services/ApiService";
import BreadCrumbComponent from "@/components/breadcrumb_component.vue";

export default {
    components: { BreadCrumbComponent },
    data() {
        return {
            categories: [],
        };
    },

    async mounted() {
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
};
</script>
