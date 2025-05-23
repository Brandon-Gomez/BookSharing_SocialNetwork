<template>
    <button
      :class="['btn-wishlist btn-sm ml-3', customClass]"
      :style="customStyle"
      type="button"
      data-bs-toggle="tooltip"
      data-bs-placement="left"
      :title="isLiked ? 'Quitar de favoritos' : 'Añadir a favoritos'"
      @click="toggleLike"
    >
      <span v-if="!isLiked">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="13" height="13" viewBox="0 0 28 28">
          <path d="M26 9.312c0-4.391-2.969-5.313-5.469-5.313-2.328 0-4.953 2.516-5.766 3.484-0.375 0.453-1.156 0.453-1.531 0-0.812-0.969-3.437-3.484-5.766-3.484-2.5 0-5.469 0.922-5.469 5.313 0 2.859 2.891 5.516 2.922 5.547l9.078 8.75 9.063-8.734c0.047-0.047 2.938-2.703 2.938-5.563zM28 9.312c0 3.75-3.437 6.891-3.578 7.031l-9.734 9.375c-0.187 0.187-0.438 0.281-0.688 0.281s-0.5-0.094-0.688-0.281l-9.75-9.406c-0.125-0.109-3.563-3.25-3.563-7 0-4.578 2.797-7.313 7.469-7.313 2.734 0 5.297 2.156 6.531 3.375 1.234-1.219 3.797-3.375 6.531-3.375 4.672 0 7.469 2.734 7.469 7.313z"/>
        </svg>
      </span>
      <span v-else>
        <svg  xmlns="http://www.w3.org/2000/svg" version="1.1" width="13" height="13" viewBox="0 0 28 28">
          <path fill="#e74c3c" d="M14 26c-0.25 0-0.5-0.094-0.688-0.281l-9.75-9.406c-0.125-0.109-3.563-3.25-3.563-7 0-4.578 2.797-7.313 7.469-7.313 2.734 0 5.297 2.156 6.531 3.375 1.234-1.219 3.797-3.375 6.531-3.375 4.672 0 7.469 2.734 7.469 7.313 0 3.75-3.437 6.891-3.578 7.031l-9.734 9.375c-0.187 0.187-0.438 0.281-0.688 0.281z"/>
        </svg>
      </span>
    </button>
    <!-- <span>{{ likeCount }} Me gusta</span> -->
</template>
  
  <script>
  import apiClient from "@/services/ApiService";
  
  export default {
    props: {
      postId: {
        type: String,
        required: true,
      },
      customClass: {
        type: String,
        default: "",
      },
      customStyle: {
        type: Object,
        default: () => ({}),
      },
    },
    data() {
      return {
        isLiked: null, // Cambiar a null para evitar un valor inicial incorrecto
        likeCount: 0,
      };
    },
    async created() {
      try {
        // Obtén el contador de "likes" y verifica si el usuario ya ha dado like
        await this.fetchLikeCount();
        await this.checkIfLiked();
      } catch (error) {
        console.error("Error during initialization:", error);
      }
    },
    methods: {
      // Obtiene el contador de "likes"
      async fetchLikeCount() {
        try {
          const response = await apiClient.get(`/like/count/${this.postId}`);
          this.likeCount = response.data.likeCount;
        } catch (error) {
          console.error("Error fetching like count:", error);
        }
      },
      // Cambia el estado del "like" (activar/desactivar)
      async toggleLike() {
        const token = localStorage.getItem("authToken");
        if (!token) {
          console.error("Authentication token not found");
          return;
        }
  
        try {
          if (this.isLiked) {
            // Quitar "like"
            await apiClient.delete(`/like/${this.postId}`, {
              headers: { Authorization: `Bearer ${token}` },
              data: { postId: this.postId },
            });
            this.likeCount--;
            this.isLiked = false;
          } else {
            // Agregar "like"
            await apiClient.post(
              `/like`,
              { postId: this.postId },
              { headers: { Authorization: `Bearer ${token}` } }
            );
            this.likeCount++;
            this.isLiked = true;
          }
        } catch (error) {
          console.error("Error toggling like:", error);
        }
      },
      // Verifica si el usuario ya ha dado like
      async checkIfLiked() {
        const token = localStorage.getItem("authToken");
        if (!token) {
          console.error("Authentication token not found");
          return;
        }
  
        try {
          const response = await apiClient.get(`/like/check/${this.postId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          this.isLiked = response.data.isLiked; // Establecemos el valor de isLiked con la respuesta de la API
        } catch (error) {
          console.error("Error checking if liked:", error);
        }
      },
    },
  };
  </script>
