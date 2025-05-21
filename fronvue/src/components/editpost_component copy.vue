<template>
    <!-- <div v-if="newPost" class="edit-post-container container my-4 py-4">
      <h2>Editar Publicación</h2>
      <form @submit.prevent="updatePost">
        <div class="form-group my-2">
          <label for="title">Título</label>
          <input type="text" id="title" v-model="newPost.title" class="form-control" />
        </div>
  
        <div class="form-group my-2">
          <label for="description">Descripción</label>
          <textarea id="description" v-model="newPost.description" class="form-control"></textarea>
        </div>
  
        <div class="form-group my-2">
          <label for="image">Imagen</label>
          <input type="file" id="image" @change="handleImageUpload" class="form-control" accept="image/*"/>
        </div>
  
        <div class="form-group my-2">
          <label for="pdf">Archivo PDF</label>
          <input type="file" id="pdf" @change="handlePdfUpload" class="form-control" accept="application/*"/>
        </div>
        <button type="submit" class="btn btn-primary">Guardar Cambios</button>
        <button @click="deletePost" class="btn btn-danger ml-2">Eliminar Publicación</button>
      </form>
    </div> -->

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
              class="rounded-circle"
              :src="getUserImage()"
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
                ><i class="ci-menu me-2"></i>Menu de cuenta</a
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
                  <div style="position: relative;">
                    <RouterLink
                      class="blog-entry-thumb"
                      :to="`/posts/${post.id}`"
                    >
                      <img
                        class="card-img-top"
                        :src="post.image"
                        alt="Post"
                      />
                    </RouterLink>
                    <div
                      v-if="isCurrentUser"
                      class="position-absolute"
                      style="right: 10px; bottom: 10px; display: flex; gap: 8px;"
                    >
                      <button
                        class="btn btn-warning btn-sm d-flex align-items-center"
                        @click="editPost(post)"
                        title="Editar"
                      >
                        <i class="ci-edit"></i>
                      </button>
                      <button
                        class="btn btn-danger btn-sm d-flex align-items-center"
                        @click="deletePost(post)"
                        title="Eliminar"
                      >
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
          
          </section>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
import apiClient from '@/services/ApiService';

export default {
  props: {
    postId: String, 
  },
  data() {
    return {
      newPost: { 
        title: '',
        description: '',
      },
      images: '',
      pdf_file: '',
      profileData: {
      },
    };
  },
  mounted() {
    this.fetchPost();
    this.profileData = JSON.parse(localStorage.getItem('profileData'));
  },
  methods: {
    async fetchPost() {
      try {
        const response = await apiClient.get(`/posts/${this.postId}`);
        this.newPost = response.data;
        // console.log("DATA OBTENIDA:", response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    },
    handleImageUpload(event) {
      this.newPost.images = event.target.files[0];
    },
    handlePdfUpload(event) {
      this.newPost.pdf_file = event.target.files[0];
    },
    async updatePost() {
      const token = localStorage.getItem('authToken');
      if (token) {
        const formData = new FormData();
        
        if (!this.newPost.title || !this.newPost.description) {
          console.error('Title and description are required.');
          return;
    }

    formData.append('title', this.newPost.title);
    formData.append('description', this.newPost.description);
    // formData.append('images', this.newPost.images);
    // formData.append('pdf', this.newPost.pdf_file);

    // Añadir la imagen solo si se seleccionó una nueva
    if (this.newPost.images) {
      formData.append('images', this.newPost.images);
    }

    // Añadir el PDF solo si se seleccionó uno nuevo
    if (this.newPost.pdf_file) {
      formData.append('pdf', this.newPost.pdf_file);
    }

    // Log de datos que se enviarán
    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const response = await apiClient.put(`/posts/${this.postId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);

      this.$router.push(`/profile/${this.profileData.username}`)
    } catch (error) {
      console.error('Error updating post:', error);
    }
  }
},
    async deletePost() {
      try {
        await apiClient.delete(`/posts/${this.postId}`);
        this.$router.push(`/profile/${this.$route.params.username}`);
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    },
  },
};
</script>

  <style scoped>
  .edit-post-container {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  </style>
  