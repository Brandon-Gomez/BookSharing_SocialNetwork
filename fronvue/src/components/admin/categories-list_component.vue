<template>
    <div class="container-fluid">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h2>Lista de Categorías</h2>
            <button class="btn btn-primary " @click="showForm = true; editCategory = null;">Crear Categoría</button>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cat in categories" :key="cat.id">
                    <td>{{ cat.id }}</td>
                    <td>{{ cat.name }}</td>
                    <td>{{ cat.description }}</td>
                    <td>
                        <button class="btn btn-warning btn-sm mr-3" @click="edit(cat)">Editar</button>
                        <button class="btn btn-danger btn-sm" @click="remove(cat.id)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Formulario modal simple -->
        <div v-if="showForm" class="modal-backdrop">
            <div class="modal-content p-4">
                <h4>{{ editCategory ? 'Editar' : 'Nueva' }} Categoría</h4>

                <form @submit.prevent="save">
                    <div class="mb-2">
                        <input v-model="form.name" class="form-control" placeholder="Nombre" required />
                    </div>
                    <div class="mb-2">
                        <textarea v-model="form.description" class="form-control" placeholder="Descripción"></textarea>
                    </div>
                    <div class="d-flex justify-content-between py-2">
                        <button class="btn btn-success " type="submit">Guardar</button>
                        <button class="btn btn-secondary" type="button" @click="showForm = false">Cancelar</button>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
import apiClient from '@/services/ApiService';
import eventBus from '@/eventBus';

export default {
    data() {
        return {
            categories: [],
            showForm: false,
            editCategory: null,
            form: { name: '', description: '' }
        };
    },
    methods: {
        async fetchCategories() {
            const token = localStorage.getItem('authToken');
            const res = await apiClient.get('/admin/categories', { headers: { Authorization: `Bearer ${token}` } });
            this.categories = res.data;
        },
        edit(cat) {
            this.editCategory = cat;
            this.form = { name: cat.name, description: cat.description };
            this.showForm = true;
        },
        async save() {
            const token = localStorage.getItem('authToken');
            if (this.editCategory) {
                await apiClient.put(`/admin/categories/${this.editCategory.id}`, this.form, { headers: { Authorization: `Bearer ${token}` } });
                eventBus.emit('alert', { message: "Categoría actualizada correctamente", type: "success" });
            } else {
                await apiClient.post('/admin/categories', this.form, { headers: { Authorization: `Bearer ${token}` } });
                eventBus.emit('alert', { message: "Categoría creada correctamente", type: "success" });
            }
            this.showForm = false;
            this.form = { name: '', description: '' };
            this.editCategory = null;
            this.fetchCategories();
        },
        async remove(id) {
            if (confirm('¿Eliminar esta categoría?')) {
                const token = localStorage.getItem('authToken');
                await apiClient.delete(`/admin/categories/${id}`, { headers: { Authorization: `Bearer ${token}` } });
                this.fetchCategories();
                eventBus.emit('alert', { message: "Categoría eliminada correctamente", type: "success" });
            }
        }
    },
    mounted() {
        this.fetchCategories();
    }
};
</script>

<style scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}

.modal-content {
    background: #fff;
    border-radius: 8px;
    min-width: 300px;
    max-width: 400px;
}
</style>