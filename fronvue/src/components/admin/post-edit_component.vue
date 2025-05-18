<template>
    <div class="container-fluid mt-4">
        <div class="w-50">
            <h2>Editar Publicación</h2>
            <form @submit.prevent="updatePost" class="my-4" v-if="postData">
                <div class="form-group mb-3">
                    <label for="title">Título</label>
                    <input type="text" id="title" v-model="postData.title" class="form-control" required />
                </div>
                <div class="form-group mb-3">
                    <label for="description">Descripción</label>
                    <textarea id="description" v-model="postData.description" class="form-control" required></textarea>
                </div>
                <div class="form-group mb-3">
                    <label for="image">Imagen actual</label>
                    <div v-if="postData.image">
                        <img :src="postData.image" alt="Imagen actual" class="img-thumbnail mb-2"
                            style="max-width: 200px;" />
                    </div>
                    <input type="file" id="image" @change="onImageChange" class="form-control" accept="image/*" />
                </div>
                <div class="form-group mb-3">
                    <label for="pdf">Archivo PDF actual</label>
                    <div v-if="postData.pdf_file">
                        <a :href="postData.pdf_file" target="_blank">Ver PDF</a>
                    </div>
                    <input type="file" id="pdf" @change="onPdfChange" class="form-control" accept="application/pdf" />
                </div>
                <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                <button type="button" class="btn btn-secondary ml-3" @click="cancel">Cancelar</button>
            </form>
            <div v-else>
                <p>Cargando publicación...</p>
            </div>
        </div>

    </div>
</template>

<script>
import apiClient from "@/services/ApiService";
import eventBus from "@/eventBus.js";

export default {
    data() {
        return {
            postData: null,
            image: null,
            pdf: null,
        };
    },
    methods: {
        async fetchPost() {
            try {
                const token = localStorage.getItem("authToken");
                const postId = this.$route.params.postId;
                const response = await apiClient.get(`/posts/${postId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                this.postData = response.data;
            } catch (error) {
                console.error("Error al obtener la publicación:", error.response?.data || error);
                alert("Error al obtener la publicación.");
            }
        },
        onImageChange(event) {
            this.image = event.target.files[0];
        },
        onPdfChange(event) {
            this.pdf = event.target.files[0];
        },
        async updatePost() {
            try {
                const token = localStorage.getItem("authToken");
                const postId = this.$route.params.postId;
                const formData = new FormData();
                formData.append("title", this.postData.title);
                formData.append("description", this.postData.description);
                if (this.image) formData.append("images", this.image);
                if (this.pdf) formData.append("pdf", this.pdf);

                await apiClient.put(`/posts/${postId}`, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data"
                    }
                });
                this.$router.push({
                    path: "/admin/posts-list",
                    query: { alert: "Publicación actualizada exitosamente", type: "success" }
                });
            } catch (error) {
                // Muestra la alerta en la misma vista si falla
                eventBus.emit('alert', { message: "Error al actualizar la publicación.", type: "danger" });
                console.error("Error al actualizar la publicación:", error.response?.data || error);
            }
        },
        cancel() {
            this.$router.push("/admin/posts-list");
        }
    },
    mounted() {
        this.fetchPost();
    }
};
</script>

<style scoped>
.container {
    max-width: 600px;
}
</style>