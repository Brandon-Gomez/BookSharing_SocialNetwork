<template>
  <div>
    <div class="page-title-overlap bg-dark pt-4">
      <div
        class="container d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-sm-between align-items-center pt-2">
        <div class="d-flex align-items-center pb-3">
          <div class="rounded-circle position-relative flex-shrink-0" style="width: 6.375rem">
            <img class="rounded-circle" :src="getUserImage()" :alt="userData.name" referrerpolicy="no-referrer"/>
          </div>
          <div class="ps-3">
            <h3 class="text-light fs-lg mb-0">{{ userData.name }}</h3>
            <span class="d-block text-light fs-ms opacity-60 py-1">@{{ userData.username }}</span>
            <span class="d-block text-light fs-ms py-1 w-75" style="max-width: 450px">
              {{ userData.description }}</span>
          </div>
        </div>
        <!-- Desktop version -->
        <div class="d-none d-sm-flex flex-column align-items-end">
          <div class="d-flex">
            <div class="text-end">
              <div class="text-light fs-base">{{ countPosts }}</div>
              <div class="text-light fs-ms opacity-60 py-1">Publicaciones</div>
            </div>
            <div class="text-end ml-3">
              <div class="text-light fs-base">{{ follows.followers.length }}</div>
              <div class="text-light fs-ms opacity-60 py-1">
                <a type="button" data-bs-toggle="modal" data-bs-target="#followersModal">Seguidores</a>
              </div>
            </div>
            <div class="text-end ml-3">
              <div class="text-light fs-base">{{ follows.following }}</div>
              <div class="text-light fs-ms opacity-60 py-1">
                <a type="button" data-bs-toggle="modal" data-bs-target="#followingModal">Siguiendo</a>
              </div>
            </div>
          </div>
          <div class="text-center mt-2" v-if="!isCurrentUser">
            <button class="btn btn-secondary btn-sm align-middle" @click="toggleFollow">
              {{ follows.isFollowing ? "Dejar de seguir" : "Seguir" }}
            </button>
          </div>
        </div>
        <!-- Mobile version -->
        <div class="d-flex d-sm-none w-100 justify-content-around my-3">
          <div class="text-center">
            <div class="text-light fs-6 fw-bold">{{ countPosts }}</div>
            <div class="text-light fs-ms opacity-60 py-1">Publicaciones</div>
          </div>

          <div class="text-center">
            <div class="text-light fs-6 fw-bold">{{ follows.followers_count }}</div>
            <div class="text-light fs-ms opacity-60 py-1">Seguidores</div>
          </div>
          <div class="text-center">
            <div class="text-light fs-6 fw-bold">{{ follows.following }}</div>
            <div class="text-light fs-ms opacity-60 py-1">Seguidos</div>
          </div>
        </div>

        <!-- seguir usuario buton -->
        <div class="d-lg-none">
          <button class="btn btn-secondary btn-sm" v-if="!isCurrentUser" @click="toggleFollow">
            {{ follows.isFollowing ? "Dejar de seguir" : "Seguir" }}
          </button>
        </div>
      </div>
    </div>
    <div class="container mb-5 pb-3">
      <div class="bg-light shadow-lg rounded-3 overflow-hidden">
        <div class="row">
          <!-- Sidebar-->
          <aside class="col-lg-4 pt-2 pt-lg-0 pe-xl-4">
            <div class="d-block d-lg-none p-4">
              <a class="btn btn-outline-accent d-block" href="#account-menu" data-bs-toggle="collapse"
                aria-expanded="true"><i class="ci-menu me-2"></i>Menu cuenta</a>
            </div>
            <div class="bg-white rounded-3 shadow-lg pt-1 mb-lg-0 mb-4">
              <div class="d-lg-block collapse" id="account-menu">
                <div class="bg-secondary px-4 py-3">
                  <h3 class="fs-sm mb-0 text-muted">Cuenta</h3>
                </div>
                <ul class="list-unstyled mb-0">
                  <li class="border-bottom mb-0">
                    <router-link :to="`/profile/${userData.username}/`"
                      class="nav-link-style d-flex align-items-center px-4 py-3" active-class="active">
                      <i class="ci-book opacity-60 me-2"></i>
                      Publicaciones
                    </router-link>
                  </li>
                  <li class="border-bottom mb-0">
                    <router-link :to="`/profile/${userData.username}/likes`"
                      class="nav-link-style d-flex align-items-center px-4 py-3" active-class="active">
                      <i class="ci-heart opacity-60 me-2"></i>
                      Favoritos
                    </router-link>
                  </li>
                 
                </ul>
                <div v-if="isCurrentUser">
                  <div class="bg-secondary px-4 py-3">
                    <h3 class="fs-sm mb-0 text-muted">Configuración</h3>
                  </div>
                  <ul class="list-unstyled mb-0">
                    <li class="border-bottom mb-0">
                      <router-link :to="`/profile/${userData.username}/edit-account`"
                        class="nav-link-style d-flex align-items-center px-4 py-3" active-class="active">
                        <i class="ci-user opacity-60 me-2"></i>
                        Información personal
                      </router-link>
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
            <slot></slot>
          </section>
        </div>
      </div>
    </div>

    <div>
      <!-- Botón para abrir el modal -->

      <!-- Modal -->
      <div class="modal fade" id="followersModal" tabindex="-1" style="display: none" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable" role="document" style="max-width: 400px; max-height: 400px">
          <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title">Seguidores</h6>
              <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body fs-sm">
              <div class="row">
                <div class="col-12">
                  <ul class="list-unstyled mb-0">
                    <li v-for="follower in follows.followers" :key="follower.id" class="mb-2">
                      <div class="d-flex justify-content-between">
                        <div>
                          <a :href="`/profile/${follower.username}`" class="nav-link-style d-flex align-items-center">
                            <img :src="follower.profile_picture || 'https://firebasestorage.googleapis.com/v0/b/booksharing-socialnetwork.appspot.com/o/profile%2Fdefault.jpg?alt=media'"
                              alt="" width="50" height="50" class="rounded-circle me-2" />
                            <div class="d-flex flex-column">
                              <span>@{{ follower.username }}</span>
                              <span class="text-muted">{{ follower.name }}</span>
                            </div>
                          </a>
                        </div>
                        <div class="d-flex align-items-center">
                          <!-- Se muestra el botón solo si el seguidor no es el usuario actual -->
<button v-if="follower.id != currentUserId" class="btn btn-secondary btn-sm"
  @click="toggleFollowUser(follower.id, follower.isFollowed)">
  {{ follower.isFollowed ? "Dejar de seguir" : "Seguir" }}
</button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal para "Siguiendo" -->
      <div class="modal fade" id="followingModal" tabindex="-1" style="display: none" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable" role="document" style="max-width: 400px; max-height: 400px">
          <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title">Siguiendo</h6>
              <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body fs-sm">
              <div class="row">
                <div class="col-12">
                  <ul class="list-unstyled mb-0">
                    <li v-for="user in follows.following_list" :key="user.id" class="mb-2">
                      <div class="d-flex justify-content-between">
                        <div>
                          <a :href="`/profile/${user.username}`" class="nav-link-style d-flex align-items-center">
                            <img :src="user.profile_picture || 'https://firebasestorage.googleapis.com/v0/b/booksharing-socialnetwork.appspot.com/o/profile%2Fdefault.jpg?alt=media'"
                              alt="" width="50" height="50" class="rounded-circle me-2" />
                            <div class="d-flex flex-column">
                              <span>@{{ user.username }}</span>
                              <span class="text-muted">{{ user.name }}</span>
                            </div>
                          </a>
                        </div>
                        <div class="d-flex align-items-center">
                          <!-- Se muestra el botón solo si el usuario no es el actual -->
                          <button v-if="user.id != currentUserId" class="btn btn-secondary btn-sm"
                            @click="toggleFollowUser(user.id, user.isFollowed)">
                            {{ user.isFollowed ? "Dejar de seguir" : "Seguir" }}
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
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
import { logoutUser } from "@/services/useAuth.js";

export default {
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
        profile_picture: "",
      },
      // se usa para determinar si el perfil mostrado es el del usuario logeado (no es el caso para este listado)
      isCurrentUser: null,
      follows: {
        isFollowing: false,
        followers: [],
        followers_count: 0,
        following: 0,
        following_list: [] // nueva propiedad para la lista de usuarios a los que se sigue
      },
      countPosts: 0,
      profileImageFile: null,
      profilePhoto: null, // Para la vista previa
      posts: [],
    };
  },

  computed: {
    currentUserId() {
      const userData = localStorage.getItem("userData");
      if (userData) {
        // Convertimos el id a string para asegurar la comparación posterior
        return JSON.parse(userData).id.toString();
      }
      return "";
    },
  },

  methods: {
    onPageChange(n) {
      this.page = n;
      this.fetchPosts();
    },

    async fetchUser() {
      try {
        const token = localStorage.getItem("authToken");
        const username = this.$route.params.username || localStorage.getItem("username");
        const response = await apiClient.get(`/profile/${username}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        let user = response.data.user;
        if (user.birthdate) {
          user.birthdate = user.birthdate.split("T")[0];
        }
        this.userData = {
          ...user,
          password: ""
        };
        this.isCurrentUser = response.data.isCurrentUser;

        // Obtener seguidos
        if (user.id) {
          const resFollowing = await apiClient.get(`/follow/following/count/${user.id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          this.follows.following = resFollowing.data.followingCount || 0;

          // Si no es el usuario actual, consulta si lo sigue
          if (!this.isCurrentUser) {
            const resIsFollowing = await apiClient.get(`/follow/check/${user.id}`, {
              headers: { Authorization: `Bearer ${token}` },
            });
            this.follows.isFollowing = resIsFollowing.data.isFollowing;
          }

          // Llamamos a fetchFollowers para obtener la lista completa de seguidores
          await this.fetchFollowers();
          await this.fetchFollowing();
        }

        // Cantidad de publicaciones
        const res = await apiClient.get(`/posts/count/${user.id}`);
        this.countPosts = res.data.post_count;
      } catch (error) {
        console.error("Error al obtener el usuario:", error.response?.data || error);
        this.$router.push("/");
      }
    },

    async fetchFollowers() {
      try {
        const token = localStorage.getItem("authToken");
        const resFollowers = await apiClient.get(`/follow/followers/${this.userData.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        this.follows.followers = resFollowers.data || [];
        this.follows.followers_count = this.follows.followers.length;
        // Para cada seguidor se consulta si el usuario logueado ya lo sigue
        for (let follower of this.follows.followers) {
          // Si el seguidor es el usuario actual, no se consulta el endpoint
          if (follower.id.toString() === this.currentUserId) {
            follower.isFollowed = false;
            continue;
          }
          try {
            // Se asume que el endpoint /follow/check acepta currentUserId como parámetro
            const resCheck = await apiClient.get(`/follow/check/${follower.id}`, {
              headers: { Authorization: `Bearer ${token}` },
              params: { currentUserId: this.currentUserId }
            });
            const followed = resCheck.data.isFollowing === true || resCheck.data.isFollowing === 1;
            follower.isFollowed = followed;
          } catch (error) {
            follower.isFollowed = false;

          }
        }
      } catch (error) {
        console.error("Error al obtener los seguidores:", error.response?.data || error);
      }
    },

    async fetchFollowing() {
      try {
        const token = localStorage.getItem("authToken");
        const resFollowingList = await apiClient.get(`/follow/following/${this.userData.id}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        this.follows.following_list = resFollowingList.data || [];
        if (this.userData.id.toString() === this.currentUserId) {
            // Si es el perfil propio, se marca que se sigue a todos.
            this.follows.following_list.forEach(user => {
                user.isFollowed = true;
            });
        } else {
            // Si es otro perfil, comprobamos la relación para cada usuario.
            for (let user of this.follows.following_list) {
                try {
                    const resCheck = await apiClient.get(`/follow/check/${user.id}`, {
                        headers: { Authorization: `Bearer ${token}` },
                        params: { currentUserId: this.currentUserId }
                    });
                    user.isFollowed = resCheck.data.isFollowing === true || resCheck.data.isFollowing === 1;
                } catch (error) {
                    user.isFollowed = false;
                }
            }
        }
        this.follows.following = this.follows.following_list.length;
      } catch (error) {
        console.error("Error al obtener los seguidos:", error.response?.data || error);
      }
    },
   
    async toggleFollowUser(userId, isFollowed) {
        const token = localStorage.getItem("authToken");
        try {
            if (isFollowed) {
                const res = await apiClient.delete(`/follow/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` },
                    data: { followed_id: userId }
                });
                console.log(res);
            } else {
                await apiClient.post(`/follow`, { followed_id: userId }, {
                    headers: { Authorization: `Bearer ${token}` }
                });
            }
            // Actualiza ambas listas después de la acción
            await this.fetchFollowers();
            await this.fetchFollowing();
        } catch (error) {
            console.error("Error al cambiar el estado de seguimiento:", error);
        }
    },

    getUserImage() {
      return (
        this.userData.profile_picture ||
        "https://firebasestorage.googleapis.com/v0/b/booksharing-socialnetwork.appspot.com/o/profile%2Fdefault.jpg?alt=media"
      );
    },
    logout() {
      logoutUser(this.$router);
    },
    goToEditProfile() {
      this.$router.push(`/profile/${this.userData.username}/edit-account`);
    },
    editPost(post) {
      // Redirige a la vista de edición del post del usuario
      this.$router.push(`/posts/${post.id}/edit-post`);
    },
    async deletePost(post) {
      if (confirm("¿Estás seguro de que deseas eliminar esta publicación?")) {
        try {
          const token = localStorage.getItem("authToken");
          await apiClient.delete(`/posts/${post.id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          // Recarga las publicaciones después de eliminar
          this.fetchPosts();
          alert("Publicación eliminada correctamente");
        } catch (error) {
          alert("Error al eliminar la publicación");
          console.error(error);
        }
      }
    },
    async toggleFollow() {
      try {
        const token = localStorage.getItem("authToken");
        const userId = this.userData.id;
        const action = this.follows.isFollowing ? "unfollow" : "follow";

        if (action === "follow") {
          await apiClient.post(
            `/follow`,
            { followed_id: userId },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          this.follows.isFollowing = true;
        } else {
          await apiClient.delete(`/follow/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
            data: { followed_id: userId }, // algunos clientes requieren esto, pero tu backend solo usa el param
          });
          this.follows.isFollowing = false;
        }
        // Actualiza la lista de seguidores
        await this.fetchFollowers();
        await this.fetchFollowing();
      } catch (error) {
        console.error("Error al seguir/dejar de seguir:", error);
      }
    },
  },

  beforeMount() {
    this.fetchUser();
  },
};
</script>
<style>
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
