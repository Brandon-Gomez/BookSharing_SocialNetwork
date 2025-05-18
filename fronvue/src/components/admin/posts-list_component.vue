<template>
    <div class="container-fluid">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h2>Lista de Publicaciones</h2>
            <button class="btn btn-primary" @click="createMyPost">Crear Publicación</button>
        </div>
        <table class="table table-striped align-middle">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Imagen</th>
                    <th>Título</th>
                    <th>Descripción</th>
                    <th>Usuario</th>
                    <th>Cant. Lecturas</th>
                    <th>Fecha</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(post, index) in posts" :key="post.id">
                    <td class="align-middle">{{ index + 1 }}</td>
                    <td class="align-middle">
                        <img :src="post.image" alt="Imagen de la publicación" class="img-thumbnail"
                            style="width: 50px; height: auto;" />
                    </td>
                    <td class="align-middle">{{ post.title }}</td>
                    <td class="align-middle">{{ post.description }}</td>
                    <td class="align-middle">{{ post.username }}</td>
                    <td class="align-middle">{{ post.views }}</td>
                    <td class="align-middle">{{ formatDate(post.created_at) }}</td>
                    <td class="align-middle">
                        <button class="btn btn-warning btn-sm mr-3" @click="editPost(post.id)">Editar</button>
                        <button class="btn btn-danger btn-sm" @click="deletePost(post.id)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import apiClient from '@/services/ApiService';
import eventBus from "@/eventBus.js";

export default {
    data() {
        return {
            posts: [],
        };
    },
    methods: {
        async fetchPosts() {
            try {
                const token = localStorage.getItem('authToken');
                if (token) {
                    const response = await apiClient.get('/posts', {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    this.posts = response.data;
                }
            } catch (error) {
                console.error('Error al obtener las publicaciones:', error);
            }
        },
        createMyPost() {
            this.$router.push('/admin/post-create');
        },
        editPost(postId) {
            this.$router.push(`/admin/post-edit/${postId}`);
        },
        async deletePost(postId) {
            const token = localStorage.getItem('authToken');
            if (token && confirm('¿Estás seguro de que deseas eliminar esta publicación?')) {
                try {
                    await apiClient.delete(`/posts/${postId}`, {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    this.fetchPosts();
                    eventBus.emit('alert', { message: "Publicación eliminada correctamente.", type: "success" });
                } catch (error) {
                    eventBus.emit('alert', { message: "Error al eliminar la publicación.", type: "danger" });
                }
            }
        },
        formatDate(dateString) {
            if (!dateString) return '';
            return new Date(dateString).toLocaleDateString();
        }
    },
    mounted() {
        this.fetchPosts();
    },
};
</script>

<style scoped>
.table {
    margin-top: 20px;
}
</style>