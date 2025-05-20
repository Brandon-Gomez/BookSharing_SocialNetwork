<template>
    <div>
        <div class="bg-secondary py-4">
            <div class="container d-lg-flex justify-content-between py-2 py-lg-3">
                <div class="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                    <breadcrumb_component
                        :items="[{ label: 'Inicio', to: '/' }, { label: 'Libros', to: '/posts' }, { label: post.title }]"
                        theme="breadcrumb-dark" />
                </div>

                <div class="order-lg-1 pe-lg-4 text-center text-lg-start align-self-center">
                    <h1 class="h3 mb-0" style="display: flex; align-items: anchor-center">
                        {{ post.title }}
                        <a class="btn-tag ml-2" :href="`/category/${post.category_id}`">{{ post.category_name }}</a>
                    </h1>
                </div>
            </div>
        </div>
        <div class="container pb-5">
            <div class="row pt-5 mt-md-2">
                <section class="col-lg-8">
                    <!-- Post meta-->
                    <div class="d-flex flex-wrap justify-content-between align-items-center pb-4 mt-n1">
                        <div class="d-flex align-items-center fs-sm mb-2">
                            <a class="blog-entry-meta-link" :href="`/profile/${post.username}`">
                                <div class="blog-entry-author-ava">
                                    <img src="../../dist/img/blog/meta/02.jpg" alt="Foto" />
                                </div>
                                {{ post.username }}
                            </a><span class="blog-entry-meta-divider"></span><a class="blog-entry-meta-link" href="#">{{
                                post.created_at
                            }}</a>
                        </div>
                        <div class="fs-sm mb-2">
                            <p class="blog-entry-meta-link text-nowrap mr-3" data-scroll=""><i class="ci-eye"></i>{{
                                post.views }}</p>
                            <p class="blog-entry-meta-link text-nowrap mr-3" data-scroll=""><i class="ci-heart"></i>{{
                                post.total_likes }}</p>
                        </div>
                    </div>
                    <!-- Gallery-->
                    <h2 class="h4"></h2>

                    <div class="gallery pb-2 text-center" lg-uid="lg0">
                        <img width="300px"
                            src="https://tunovela.es/wp-content/uploads/Cien-anos-de-soledad-de-Gabriel-Garcia-Marquez-resumen-y-analisis.jpg"
                            alt="Gallery image" />
                    </div>
                    <!-- Post content-->
                    <p class="mt-2">
                        "Cien años de soledad" narra la historia de la familia Buendía,
                        desde su fundación en el pueblo de Macondo hasta su declive y
                        desaparición. A lo largo de siete generaciones, los Buendía
                        experimentan amores imposibles, tragedias, guerras y una maldición
                        que los condena a una profunda soledad.
                    </p>

                    <!-- ver pdf button -->

                    <!-- Post tags + sharing-->
                    <div class="d-flex flex-wrap justify-content-between pb-4 mb-1">
                        <div class="mt-2 me-3">
                            <PdfPreview v-if="post.pdf_file" :pdfUrl="post.pdf_file" :postId="post.id" />
                            <button class="btn-wishlist btn-sm ml-3" type="button" data-bs-toggle="tooltip"
                                data-bs-placement="left" title="Añadir a favoritos"><i class="ci-heart"></i></button>
                        </div>
                        <div class="mt-3">
                            <span
                                class="d-inline-block align-middle text-muted fs-sm me-3 mt-1 mb-2">Compartir:</span><a
                                @click="btnCompartir" class="btn-social bs-facebook me-2 mb-2" href="#"><i
                                    class="ci-facebook"></i></a><a @click="btnCompartir"
                                class="btn-social bs-twitter me-2 mb-2" href="#"><i class="ci-twitter"></i></a><a
                                @click="btnCompartir" class="btn-social bs-pinterest me-2 mb-2" href="#"><i
                                    class="ci-pinterest"></i></a>
                        </div>
                    </div>
                    <!-- Post navigation-->
                    <nav class="entry-navigation" aria-label="Post navigation">
                        <a class="entry-navigation-link" v-if="prevPost" :href="`/posts/${prevPost.id}`"
                            data-bs-toggle="popover" data-bs-placement="top" data-bs-trigger="hover" data-bs-html="true"
                            :data-bs-content="`<div class='d-flex align-items-center'><img src='${prevPost.image || 'img/blog/navigation/01.jpg'}' width='60' class='rounded' alt='Post thumb'><div class='ps-3'><h6 class='fs-sm fw-semibold mb-0'>${prevPost.title || ''}</h6><span class='d-block fs-xs text-muted'>by ${prevPost.username || ''}</span></div></div>`"
                            data-bs-original-title="" title="">
                            <i class="ci-arrow-left me-2"></i><span class="d-none d-sm-inline">Ant</span>
                        </a>
                        <a class="entry-navigation-link" v-else disabled style="pointer-events: none; opacity: 0.5;">
                            <i class="ci-arrow-left me-2"></i><span class="d-none d-sm-inline">Ant</span>
                        </a>

                        <a class="entry-navigation-link" :href="`/profile/${post.username}`"><i
                                class="ci-view-list me-2"></i><span class="d-none d-sm-inline">Ver libros</span></a>

                        <a class="entry-navigation-link" v-if="nextPost" :href="`/posts/${nextPost.id}`"
                            data-bs-toggle="popover" data-bs-placement="top" data-bs-trigger="hover" data-bs-html="true"
                            :data-bs-content="`<div class='d-flex align-items-center'><img src='${nextPost.image || 'img/blog/navigation/02.jpg'}' width='60' class='rounded' alt='Post thumb'><div class='ps-3'><h6 class='fs-sm fw-semibold mb-0'>${nextPost.title || ''}</h6><span class='d-block fs-xs text-muted'>by ${nextPost.username || ''}</span></div></div>`"
                            data-bs-original-title="" title="">
                            <span class="d-none d-sm-inline">Sig</span><i class="ci-arrow-right ms-2"></i>
                        </a>
                        <a class="entry-navigation-link" v-else disabled style="pointer-events: none; opacity: 0.5;">
                            <span class="d-none d-sm-inline">Sig</span><i class="ci-arrow-right ms-2"></i>
                        </a>
                    </nav>
                </section>
                <aside class="col-lg-4">
                    <!-- Sidebar-->
                    <div class="offcanvas offcanvas-collapse offcanvas-end border-start ms-lg-auto" id="blog-sidebar"
                        style="max-width: 22rem">
                        <div class="offcanvas-header align-items-center shadow-sm">
                            <h2 class="h5 mb-0">Sidebar</h2>
                            <button class="btn-close ms-auto" type="button" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body py-grid-gutter py-lg-1 px-lg-4" data-simplebar="init"
                            data-simplebar-auto-hide="true">
                            <div class="simplebar-wrapper" style="margin: -4px -24px">
                                <div class="simplebar-height-auto-observer-wrapper">
                                    <div class="simplebar-height-auto-observer"></div>
                                </div>
                                <div class="simplebar-mask">
                                    <div class="simplebar-offset" style="right: 0px; bottom: 0px">
                                        <div class="simplebar-content-wrapper" tabindex="0" role="region"
                                            aria-label="scrollable content" style="height: auto; overflow: hidden">
                                            <div class="simplebar-content" style="padding: 4px 24px">
                                                <!-- Categories-->
                                                <div
                                                    class="widget widget-links mb-grid-gutter pb-grid-gutter border-bottom mx-lg-2">
                                                    <h3 class="widget-title">Categorías libros</h3>
                                                    <ul class="widget-list">
                                                        <li v-for="cat in categories" :key="cat.id"
                                                            class="widget-list-item">
                                                            <RouterLink
                                                                class="widget-list-link d-flex justify-content-between align-items-center"
                                                                :to="`/category/${cat.id}`">
                                                                <span>{{ cat.name }}</span>
                                                                <span class="fs-xs text-muted ms-3">{{
                                                                    cat.post_count
                                                                }}</span>
                                                            </RouterLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- Trending posts-->
                                                <div class="widget mb-grid-gutter pb-grid-gutter mx-lg-2">
                                                    <h3 class="widget-title">Libros en tendencia</h3>
                                                    <div v-if="topPosts.length === 0" class="text-muted">No hay libros
                                                        en tendencia.</div>
                                                    <div v-else>
                                                        <div v-for="post in topPosts" :key="post.post_id"
                                                            class="d-flex align-items-center mb-3">
                                                            <a class="flex-shrink-0" :href="`/posts/${post.post_id}`">
                                                                <img class="rounded"
                                                                    :src="post.image || 'https://tunovela.es/wp-content/uploads/Cien-anos-de-soledad-de-Gabriel-Garcia-Marquez-resumen-y-analisis.jpg'"
                                                                    width="64" alt="Post image" />
                                                            </a>
                                                            <div class="ps-3">
                                                                <h6 class="blog-entry-title fs-sm mb-0">
                                                                    <a :href="`/posts/${post.post_id}`">{{ post.title
                                                                    }}</a>
                                                                </h6>
                                                                <span class="fs-ms text-muted">
                                                                    por
                                                                    <span class="blog-entry-meta-link">{{ post.username
                                                                    }}</span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="simplebar-placeholder" style="width: auto; height: 1081px"></div>
                            </div>
                            <div class="simplebar-track simplebar-horizontal" style="visibility: hidden">
                                <div class="simplebar-scrollbar" style="width: 0px; display: none"></div>
                            </div>
                            <div class="simplebar-track simplebar-vertical" style="visibility: hidden">
                                <div class="simplebar-scrollbar" style="height: 0px; display: none"></div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </div>

</template>
<script>
import apiClient from "../services/ApiService.js";
import PdfPreview from "@/components/pdfpreview_component.vue";
import breadcrumb_component from "./breadcrumb_component.vue";

export default {
    data() {
        return {
            categories: [],
            post: {
                id: null,
                title: "",
                description: "",
                user_id: null,
                image: "",
                pdf_file: "",
                created_at: "",
                updated_at: "",
                views: 0,
                category_id: null,
                username: "",
            },
            topPosts: [],
            loading: true,
            error: null,
            nextPost: null,
            prevPost: null,
        };
    },
    async beforeMount() {

        // verificar si el usuario esta logueado
        const token = localStorage.getItem("authToken");
        this.post.id = this.$route.params.postId;

        try {
            if (this.post.id == null || this.post.id == undefined) {
                this.error = "No se pudo cargar la información del libro.";
                return;
            }
            const response = await apiClient.get(`/posts/${this.$route.params.postId}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                    },
                }
            );

            // formatea en español 2025-05-19T16:53:10.117Z a una fecha legible
            const date = new Date(response.data.created_at);
            const options = { year: "numeric", month: "long", day: "numeric" };
            const formattedDate = date.toLocaleDateString("es-ES", options);
            this.post = response.data;
            this.post.created_at = formattedDate;
            // this.loading = false;
        } catch (err) {
            this.$router.push("/");
        }
        // consultar todas las categorias
        // token
        try {
            const res = await apiClient.get("/admin/categories", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            });
            this.categories = res.data;
        } catch (err) {
            this.error = "No se pudo cargar la información de las categorias.";
        }

        try {
            const res = await apiClient.get("/posts/top",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }

            );
            this.topPosts = res.data;

        } catch (err) {
            this.error = "No se pudo cargar la información de los libros.";
        }

        try {

            const res = await apiClient.get(`/posts/${this.post.id}/next`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            });
            this.nextPost = res.data;
        } catch (err) {
            console.log(err);
        }

        // ant post
        try {
            const res = await apiClient.get(`/posts/${this.post.id}/prev`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            });
            this.prevPost = res.data;
        } catch (err) {
            console.log(err);
        }

    },

    components: { PdfPreview, breadcrumb_component },

    methods: {
        btnCompartir() {
            // Verificamos si el navegador tiene soporte para el API compartir
            if ("share" in navigator) {
                navigator
                    .share({
                        // Defino un título para la ventana de compartir
                        title: "Comparte Esta Página en Tu Plataforma Favorita",

                        // Detecto la URL actual de la página 
                        url: window.location.href
                    })

                    // Mensaje en Consola cuando se presiona el botón de compartir 
                    .then(() => {
                        console.log("Contenido Compartido !");
                    })
                    .catch(console.error);
            } else {
                // Si el navegador no tiene soporte para la API compartir, le enviamos un mensaje al usuario
                alert('Lo siento, este navegador no tiene soporte para recursos compartidos.')
            }
        },
    }
};
</script>
