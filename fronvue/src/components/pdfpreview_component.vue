<template>
  <button @click="viewPdf" class="btn btn-secondary btn-sm">
    Ver PDF <i class="ci ci-link"></i>
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
