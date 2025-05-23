<template>
  <div>
    <div class="page-title-overlap bg-dark pt-4">
      <div
        class="container d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-sm-between align-items-center pt-2">
        <div class="d-flex align-items-center pb-3">
          <div class="rounded-circle position-relative flex-shrink-0" style="width: 6.375rem">
            <img class="rounded-circle" :src="getUserImage()" :alt="userData.name" />
          </div>
          <div class="ps-3">
            <h3 class="text-light fs-lg mb-0">{{ userData.name }}</h3>
            <span class="d-block text-light fs-ms opacity-60 py-1">@{{ userData.username }}</span>
            <span class="d-block text-light fs-ms py-1 w-75" style="max-width: 450px">
              {{ userData.description }}</span>

          </div>
        </div>
        <!-- Desktop version -->
        <div class="d-none d-sm-flex">
          <div class="text-sm-end me-2">
            <div class="text-light fs-base mr-2">{{ countPosts }}<span
                class="text-light fs-ms opacity-60 py-1 ml-2">Publicaciones</span>
            </div>
          </div>
          <div class="text-sm-end me-2">
            <div class="text-light fs-base mr-2">{{ follows.followers }}<span
                class="text-light fs-ms opacity-60 py-1 ml-2">Seguidores</span>
            </div>
          </div>
          <div class="text-sm-end me-2">
            <div class="text-light fs-base mr-2">{{ follows.following }}<span
                class="text-light fs-ms opacity-60 py-1  ml-2">Siguiendo</span>
            </div>
          </div>
        </div>
        <!-- Mobile version -->
        <div class="d-flex d-sm-none w-100 justify-content-around my-3">
          <div class="text-center">
            <div class="text-light fs-6 fw-bold">{{ countPosts }}</div>
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
              <a class="btn btn-outline-accent d-block" href="#account-menu" data-bs-toggle="collapse"
                aria-expanded="true"><i class="ci-menu me-2"></i>Menu de cuenta</a>
            </div>
            <div class="bg-white rounded-3 shadow-lg pt-1 mb-lg-0">
              <div class="d-lg-block collapse" id="account-menu">
                <div class="bg-secondary px-4 py-3">
                  <h3 class="fs-sm mb-0 text-muted">Cuenta</h3>
                </div>
                <ul class="list-unstyled mb-0">
                  <li class="border-bottom mb-0">
                    <a type="button" class="nav-link-style d-flex align-items-center px-4 py-3 active"
                      @click.prevent="$router.push(`/profile/${userData.username}`)">
                      <i class="ci-book opacity-60 me-2"></i>
                      Publicaciones
                    </a>
                  </li>
                  <li class="border-bottom mb-0">
                    <a class="nav-link-style d-flex align-items-center px-4 py-3" href="#">
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
                      <a type="button" class="nav-link-style d-flex align-items-center px-4 py-3"
                        @click.prevent="goToEditProfile">
                        <i class="ci-user opacity-60 me-2"></i>
                        Información personal
                      </a>
                    </li>
                    <li class="border-top mb-0">
                      <a type="button" class="nav-link-style d-flex align-items-center px-4 py-3" @click="logout">
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

            <h2 class="h3 pt-2 pb-4 mb-0 text-center text-sm-start border-bottom mt-2">
              Crear publicación
            </h2>
            <form @submit.prevent="createPost">
              <div class="form-group my-2">
                <label for="title">Título</label>
                <input type="text" id="title" v-model="newPost.title" class="form-control" />
              </div>

              <div class="form-group my-2">
                <label for="description">Descripción</label>
                <textarea id="description" v-model="newPost.description" class="form-control"></textarea>
              </div>

              <div class="form-group my-2">
                <label for="category">Categoría</label>
                <select id="category" v-model="newPost.category_id" class="form-control form-control-sm">
                  <option value="" disabled selected>Selecciona una categoría</option>
                  <option v-for="category in categories" :key="category.id" :value="category.id">
                    {{ category.name }}
                  </option>
                </select>
              </div>
              <div class="form-group my-2">
                <label for="image">Imagen</label>
                <input type="file" id="image" @change="handleImageUpload" class="form-control" accept="image/*" />
              </div>
              <div class="form-group my-2">
                <label for="pdf">Archivo PDF</label>
                <input type="file" id="pdf" @change="handlePdfUpload" class="form-control" accept="application/*" />
              </div>
              <button type="submit" class="btn btn-success mt-2">Crear publicación</button>
            </form>

          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiClient from "@/services/ApiService";
import { logoutUser } from '@/services/useAuth.js';

export default {
  components: {
  },

  data() {
    return {

      categories: [],
      userData: {
        id: "",
        email: "",
        password: "",
        username: "",
        name: "",
        birthdate: "",
        gender: "",
        description: "",
        profile_picture: "",
      },
      isCurrentUser: true,
      publications: 0,
      follows: {
        isFollowing: false,
        followers: 0,
        following: 0,
      },
      countPosts: 0,
      profileImageFile: null,
      profilePhoto: null,
      newPost: {
        id: "",
        title: "",
        description: "",
        images: "",
        pdf: "",
      },
    };
  },

  methods: {
    onPageChange(n) {
      this.page = n;
    },

    async fetchUser() {
      try {
        const token = localStorage.getItem("authToken");
        const username = localStorage.getItem("username");
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

          // cantidad de publicaciones
          const res = await apiClient.get(`/posts/count/${user.id}`);
          this.countPosts = res.data.post_count;

        }
      } catch (error) {
        console.error(
          "Error al obtener el usuario:",
          error.response?.data || error
        );
      }
    },

    async fetchCategories() {
      try {
        const response = await apiClient.get('/categories', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        });
        this.categories = response.data;
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },
    getUserImage() {
      return (
        this.userData.profile_picture ||
        "https://firebasestorage.googleapis.com/v0/b/booksharing-socialnetwork.appspot.com/o/profile%2Fdefault.jpg?alt=media"
      );
    },
    handleImageUpload(event) {
      this.newPost.images = event.target.files[0];
    },
    handlePdfUpload(event) {
      this.newPost.pdf = event.target.files[0];
    },
    logout() {
      logoutUser(this.$router);
    },
 
    goToEditProfile() {
      this.$router.push(`/profile/${this.userData.username}/edit-account`);
    },
    async createPost() {
      const token = localStorage.getItem('authToken');
      if (token) {
        const formData = new FormData();


         if (!this.newPost.images || !this.newPost.pdf) {
      alert('Se requieren una imagen y un archivo PDF.');
      return;
    }
        formData.append('title', this.newPost.title);
        formData.append('description', this.newPost.description);
        formData.append('category_id', this.newPost.category_id);
        formData.append('images', this.newPost.images);
        formData.append('pdf', this.newPost.pdf);

        try {
          const response = await apiClient.post('/posts', formData, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log('Publicación creada:', response.data);
          this.$router.push(`/profile/${this.userData.username}`);
        } catch (error) {
          console.error('Error creando publicación:', error);
        }
      }
    },
  },

  async mounted() {
      await this.fetchCategories(),
      this.fetchUser();
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
