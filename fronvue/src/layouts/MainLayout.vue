<template>
  <div>
    <!-- Sign in / sign up modal-->
    <div class="modal fade" id="signin-modal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header bg-secondary">
            <ul class="nav nav-tabs card-header-tabs" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link fw-medium active"
                  href="#signin-tab"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-selected="true"
                  ><i class="ci-unlocked me-2 mt-n1"></i>Iniciar sesión</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link fw-medium"
                  href="#signup-tab"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-selected="false"
                  ><i class="ci-user me-2 mt-n1"></i>Registrarse</a
                >
              </li>
            </ul>
            <button
              class="btn-close"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body tab-content py-4">
            <form
              class="needs-validation tab-pane fade show active"
              autocomplete="off"
              novalidate
              id="signin-tab"
            >
              <div class="mb-3">
                <label class="form-label" for="si-email">Email</label>
                <input
                  class="form-control"
                  type="email"
                  id="si-email"
                  placeholder="johndoe@example.com"
                  required
                />
                <div class="invalid-feedback">
                  Indique una dirección de correo electrónico válida.
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label" for="si-password">Contraseña</label>
                <div class="password-toggle">
                  <input
                    class="form-control"
                    type="password"
                    id="si-password"
                    required
                  />
                  <label
                    class="password-toggle-btn"
                    aria-label="Show/hide password"
                  >
                    <input class="password-toggle-check" type="checkbox" /><span
                      class="password-toggle-indicator"
                    ></span>
                  </label>
                </div>
              </div>
              <div class="mb-3 d-flex flex-wrap justify-content-between">
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="si-remember"
                  />
                  <label class="form-check-label" for="si-remember"
                    >Recordar contraseña</label
                  >
                </div>
                <a class="fs-sm" href="#">Olvido la contraseña?</a>
              </div>
              <button
                class="btn btn-primary btn-shadow d-block w-100"
                type="submit"
              >
                Iniciar sesión
              </button>
            </form>
            <form
              class="needs-validation tab-pane fade"
              autocomplete="off"
              novalidate
              id="signup-tab"
            >
              <div class="mb-3">
                <label class="form-label" for="su-name">Full name</label>
                <input
                  class="form-control"
                  type="text"
                  id="su-name"
                  placeholder="John Doe"
                  required
                />
                <div class="invalid-feedback">Please fill in your name.</div>
              </div>
              <div class="mb-3">
                <label for="su-email">Email address</label>
                <input
                  class="form-control"
                  type="email"
                  id="su-email"
                  placeholder="johndoe@example.com"
                  required
                />
                <div class="invalid-feedback">
                  Please provide a valid email address.
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label" for="su-password">Password</label>
                <div class="password-toggle">
                  <input
                    class="form-control"
                    type="password"
                    id="su-password"
                    required
                  />
                  <label
                    class="password-toggle-btn"
                    aria-label="Show/hide password"
                  >
                    <input class="password-toggle-check" type="checkbox" /><span
                      class="password-toggle-indicator"
                    ></span>
                  </label>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label" for="su-password-confirm"
                  >Confirm password</label
                >
                <div class="password-toggle">
                  <input
                    class="form-control"
                    type="password"
                    id="su-password-confirm"
                    required
                  />
                  <label
                    class="password-toggle-btn"
                    aria-label="Show/hide password"
                  >
                    <input class="password-toggle-check" type="checkbox" /><span
                      class="password-toggle-indicator"
                    ></span>
                  </label>
                </div>
              </div>
              <button
                class="btn btn-primary btn-shadow d-block w-100"
                type="submit"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
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
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                >Dropdown</a
              >
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action link</a></li>
                <li class="dropdown">
                  <a
                    class="dropdown-item dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                    >Dropdown</a
                  >
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action link</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Yet another link</a>
                    </li>
                  </ul>
                </li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li class="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Disabled</a
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
              <div class="input-group d-none d-lg-flex mx-4">
                <input
                  class="form-control rounded-end pe-5"
                  type="text"
                  placeholder="Buscar un libro.."
                /><i
                  class="ci-search position-absolute top-50 end-0 translate-middle-y text-muted fs-base me-3"
                ></i>
              </div>
              <div
                class="navbar-toolbar d-flex flex-shrink-0 align-items-center"
              >
                <a
                  class="navbar-tool d-none d-lg-flex"
                  href="account-wishlist.html"
                  ><span class="navbar-tool-tooltip">Favoritos</span>
                  <div class="navbar-tool-icon-box">
                    <i class="navbar-tool-icon ci-heart"></i>
                  </div> </a
                ><a
                  class="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2"
                  href="#signin-modal"
                  data-bs-toggle="modal"
                >
                  <div class="navbar-tool-icon-box">
                    <i class="navbar-tool-icon ci-user"></i>
                  </div>
                  <div class="navbar-tool-text ms-n3">
                    <small>Iniciar Sesión</small>Mi cuenta
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
          <!-- esconde solo pantallas de menor a 1024px -->
          <div
            class="navbar navbar-expand-lg navbar-light navbar-stuck-menu mt-n2 pt-0 pb-2 d-lg-none"
          >
            <div class="container">
              <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav w-100 justify-content-around">
                  <li class="nav-item">
                    <a class="nav-link" href="/">Inicio</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/catalogo">Catálogo</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/favoritos">Favoritos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/perfil">Mi Perfil</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/contacto">Contacto</a>
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
    <footer class="footer pt-5 bg-dark">
      <div class="container pt-2 pb-3">
        <div class="row">
          <div class="col-md-6 text-center text-md-start mb-4">
            <div class="text-nowrap mb-3">
              <a class="d-inline-block align-middle mt-n2 me-2" href="#"
                ><img
                  class="d-block"
                  src="../../dist/img/LogoRM.b5d6692e.png"
                  width="117"
                  alt="Readmate"
              /></a>
            </div>
            <p class="fs-sm text-white opacity-70 pb-1">
              Lee, comparte, construye comunidad.
            </p>
            <h6 class="d-inline-block pe-3 me-3 border-end border-light">
              <span class="text-primary">2,521 </span
              ><span class="fw-normal text-white">Lectores</span>
            </h6>
            <h6 class="d-inline-block pe-3 me-3 border-light">
              <span class="text-primary">65,478 </span
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
          <!-- Mobile dropdown menu (visible on screens below md)-->
          <div class="col-12 d-md-none text-center mb-4 pb-2">
            <div class="btn-group dropdown d-block mx-auto mb-3">
              <button
                class="btn btn-outline-light border-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                Categories
              </button>
              <ul class="dropdown-menu my-1">
                <li><a class="dropdown-item" href="#">Photos</a></li>
                <li><a class="dropdown-item" href="#">Graphics</a></li>
                <li><a class="dropdown-item" href="#">UI Design</a></li>
                <li><a class="dropdown-item" href="#">Web Themes</a></li>
                <li><a class="dropdown-item" href="#">Fonts</a></li>
                <li><a class="dropdown-item" href="#">Add-Ons</a></li>
              </ul>
            </div>
            <div class="btn-group dropdown d-block mx-auto">
              <button
                class="btn btn-outline-light border-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                For members
              </button>
              <ul class="dropdown-menu my-1">
                <li><a class="dropdown-item" href="#">Licenses</a></li>
                <li><a class="dropdown-item" href="#">Return policy</a></li>
                <li><a class="dropdown-item" href="#">Payment methods</a></li>
                <li><a class="dropdown-item" href="#">Become a vendor</a></li>
                <li>
                  <a class="dropdown-item" href="#">Become an affiliate</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Marketplace benefits</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- Desktop menu (visible on screens above md)-->
          <div
            class="col-md-3 d-none d-md-block text-center text-md-start mb-4"
          >
            <div class="widget widget-links widget-light pb-2">
              <h3 class="widget-title text-light">Categorias</h3>
              <ul class="widget-list">
                <li class="widget-list-item">
                  <a class="widget-list-link" href="#">Photos</a>
                </li>
                <li class="widget-list-item">
                  <a class="widget-list-link" href="#">Graphics</a>
                </li>
                <li class="widget-list-item">
                  <a class="widget-list-link" href="#">UI Design</a>
                </li>
                <li class="widget-list-item">
                  <a class="widget-list-link" href="#">Web Themes</a>
                </li>
                <li class="widget-list-item">
                  <a class="widget-list-link" href="#">Fonts</a>
                </li>
                <li class="widget-list-item">
                  <a class="widget-list-link" href="#">Add-Ons</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="col-md-3 d-none d-md-block text-center text-md-start mb-4"
          >
            <div class="widget widget-links widget-light pb-2">
              <h3 class="widget-title text-light">For members</h3>
              <ul class="widget-list">
                <li class="widget-list-item">
                  <a class="widget-list-link" href="#">Licenses</a>
                </li>
                <li class="widget-list-item">
                  <a class="widget-list-link" href="#">Return policy</a>
                </li>
                <li class="widget-list-item">
                  <a class="widget-list-link" href="#">Payment methods</a>
                </li>
                <li class="widget-list-item">
                  <a class="widget-list-link" href="#">Become a vendor</a>
                </li>
                <li class="widget-list-item">
                  <a class="widget-list-link" href="#">Become an affiliate</a>
                </li>
                <li class="widget-list-item">
                  <a class="widget-list-link" href="#">Marketplace benefits</a>
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
        <a class="d-table-cell handheld-toolbar-item" href="#"
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
// import SearchComponent from '@/components/search_component.vue';
// import NavComponent from '@/components/navbar_component.vue';
// Si necesitas decodificar el JWT, puedes usar jwt-decode (opcional)
// import jwt_decode from "jwt-decode";

export default {
  components: {
    // SearchComponent,
    // NavComponent,
  },
  data() {
    return {
      showSearch: false,
      isAuthenticated: false,
      isSidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    handleSearch() {
      this.showSearch = !this.showSearch;
    },
    checkAuth() {
      // Obtener el token del localStorage
      const token = localStorage.getItem("authToken");
      if (token) {
        try {
          // Validar si el token aún es válido (opcional, puedes decodificarlo)
          // const decoded = jwt_decode(token);
          // // Verifica si el token ha expirado (opcionalmente, usando el campo 'exp' del JWT)
          // const currentTime = Math.floor(Date.now() / 1000);
          // if (decoded.exp < currentTime) {
          //   this.isAuthenticated = false;
          //   localStorage.removeItem('authToken'); // Limpiar token si está expirado
          //   return;
          // }

          // Si el token es válido y no ha expirado, el usuario está autenticado
          this.isAuthenticated = true;
        } catch (error) {
          // Si ocurre algún error al verificar o decodificar el token, el usuario no está autenticado
          this.isAuthenticated = false;
          localStorage.removeItem("authToken"); // Limpiar token inválido
        }
      } else {
        this.isAuthenticated = false;
      }
    },
  },
  mounted() {
    this.checkAuth();
  },
};
</script>
