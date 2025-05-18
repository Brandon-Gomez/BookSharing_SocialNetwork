<template>
  <div class="container-fluid">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2>Lista de Usuarios</h2>
      <button class="btn btn-primary" @click="createUser">Crear Usuario</button>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Usuario</th>
          <th>Rol</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user) in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.is_admin ? 'Administrador' : 'Usuario' }}</td>
          <td>
            <button class="btn btn-warning btn-sm mr-3" @click="editUser(user.id)">Editar</button>
            <button class="btn btn-danger btn-sm" @click="deleteUser(user.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Paginador -->
    <div class="d-flex justify-content-center my-4">
      <button class="btn btn-secondary mx-1" :disabled="page === 1" @click="prevPage">Anterior</button>
      <span class="mx-2 align-self-center">Página {{ page }} de {{ totalPages }}</span>
      <button class="btn btn-secondary mx-1" :disabled="page === totalPages" @click="nextPage">Siguiente</button>
    </div>
  </div>

</template>

<script>
import apiClient from '@/services/ApiService';
import eventBus from '@/eventBus';

export default {
  data() {
    return {
      users: [],
      page: 1,
      limit: 20,
      totalPages: 0
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const token = localStorage.getItem('authToken');
        console.log('Token:', token); // Verifica si el token se obtiene correctamente
        if (token) {
          const res = await apiClient.get(`/users/paginated?page=${this.page}&limit=${this.limit}`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          this.users = res.data.users;
          this.totalPages = res.data.totalPages;
        }

      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }
    },
    nextPage() {
      if (this.page < this.totalPages) {
        this.page++;
        this.fetchUsers();
      }
    },
    prevPage() {
      if (this.page > 1) {
        this.page--;
        this.fetchUsers();
      }
    },
    createUser() {
      this.$router.push('/admin/user-create'); // Redirige a la vista de creación de usuario
    },
    editUser(userId) {
      this.$router.push(`/admin/user-edit/${userId}`); // Redirige a la vista de edición de usuario
    },
    async deleteUser(userId) {
      const token = localStorage.getItem('authToken');
      if (token && confirm('¿Estás seguro de que deseas eliminar este usuario?')) {

        await apiClient.delete(`/posts/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        await apiClient.delete(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        this.fetchUsers(); // Recarga la lista
        eventBus.emit('alert', { message: "Usuario eliminado correctamente", type: "success" });
      }

    },
  },
  mounted() {
    this.fetchUsers(); // Carga los usuarios al montar el componente
  },
};
</script>

<style scoped>
.table {
  margin-top: 20px;
}
</style>