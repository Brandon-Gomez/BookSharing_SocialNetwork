<template>
  <div class="container mb-2 mb-md-4 py-3">
    
            <h2
              class="h3 pt-2 pb-4 mb-0 text-center text-sm-start border-bottom mt-2"
            >
              Modificar perfil
            </h2>
            <div class="tab-content mt-4">
              <div
                class="tab-pane fade show active"
                id="profile"
                role="tabpanel"
              >
                <div class="bg-secondary rounded-3 p-4 mb-4">
                  <div class="d-flex align-items-center">
                    <img
                      class="rounded"
                      :src="profilePhoto || getUserImage()"
                      width="90"
                      alt="Foto de perfil"
                    />
                    <div class="ps-3">
                      <input
                        type="file"
                        @change="handleFileUpload"
                        class="form-control form-control-sm mt-2"
                        accept="image/*"
                      />
                      <div class="p mb-0 fs-ms text-muted">
                        Sube una imagen JPG, GIF o PNG. 300 x 300 recomendado.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row gx-4 gy-3">
                  <div class="col-sm-6">
                    <label class="form-label" for="dashboard-name"
                      >Nombre</label
                    >
                    <input
                      class="form-control form-control-sm"
                      type="text"
                      id="dashboard-name"
                      v-model="userForm.name"
                    />
                  </div>

                  <div class="col-sm-6">
                    <label class="form-label" for="dashboard-description"
                      >Descripción</label
                    >
                    <input
                      class="form-control form-control-sm"
                      type="text"
                      id="dashboard-description"
                      v-model="userForm.description"
                    />
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label" for="dashboard-username"
                      >Usuario</label
                    >
                    <input
                      class="form-control form-control-sm"
                      type="text"
                      id="dashboard-username"
                      v-model="userForm.username"
                    />
                  </div>

                  <div class="col-sm-6">
                    <label class="form-label" for="dashboard-gender"
                      >Género</label
                    >
                    <select
                      class="form-select form-select-sm"
                      id="dashboard-gender"
                      v-model="userForm.gender"
                    >
                      <option value="">Selecciona género</option>
                      <option value="M">Masculino</option>
                      <option value="F">Femenino</option>
                    </select>
                  </div>

                  <div class="col-sm-6">
                    <label class="form-label" for="dashboard-password"
                      >Contraseña</label
                    >
                    <input
                      class="form-control form-control-sm"
                      type="password"
                      id="dashboard-password"
                      v-model="userForm.password"
                    />
                  </div>

                  <div class="col-12">
                    <hr class="mt-2 mb-4" />
                    <div
                      class="d-sm-flex justify-content-between align-items-center"
                    >
                      <button
                        class="btn btn-primary mt-3 mt-sm-0"
                        type="button"
                        @click="updateUser"
                      >
                        Guardar cambios
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  </div>
</template>

<script>
import apiClient from "@/services/ApiService";

export default {
  components: {},
  data() {
    return {
      isCurrentUser: false,
      countPosts: 0,
      userForm: {
        id: "",
        name: "",
        description: "",
        username: "",
        password: "",
        gender: "",
        
      },
      originalUsername: "", // <-- Agrega esto
      profilePhoto: null,
      profileImageFile: null,
      publications: 0,
      follows: {
        isFollowing: false,
        followers: 0,
        following: 0,
      },
    };
  },
   mounted() {
   this.fetchUser();
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.profileImageFile = file;
        this.profilePhoto = URL.createObjectURL(file);
      }
    },
    async fetchUser() {
      try {
        const token = localStorage.getItem("authToken");
        const username = this.$route.params.username;
        const response = await apiClient.get(`/profile/${username}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.userForm = {
          id: response.data.user.id,
          name: response.data.user.name,
          username: response.data.user.username,
          description: response.data.user.description || "",
          gender: response.data.user.gender || "",
          profile_picture: response.data.user.profile_picture,
          
        };
        this.originalUsername = response.data.user.username; // <-- Guarda el username original
        this.isCurrentUser = response.data.isCurrentUser;

        const res = await apiClient.get(`/posts/count/${response.data.user.id}`);
        this.countPosts = res.data.post_count;

          // Seguidores
          const resFollowers = await apiClient.get(
            `/follow/followers/count/${response.data.user.id}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          this.follows.followers = resFollowers.data.followerCount || 0;

          // Seguidos
          const resFollowing = await apiClient.get(
            `/follow/following/count/${response.data.user.id}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          this.follows.following = resFollowing.data.followingCount || 0;
  
      } catch (error) {
        console.error(
          "Error al obtener el usuario:",
          error.response?.data || error
        );
      }
    },
async updateUser() {
  const token = localStorage.getItem("authToken");
  if (token) {
    try {
      // Copia el userForm para no modificar el original
      const userData = { ...this.userForm };
      // Si el username no cambió, elimínalo del objeto a enviar
      if (userData.username === this.originalUsername) {
        delete userData.username;
      }
      await apiClient.put(
        `/profile/${this.userForm.id}`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (this.profileImageFile) {
        const formData = new FormData();
        formData.append("photo", this.profileImageFile);
        const res = await apiClient.post(`/upload/profile`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        // Actualiza la imagen en el frontend si el backend devuelve la URL
        if (res.data && res.data.photoUrl) {
          this.userForm.profile_picture = res.data.photoUrl;
          this.profilePhoto = res.data.photoUrl;
        }
      }
      // Opcional: feedback al usuario
      alert("Perfil actualizado correctamente");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Error al actualizar el perfil");
    }
  }
},
 
    getUserImage() {
      return (
        this.userForm.profile_picture ||
        "https://firebasestorage.googleapis.com/v0/b/booksharing-socialnetwork.appspot.com/o/profile%2Fdefault.jpg?alt=media"
      );
    },
    logout() {
      localStorage.removeItem("authToken");
      localStorage.removeItem("profileData");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.file-input {
  position: relative;
  width: 100%;
}

.file-input input[type="file"] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.file-input-preview {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.preview-item {
  display: flex;
  align-items: center;
  max-width: 100%;
  flex: 1 1 calc(33.33% - 10px);
  min-width: 80px;
  box-sizing: border-box;
}

.preview-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 5px;
}

.preview-filename {
  margin-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.placeholder-text {
  display: block;
  color: #adb5bd;
  text-align: center;
}

@media (max-width: 768px) {
  .preview-item {
    flex: 1 1 calc(50% - 10px);
  }
}

@media (max-width: 480px) {
  .preview-item {
    flex: 1 1 100%;
  }
}
</style>
