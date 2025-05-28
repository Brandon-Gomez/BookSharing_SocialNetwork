<template>
    <div class="container-fluid mt-4">
        <div class="w-50">
            <h2>Crear Usuario</h2>
            <form @submit.prevent="createUser" class="mt-4">

                <div class="form-group mb-3">
                    <label for="email">Correo Electrónico</label>
                    <input type="email" id="email" v-model="userData.email" class="form-control form-control-sm"
                        placeholder="Correo electrónico" required />
                </div>
                <div class="form-group mb-3">
                    <label for="password">Contraseña</label>
                    <input type="password" 
                    autocomplete="new-password"
                    id="password" v-model="userData.password" class="form-control form-control-sm"
                        placeholder="Contraseña" required />
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
                <!-- birthdate -->
                <div class="form-group mb-3">
                    <label for="birthdate">Fecha de Nacimiento</label>
                    <input type="date" id="birthdate" v-model="userData.birthdate" class="form-control form-control-sm"
                        placeholder="Fecha de nacimiento" required />
                </div>
                <div class="form-group mb-3">
                    <label for="description">Descripción</label>
                    <textarea id="description" v-model="userData.description" class="form-control form-control-sm"
                        placeholder="Descripción" maxlength="150"></textarea>
                </div>
                <div class="form-group mb-3">
                    <label for="is_admin">Rol</label>
                    <select id="is_admin" v-model="userData.is_admin" class="form-control form-control-sm"
                        v-on:select="userData.is_admin">
                        <option :value="false">Usuario</option>
                        <option :value="true">Administrador</option>
                    </select>
                </div>

                <button type="submit" class="btn btn-success">Crear Usuario</button>
                <button type="button" class="btn btn-secondary ml-3" @click="cancel">
                    Cancelar
                </button>
            </form>
        </div>

    </div>
</template>

<script>
import apiClient from "@/services/ApiService";
import eventBus from "@/eventBus.js";

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
                is_admin: false,
            },
        };
    },
    methods: {
        async createUser() {

            try {
                const token = localStorage.getItem("authToken");
                await apiClient.post(
                    "/users",
                    this.userData,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                this.$router.push({
                    path: "/admin/users-list",
                    query: { alert: "Usuario creado exitosamente", type: "success" }
                });
            } catch (error) {

                if (error.response.status === 403 || error.response.status === 401)
                    this.$router.push("/login");
                else
                    eventBus.emit('alert', { message: "Error al crear el usuario.", type: "danger" });

            }
        },
        cancel() {
            this.$router.push("/admin/users-list"); // Redirige a la lista de usuarios
        },
    },
};
</script>

<style scoped>
.container {
    max-width: 600px;
}
</style>