<template>
  <button @click="viewPdf" class="btn btn-primary">
    📄 Ver PDF
  </button>
</template>

<script>
import apiClient from "@/services/ApiService"; // Asegúrate de tener este helper configurado

export default {
  props: {
    pdfUrl: {
      type: String,
      required: true
    },
    postId: { // <-- Nuevo prop
      type: [String, Number],
      required: true
    }
  },
  methods: {
    async viewPdf() {
      // Incrementa las vistas antes de mostrar el PDF
      try {
        await apiClient.put(`/posts/${this.postId}/views`);
      } catch (error) {
        console.error("Error al incrementar vistas:", error);
      }
      this.$router.push({ 
        name: "PdfPreview", 
        query: { pdfUrl: this.pdfUrl } 
      });
    }
  }
};
</script>

<style scoped>
button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}
</style>
