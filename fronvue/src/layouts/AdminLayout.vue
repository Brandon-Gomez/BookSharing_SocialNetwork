<template>
    <div>

        <AlertComponent v-if="alert.visible" :message="alert.message" :type="alert.type" :visible="alert.visible"
            @close="alert.visible = false" class="alert-fixed-bottom-right" />

        <!-- Page Wrapper -->
        <div id="wrapper">

            <!-- Sidebar -->
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <!-- Sidebar - Brand -->
                <router-link class="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div class="sidebar-brand-text mx-3">Readmate <sup>Admin</sup></div>
                </router-link>

                <!-- Divider -->
                <hr class="sidebar-divider my-0" />

                <!-- Nav Item - Dashboard -->
                <li class="nav-item active">
                    <router-link class="nav-link" to="/admin/dashboard">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span class="ml-2">Dashboard</span></router-link>
                </li>

                <!-- Divider -->
                <hr class="sidebar-divider" />

                <!-- Heading -->
                <div class="sidebar-heading">Interface</div>

                <!-- Nav Item - Pages Collapse Menu -->
                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i class="fas fa-fw fa-users"></i>
                        <span class="ml-2">Usuarios</span>
                    </a>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <!-- <h6 class="collapse-header">Custom Components:</h6> -->
                            <router-link class="collapse-item" to="/admin/users-list">Lista de usuarios</router-link>
                            <router-link class="collapse-item" to="/admin/user-create">Crear usuario</router-link>
                        </div>
                    </div>
                </li>

                <!-- Nav Item - Utilities Collapse Menu -->
                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities">
                        <i class="fas fa-fw fa-wrench"></i>
                        <span class="ml-2">Publicaciones</span>
                    </a>
                    <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <!-- <h6 class="collapse-header">Custom Utilities:</h6> -->
                            <router-link class="collapse-item" to="/admin/posts-list">Lista de
                                publicaciones</router-link>
                            <router-link class="collapse-item" to="/admin/post-create">Crear publicación</router-link>
                        </div>
                    </div>
                </li>
                <!-- Nav Item - Categories Collapse Menu -->
                <li class="nav-item">

                    <router-link class="nav-link" to="/admin/categories-list"><i
                            class="fas fa-fw fa-list mr-2"></i>Categorias</router-link>

                </li>

            </ul>
            <!-- End of Sidebar -->

            <!-- Content Wrapper -->
            <div id="content-wrapper" class="d-flex flex-column">
                <!-- Main Content -->
                <div id="content">

                    <!-- Topbar -->
                    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                        <!-- Sidebar Toggle (Topbar) -->
                        <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                            <i class="fa fa-bars"></i>
                        </button>

                        <!-- Topbar Navbar -->
                        <ul class="navbar-nav ml-auto">
                            <!-- Nav Item - Search Dropdown (Visible Only XS) -->
                            <li class="nav-item dropdown no-arrow d-sm-none">
                                <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-search fa-fw"></i>
                                </a>
                                <!-- Dropdown - Messages -->
                                <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                    aria-labelledby="searchDropdown">
                                    <form class="form-inline mr-auto w-100 navbar-search">
                                        <div class="input-group">
                                            <input type="text" class="form-control bg-light border-0 small"
                                                placeholder="Search for..." aria-label="Search"
                                                aria-describedby="basic-addon2" />
                                            <div class="input-group-append">
                                                <button class="btn btn-primary" type="button">
                                                    <i class="fas fa-search fa-sm"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </li>

                            <div class="topbar-divider d-none d-sm-block"></div>

                            <!-- Nav Item - User Information -->
                            <li class="nav-item dropdown no-arrow">
                                <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{ username }}</span>
                                    <img class="img-profile rounded-circle" src="/img/undraw_profile.svg" />
                                </a>
                                <!-- Dropdown - User Information -->
                                <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                    aria-labelledby="userDropdown">
                                    <a type="button" class="dropdown-item"  data-toggle="modal" data-target="#logoutModal">
                                        <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Cerrar sesión
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <!-- End of Topbar -->
                    <!-- Main Content -->
                    <slot />
                </div>

                <!-- End of Main Content -->

                <!-- Footer -->
                <footer class="sticky-footer bg-white mt-5">
                    <div class="container my-auto">
                        <div class="copyright text-center my-auto">
                            <span>Copyright &copy; Readmate 2025</span>
                        </div>
                    </div>
                </footer>
                <!-- End of Footer -->
            </div>
            <!-- End of Content Wrapper -->
        </div>
        <!-- End of Page Wrapper -->

        <!-- Scroll to Top Button-->
        <a class="scroll-to-top rounded" href="#page-top">
            <i class="fas fa-angle-up"></i>
        </a>

        <!-- Logout Modal-->
        <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Seguro de cerrar sesión?</h5>
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Seleccione «Salir» a continuación si desea finalizar la sesión actual.
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" type="button" data-dismiss="modal">
                            Cancelar
                        </button>
                        <a type="button" class="btn btn-primary" @click="logout">Salir</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AlertComponent from "@/components/alert_component.vue";
import eventBus from "@/eventBus.js";
import { logoutUser } from '@/services/useAuth';

import apiClient from '@/services/ApiService';
export default {
    name: 'AdminLayout',
      components: {
        AlertComponent,
    },

    data() {
        return {
            username: localStorage.getItem('username') || '',
            alert: {
                visible: false,
                message: '',
                type: 'success', // success, danger, warning, info
            },
        };
    },

    methods: {
        logout() {
           logoutUser(this.$router);
        },
    },
    
    async beforeMount() {

        const token = localStorage.getItem('authToken');
        if (!token) {
            this.$router.push('/login');
            return;
        }
        try {
            await apiClient.get('/admin/verifyAdmin', {
                headers: { Authorization: `Bearer ${token}` }
            });
        } catch (error) {
            this.$router.push('/login');
        }

        // se usa querys para alertas de otras vistas
        if (this.$route.query.alert) {
            this.alert = {
                visible: true,
                message: this.$route.query.alert,
                type: this.$route.query.type || "success"
            };
            // Limpia la query para que no se repita al navegar
            this.$router.replace({ query: null });
        }
        // se usa eventbus para alertas de la misma vista
        eventBus.on('alert', (payload) => {
            this.alert = {
                visible: true,
                message: payload.message,
                type: payload.type || "success"
            };
        });
    },
    watch: {
        'alert.visible'(val) {
            if (val) {
                setTimeout(() => {
                    this.alert.visible = false;
                }, 7000);
            }
        }
    },

};
</script>

<style>
.alert-fixed-bottom-right {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 9999;
    min-width: 300px;
    max-width: 90vw;
}
</style>
