<template>
    <div class="container-fluid ">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h2>Lista de Publicaciones</h2>
            <button class="btn btn-success  " @click="createMyPost">Crear Publicación</button>
        </div>
        <table class="table table-striped align-middle">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Imagen</th>
                    <th>Título</th>
                    <th>Categoria</th>
                    <th>Descripción</th>
                    <th>Num. Lecturas</th>
                    <th>Fec. Publicación </th>
                    <th>Usuario</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="posts.length === 0">
                    <td colspan="8" class="text-center">No hay publicaciones disponibles</td>
                </tr>
                <tr v-for="(post) in posts" :key="post.post_id">
                    <td class="align-middle">{{ post.post_id }}</td>
                    <td class="align-middle">
                        <img :src="post.image" alt="Imagen de la publicación" class="img-thumbnail"
                            style="width: 50px; height: auto;" />
                    </td>
                    <td class="align-middle">{{ post.title }}</td>
                    <td class="align-middle">{{ post.category_name }}</td>
                    <td class="align-middle">{{ post.description }}</td>
                    <td class="align-middle">{{ post.views }}</td>
                    <td class="align-middle">{{ formatDate(post.created_at) }}</td>
                    <td class="align-middle">{{ post.username }}</td>

                    <td class="align-middle">
                        <button class="btn btn-warning btn-sm mr-3 my-2" @click="editPost(post.post_id)">Editar</button>
                        <button class="btn btn-danger btn-sm" @click="deletePost(post.post_id)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <pagination v-model="page" :totalPages="totalPages" @update:modelValue="onPageChange" />

</template>

<script>
import apiClient from '@/services/ApiService';
import eventBus from '@/eventBus';
import pagination from '@/components/pagination_component.vue';

export default {
    data() {
        return {
            posts: [],
            page: 1,
            limit: 20,
            totalPages: 0
        };
    },
    components: {
        pagination
    },
    methods: {
        async fetchPosts() {
            try {
                const token = localStorage.getItem("authToken");
                const res = await apiClient.get(`/posts?page=${this.page}&limit=${this.limit}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                this.posts = res.data.posts;
                this.totalPages = res.data.totalPages;
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        },
        onPageChange(n) {
            this.page = n;
            this.fetchPosts();
        },
        formatDate(dateStr) {
            if (!dateStr) return '';
            const date = new Date(dateStr);
            return date.toLocaleDateString();
        },

        editPost(postId) {
            this.$router.push(`/admin/post-edit/${postId}`); // Redirige a la vista de edición de post
        },
        createMyPost() {
            this.$router.push('/admin/post-create'); // Redirige a la vista de creación de post
        },

        async deletePost(postId) {
            const token = localStorage.getItem('authToken');
            if (token && confirm('¿Estás seguro de que deseas eliminar esta publicación?')) {
                try {
                    await apiClient.delete(`/posts/${postId}`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    this.fetchPosts(); // Recarga la lista
                    eventBus.emit('alert', { message: "Publicación eliminada correctamente", type: "success" });
                } catch (error) {
                    console.error('Error deleting post:', error);
                }
            }
        },
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