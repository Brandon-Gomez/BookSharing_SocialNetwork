<template>
    <div class="container-fluid">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h2>Lista de Publicaciones</h2>
            <button class="btn btn-primary" @click="createPost">Crear Publicación</button>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Título</th>
                    <th>Descripción</th>
                    <th>Usuario</th>
                    <th>Fecha</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(post, index) in posts" :key="post.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ post.title }}</td>
                    <td>{{ post.description }}</td>
                    <td>{{ post.username }}</td>
                    <td>{{ formatDate(post.created_at) }}</td>
                    <td>
                        <button class="btn btn-warning btn-sm me-2" @click="editPost(post.id)">Editar</button>
                        <button class="btn btn-danger btn-sm" @click="deletePost(post.id)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import apiClient from '@/services/ApiService';

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
                    const response = await apiClient.get('/admin/posts', {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    this.posts = response.data;
                }
            } catch (error) {
                console.error('Error al obtener las publicaciones:', error);
            }
        },
        createPost() {
            this.$router.push('/admin/post-create');
        },
        editPost(postId) {
            this.$router.push(`/admin/post-edit/${postId}`);
        },
        async deletePost(postId) {
            const token = localStorage.getItem('authToken');
            if (token && confirm('¿Estás seguro de que deseas eliminar esta publicación?')) {
                try {
                    await apiClient.delete(`/admin/posts/${postId}`, {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    this.posts = this.posts.filter(post => post.id !== postId);
                    alert('Publicación eliminada correctamente.');
                } catch (error) {
                    console.error('Error al eliminar la publicación:', error);
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