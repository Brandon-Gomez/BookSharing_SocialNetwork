<template>
    <div class="container-fluid mt-4">
        <div class="w-50">
            <h2>Editar Usuario</h2>
            <form @submit.prevent="updateUser" class="mt-4">
                <div class="form-group mb-3">
                    <label for="email">Correo Electrónico</label>
                    <input type="email" id="email" v-model="userData.email" class="form-control form-control-sm"
                        placeholder="Correo electrónico" required />
                </div>
                <div class="form-group mb-3">
                    <label for="password">Contraseña (dejar vacío para no cambiar)</label>
                    <input type="password" id="password" 
                    v-model="userData.password" class="form-control form-control-sm"
                        placeholder="Contraseña" />
                </div>
                <div class="form-group mb-3">
                    <label for="username">Nombre de Usuario</label>
                    <input type="text" id="username" v-model="userData.username" class="form-control form-control-sm"
                        placeholder="Nombre de usuario" required />
                </div>
                <div class="form-group mb-3">
                    <label for="name">Nombre</label>
                    <input type="text" id="name" v-model="userData.name" class="form-control form-control-sm"
                        placeholder="Nombre completo" required />
                </div>
                <div class="form-group mb-3">
                    <label for="birthdate">Fecha de Nacimiento</label>
                    <input type="date" id="birthdate" v-model="userData.birthdate" class="form-control form-control-sm"
                        placeholder="Fecha de nacimiento" required />
                </div>
                <div class="form-group mb-3">
                    <label for="description">Descripción</label>
                    <textarea  maxlength="150" id="description" v-model="userData.description" class="form-control form-control-sm"
                        placeholder="Descripción"></textarea>
                </div>
                <div class="form-group mb-3">
                    <label for="is_admin">Rol</label>
                    <select id="is_admin" v-model="userData.is_admin" class="form-control form-control-sm"
                        v-on:select="userData.is_admin">
                        <option :value="false">Usuario</option>
                        <option :value="true">Administrador</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Actualizar Usuario</button>
                <button type="button" class="btn btn-secondary ml-3" @click="cancel">
                    Cancelar
                </button>
            </form>
        </div>

    </div>
</template>

<script>
import apiClient from "@/services/ApiService";

export default {
    data() {
        return {
            userData: {
                email: "",
                password: "",
                username: "",
                name: "",
                birthdate: "",
                description: "",
                is_admin: "",
            },
        };
    },
    async mounted() {
        await this.fetchUser();
    },
    methods: {
        async fetchUser() {
            try {
                const token = localStorage.getItem("authToken");
                const userId = this.$route.params.userId;
                const response = await apiClient.get(`/users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                let user = response.data.user;
                // Formatea la fecha para el input date
                if (user.birthdate) {
                    user.birthdate = user.birthdate.split('T')[0];
                }
                this.userData = {
                    ...user,
                    password: ""
                };
            } catch (error) {
                console.error("Error al obtener el usuario:", error.response?.data || error);
                alert("Error al obtener los datos del usuario.");
            }
        },
        async updateUser() {
            try {
                const token = localStorage.getItem("authToken");
                const userId = this.$route.params.userId;
                // Si el campo password está vacío, no lo envíes
                const dataToSend = { ...this.userData };
                if (!dataToSend.password) delete dataToSend.password;

                await apiClient.put(
                    `/users/${userId}`,
                    dataToSend,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                this.$router.push({
                    path: "/admin/users-list",
                    query: { alert: "Usuario actualizado exitosamente", type: "success" }
                });
            } catch (error) {
                // Manejo de errores
                this.$router.push({
                    path: "/admin/users-list",
                    query: { alert: "Error al actualizar el usuario", type: "danger" }
                });
            }
        },
        cancel() {
            this.$router.push("/admin/users-list");
        },
    },
};
</script>

<style scoped>
.container {
    max-width: 600px;
}
</style>