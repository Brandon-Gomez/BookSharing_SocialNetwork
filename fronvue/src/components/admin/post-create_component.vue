<template>
    <div class="container mt-4">
        <h2>Crear Publicación</h2>
        <form @submit.prevent="createPost" class="mt-4">
            <div class="form-group mb-3">
                <label for="title">Título</label>
                <input type="text" id="title" v-model="postData.title" class="form-control"
                    placeholder="Título de la publicación" required />
            </div>
            <div class="form-group mb-3">
                <label for="description">Descripción</label>
                <textarea id="description" v-model="postData.description" class="form-control" placeholder="Descripción"
                    required></textarea>
            </div>
            <div class="form-group mb-3">
                <label for="image">Imagen</label>
                <input type="file" id="image" @change="onImageChange" class="form-control" accept="image/*" />
            </div>
            <div class="form-group mb-3">
                <label for="pdf">Archivo PDF</label>
                <input type="file" id="pdf" @change="onPdfChange" class="form-control" accept="application/pdf" />
            </div>
            <div class="form-group mb-3">
                <label for="user">Usuario</label>
                <select id="user" v-model="postData.user_id" class="form-control" required>
                    <option value="" disabled>Selecciona un usuario</option>
                    <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Crear Publicación</button>
            <button type="button" class="btn btn-secondary ms-2" @click="cancel">
                Cancelar
            </button>
        </form>
    </div>
</template>

<script>
import apiClient from "@/services/ApiService";

export default {
    data() {
        return {
            postData: {
                title: "",
                description: "",
                user_id: ""
            },
            image: null,
            pdf: null,
            users: []
        };
    },
    methods: {
        onImageChange(event) {
            this.image = event.target.files[0];
        },
        onPdfChange(event) {
            this.pdf = event.target.files[0];
        },
        async fetchUsers() {
            try {
                const token = localStorage.getItem("authToken");
                const response = await apiClient.get("/users", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                this.users = response.data;
            } catch (error) {
                console.error("Error al obtener los usuarios:", error.response?.data || error);
            }
        },
        async createPost() {
            try {
                const token = localStorage.getItem("authToken");
                const formData = new FormData();
                formData.append("title", this.postData.title);
                formData.append("description", this.postData.description);
                formData.append("user_id", this.postData.user_id);
                if (this.image) formData.append("images", this.image);
                if (this.pdf) formData.append("pdf", this.pdf);

                await apiClient.post(
                    "/posts",
                    formData,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "multipart/form-data"
                        }
                    }
                );
                alert("Publicación creada exitosamente");
                this.$router.push("/admin/posts-list");
            } catch (error) {
                console.error("Error al crear la publicación:", error.response?.data || error);
                alert("Error al crear la publicación. Verifica los datos e inténtalo de nuevo.");
            }
        },
        cancel() {
            this.$router.push("/admin/posts-list");
        },
    },
    mounted() {
        this.fetchUsers();
    }
};
</script>

<style scoped>
.container {
    max-width: 600px;
}
</style>