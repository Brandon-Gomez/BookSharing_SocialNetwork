<template>
  <div>

    <h2 class="h3 pt-2 pb-4 mb-0 text-center text-sm-start border-bottom mt-2">
      Modificar publicacion
    </h2>
    <form @submit.prevent="updatePost">
      <div class="form-group my-2">
        <label for="title">Título</label>
        <input
          type="text"
          id="title"
          v-model="newPost.title"
          class="form-control"
        />
      </div>

      <div class="form-group my-2">
        <label for="description">Descripción</label>
        <textarea
          id="description"
          v-model="newPost.description"
          class="form-control"
        ></textarea>
      </div>

      <div class="form-group">
        <label for="category">Categoría</label>
        <select
          id="category"
          v-model="newPost.category_id"
          class="form-control form-control-sm"
        >
          <option value="" disabled selected>Selecciona una categoría</option>
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.id"
          >
            {{ category.name }}
          </option>
        </select>
      </div>

      <div class="form-group my-2">
        <label for="image">Imagen</label>
        <input
          type="file"
          id="image"
          @change="handleImageUpload"
          class="form-control"
          accept="image/*"
        />
      </div>

      <div class="form-group my-2">
        <label for="pdf">Archivo PDF</label>
        <input
          type="file"
          id="pdf"
          @change="handlePdfUpload"
          class="form-control"
          accept="application/*"
        />
      </div>
      <button type="submit" class="btn btn-primary">Guardar Cambios</button>
      <!-- <button @click="deletePost" class="btn btn-danger ml-2">Eliminar Publicación</button> -->
    </form>
  </div>
</template>

<script>
import apiClient from "@/services/ApiService";
import { logoutUser } from "@/services/useAuth.js";

export default {
  components: {},

  props: {
    postId: {
      type: [String, Number],
      required: true,
    },
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
        image: "",
        pdf: "",
      },
    };
  },

  methods: {
    onPageChange(n) {
      this.page = n;
      this.fetchPosts();
    },

    async fetchPost() {
      try {
        // console log prop postId
        const postId = this.postId;
        const token = localStorage.getItem("authToken");
        const response = await apiClient.get(`/posts/${postId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.userData.id = response.data.user_id;
        this.userData.username = response.data.username;
        this.newPost = response.data;
        // console.log("DATA OBTENIDA:", response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
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

    async updatePost() {
      const token = localStorage.getItem("authToken");
      if (token) {
        const formData = new FormData();

        if (!this.newPost.title || !this.newPost.description) {
          console.error("Title and description are required.");
          return;
        }

        formData.append("title", this.newPost.title);
        formData.append("description", this.newPost.description);
        formData.append("category_id", this.newPost.category_id);
        // formData.append('images', this.newPost.images);
        // formData.append('pdf', this.newPost.pdf_file);

        // Añadir la imagen solo si se seleccionó una nueva
        if (this.newPost.image) {
          formData.append("images", this.newPost.image);
        }

        // Añadir el PDF solo si se seleccionó uno nuevo
        if (this.newPost.pdf_file) {
          formData.append("pdf", this.newPost.pdf_file);
        }

        // Log de datos que se enviarán
        for (const [key, value] of formData.entries()) {
          console.log(`${key}:`, value);
        }

        try {
          const response = await apiClient.put(
            `/posts/${this.postId}`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log(response.data);

          this.$router.push(`/profile/${this.userData.username}`);
        } catch (error) {
          console.error("Error updating post:", error);
        }
      }
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
          alert("Publicación eliminada correctamente");
        } catch (error) {
          alert("Error al eliminar la publicación");
          console.error(error);
        }
      }
    },
    // get categories from api
    async fetchCategories() {
      try {
        const response = await apiClient.get("/categories", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        this.categories = response.data;
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },
  },

  async mounted() {
    await this.fetchPost(), await this.fetchCategories();
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
