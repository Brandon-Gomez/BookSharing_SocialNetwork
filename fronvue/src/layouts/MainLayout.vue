<template>
  <div>
    <main class="page-wrapper">
      <div
        class="offcanvas offcanvas-end me-auto order-lg-2"
        id="navbarOffcanvas"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title">Menu</h5>
          <button
            class="btn-close text-reset"
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav w-100 justify-content-around">
            <li class="nav-item">
              <a class="nav-link" href="/">
                
                <i class="ci-home mr-1 "></i>
                Inicio</a>
            </li>
           
             <li class="nav-item">
              <a v-if="!isAdmin" class="nav-link" :href="`/profile/${username}`">
                  <i class="ci-user mr-1 "></i>Mi Perfil</a>
              <a v-else class="nav-link" href="/admin/dashboard">
                  <i class="ci-user mr-1 "></i>Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :href="`/profile/${username}/likes`">
                 <i class="ci-heart mr-1 "></i>
                Favoritos</a>
            </li>
             <li class="nav-item">
              <a class="nav-link" href="/category/15">
                
                <i class="align-middle ci-menu mr-1 "></i>
                Categorias</a>
            </li>
            <li class="nav-item border-top">
              <a type="button" class="nav-link" @click="logout()">
                <i class="ci-sign-out mr-1 "></i>
                Cerrar sesión</a 
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Navbar 3 Level (Light)-->
      <header class="shadow-sm">
        <!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page.-->
        <div class="navbar-sticky bg-light">
          <div class="navbar navbar-expand-lg navbar-light py-0">
            <div class="container">
              <a
                class="navbar-brand d-none d-sm-block flex-shrink-0 py-0"
                href="/"
                ><img
                  src="../../dist/img/LogoRM.b5d6692e.png"
                  width="142"
                  alt="Readmate" /></a
              ><a class="navbar-brand d-sm-none flex-shrink-0 me-2" href="/"
                ><img
                  src="../../dist/img/LogoRM.b5d6692e.png"
                  width="74"
                  alt="Readmate"
              /></a>
              <div class="position-relative d-none d-lg-flex mx-4 w-100" >
                <input
                  ref="searchContainer"
                  v-model="searchQuery"
                  @input="searchUser"
                  class="form-control rounded-end pe-5"
                  type="text"
                  placeholder="Buscar un usuario.."
                />
                <i class="ci-search position-absolute top-50 end-0 translate-middle-y text-muted fs-base me-3"></i>
                <ul
                  v-if="users.length"
                  class="list-group position-absolute"
                  style="top: 100%; left: 0; width: 100%; z-index: 1000;"
                >
                  <li
                    v-for="user in users"
                    :key="user.id"
                    class="list-group-item list-group-item-action"
                    @click="goToProfile(user.username)"
                    style="cursor:pointer"
                  >@{{ user.username }} ({{ user.name }})
                  </li>
                </ul>
              </div>
              <div
                class="navbar-toolbar d-flex flex-shrink-0 align-items-center"
              >
                <a class="navbar-tool d-none d-lg-flex" :href="`/profile/${username}/likes`"
                  ><span class="navbar-tool-tooltip">Favoritos</span>
                  <div class="navbar-tool-icon-box">
                    <i class="navbar-tool-icon ci-heart"></i>
                  </div>
                </a>
                <a v-if="!isAdmin"
                  :href="`/profile/${username}`"
                  class="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2"
                >
                  <div class="navbar-tool-icon-box">
                    <i class="navbar-tool-icon ci-user"></i>
                  </div>
                  <div class="navbar-tool-text ms-n3">
                    <small>Mi Perfil</small>
                    <span v-if="username">{{ username }}</span>
                  </div>
                </a>

                <a v-else href="/admin/dashboard" class="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2">
                  <div class="navbar-tool-icon-box">
                    <i class="navbar-tool-icon ci-user"></i>
                  </div>
                  <div class="navbar-tool-text ms-n3">
                    <small>Admin</small>
                    <span>Dashboard</span>
                  </div>
                </a>

                <a
                  class="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2 text-dark d-none d-lg-block"
                  href="#navbarOffcanvas"
                  data-bs-toggle="offcanvas"
                >
                  <div class="navbar-tool-icon-box">
                    <i class="navbar-tool-icon ci-menu"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <!-- Menu movil -->
          <div
            class="navbar navbar-expand-lg navbar-light navbar-stuck-menu mt-n2 pt-0 pb-2 d-lg-none"
          >
            <div class="container">
              <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="input-group d-lg-none mt-3" ref="searchContainerMobile">
                  <i
                    class="ci-search position-absolute top-50 start-0 translate-middle-y text-muted fs-base ms-3"
                  ></i>
                  <input
                    class="form-control rounded-start"
                    type="text"
                    placeholder="Buscar un usuario.."
                    v-model="searchQuery"
                    @input="searchUser"
                  />
                </div>
                <ul
                  v-if="users.length"
                  class="list-group  w-100"
                  style="z-index: 1000"
                >
                  <li
                    v-for="user in users"
                    :key="user.id"
                    class="list-group-item list-group-item-action"
                    @click="goToProfile(user.username)"
                  >@{{ user.username }} ({{ user.name }})
                  </li>
                </ul>
                <ul class="navbar-nav w-100 justify-content-around mt-3">
                  <li class="nav-item">
                    <a class="nav-link d-flex align-items-center" href="/" style="gap: 8px;">
                      <i class="ci ci-home"></i>
                      <span>Inicio</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link d-flex align-items-center" :href="`/profile/${username}`" style="gap: 8px;">
                      <i class="ci ci-user"></i>
                      <span>Mi Perfil</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link d-flex align-items-center" :href="`/profile/${username}/likes`" style="gap: 8px;">
                      <i class="ci ci-heart"></i>
                      <span>Favoritos</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link d-flex align-items-center" href="/category/15" style="gap: 8px;">
                      <i class="ci ci-menu"></i>
                      <span>Categorías</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <slot />
    </main>
    <!-- Footer-->
    <footer class="footer py-5 bg-dark">
      <div class="container pt-2 pb-1">
        <div class="row">
          <div class="col-md-6 text-center text-md-start mb-2">
            <div class="text-nowrap mb-3">
              <a class="d-inline-block align-middle mt-n2 me-2" href="#"
                ><img
                  class="d-block"
                  src="../../dist/img/logo2.png"
                  width="117"
                  alt="Readmate"
              /></a>
            </div>
            <p class="fs-sm text-white opacity-70 pb-1">
              Lee, comparte, construye comunidad.
            </p>
            <h6 class="d-inline-block pe-3 me-3 border-end border-light">
              <span class="text-primary">589 </span
              ><span class="fw-normal text-white">Lectores</span>
            </h6>
            <h6 class="d-inline-block pe-3 me-3 border-light">
              <span class="text-primary">336 </span
              ><span class="fw-normal text-white">Libros</span>
            </h6>
            <div class="widget mt-4 text-md-nowrap text-center text-md-start">
              <a class="btn-social bs-light bs-twitter me-2 mb-2" href="#"
                ><i class="ci-instagram"></i></a
              ><a class="btn-social bs-light bs-facebook me-2 mb-2" href="#"
                ><i class="ci-facebook"></i></a
              ><a class="btn-social bs-light bs-dribbble me-2 mb-2" href="#"
                ><i class="ci-tiktok"></i
              ></a>
            </div>
          </div>

          <!-- Desktop menu (visible on screens above md)-->
          <div class="col-md-3 d-none d-md-block text-center text-md-start">
            <div class="widget widget-links widget-light pb-2">
              <h3 class="widget-title text-light">Categorias</h3>
              <ul class="widget-list">
                <li class="widget-list-item">
                  <router-link class="widget-list-link" :to="'/category/16'"
                    >Ficción</router-link
                  >
                </li>
                <li class="widget-list-item">
                  <router-link class="widget-list-link" :to="'/category/17'"
                    >No ficción</router-link
                  >
                </li>
                <li class="widget-list-item">
                  <router-link class="widget-list-link" :to="'/category/18'"
                    >Ciencia ficción</router-link
                  >
                </li>
                <li class="widget-list-item">
                  <router-link class="widget-list-link" :to="'/category/19'"
                    >Fantasía</router-link
                  >
                </li>
                <li class="widget-list-item">
                  <router-link class="widget-list-link" :to="'/category/20'"
                    >Misterio/Thriller</router-link
                  >
                </li>
                <li class="widget-list-item">
                  <router-link class="widget-list-link" :to="'/category/21'"
                    >Aventura</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 d-none d-md-block text-center text-md-start">
            <div class="widget widget-links widget-light pb-2">
              <h3 class="widget-title text-light">Para miembros</h3>
              <ul class="widget-list">
                <li class="widget-list-item">
                  <a class="widget-list-link" href="#">Licencias</a>
                </li>
                <li class="widget-list-item">
                  <a class="widget-list-link" href="#">Politica de datos</a>
                </li>
                <li class="widget-list-item">
                  <a class="widget-list-link" href="#">Sobre nosotros</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- Toolbar for handheld devices (Default)-->
    <div class="handheld-toolbar">
      <div class="d-table table-layout-fixed w-100">
        <a class="d-table-cell handheld-toolbar-item" :href="`/profile/${username}/likes`"
          ><span class="handheld-toolbar-icon"><i class="ci-heart"></i></span
          ><span class="handheld-toolbar-label">Favoritos</span></a
        ><a
          class="d-table-cell handheld-toolbar-item"
          href="javascript:void(0)"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          onclick="window.scrollTo(0, 0)"
          ><span class="handheld-toolbar-icon"><i class="ci-menu"></i></span
          ><span class="handheld-toolbar-label">Menu</span></a
        >
      </div>
    </div>
    <!-- Back To Top Button--><a class="btn-scroll-top" href="#top" data-scroll
      ><span class="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span
      ><i class="btn-scroll-top-icon ci-arrow-up"> </i
    ></a>
  </div>
</template>

<script>
import { loginUser, logoutUser, isLoggedIn } from "@/services/useAuth.js";
import apiClient from "@/services/ApiService";
import * as jwt from "jwt-decode";
export default {
  components: {
  },
  data() {
    return {
      showSearch: false,
      isAuthenticated: false,
      isAdmin: "",
      isSidebarOpen: false,
      loginEmail: "",
      loginPassword: "",
      username: "",
      searchQuery: "",
      users: [],
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    handleSearch() {
      this.showSearch = !this.showSearch;
    },
    async handleLogin() {
      try {
        await loginUser({
          email: this.loginEmail,
          password: this.loginPassword,
          router: this.$router,
        });
      } catch (error) {
        alert("Credenciales incorrectas");
      }
    },
    checkAuth() {

      if (isLoggedIn()) {
        try {
          const token = localStorage.getItem("authToken");
          const decoded = jwt.jwtDecode(token);
          if (decoded.exp < Date.now() / 1000) {
            throw new Error("Token expirado");
          }
          this.username = localStorage.getItem("username");
          this.isAuthenticated = true;
          this.isAdmin = decoded.is_admin;
        } catch (error) {
          logoutUser(this.$router);
        }
      } else {
        this.$router.push("/login");
      }
    },
    async searchUser() {
      if (this.searchQuery.length > 2) {
        try {
          const response = await apiClient.get("/search", {
            params: { query: this.searchQuery },
          });
          this.users = response.data;
        } catch (error) {
          console.error("Error al buscar usuarios:", error);
        }
      } else {
        this.users = [];
      }
    },
    goToProfile(username) {
      window.location.href = `/profile/${username}`;
    },

    // Maneja el clic fuera del contenedor de búsqueda para cerrar la lista de usuarios
    handleClickOutside(event) {
      const container = this.$refs.searchContainer;
      const containerMobile = this.$refs.searchContainerMobile;
      if (
        container &&
        !container.contains(event.target) &&
        containerMobile &&
        !containerMobile.contains(event.target)
      ) {
        this.users = [];
      }
    },
    logout() {
      logoutUser(this.$router);
    },
  },
  mounted() {
    this.checkAuth();
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>
