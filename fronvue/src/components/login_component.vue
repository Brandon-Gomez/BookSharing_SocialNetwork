<template>
  <div>
    <main class="main" id="top">
      <div class="container-fluid px-0">
        <div class="row vh-100 g-0">
          <div class="col-lg-6 position-relative d-none d-lg-block"
            :style="`background-image: url(${require('@/assets/bg-bib.jpg')}); background-size: cover; background-position: center;`">
            <div class="bg-holder"></div>
          </div>
          <div class="col-lg-6">
            <div class="row flex h-100 g-0 px-4 px-sm-0 align-items-center">
              <div class="col col-sm-6 col-lg-7 col-xl-6" style="margin-inline:auto">
                <a class="d-flex flex-center text-decoration-none">
                  <div class="d-flex align-items-center fw-bolder fs-5 d-inline-block">
                    <img src="@/assets/LogoRM.png" alt="phoenix" width="150">
                  </div>
                </a>
                <div class="text-center mb-7">
                  <h3 class="text-1000">Iniciar Sesión</h3>
                  <p class="text-700">Sigue donde lo dejaste</p>
                </div>
                <div class="text-center">
                <GoogleLogin :callback="callback" />
                </div>
                <div class="text-center my-3">
                  <hr class="border-buttom" />
                    <span class="text-muted fs-ms ">O usa un Email</span>
                </div>

                <form @submit.prevent="handleLogin">
                  <div class="mb-3 text-start">
                    <label class="form-label" for="email">Email</label>
                    <input class="form-control" id="email" type="email" placeholder="name@example.com"
                      v-model="loginEmail">
                  </div>

                  <div class="mb-3 text-start">
                    <label class="form-label" for="password">Contraseña</label>
                    <input class="form-control" id="password" type="password" autocomplete="current-password"
                      placeholder="Contraseña" v-model="loginPassword">
                  </div>

                  <button class="btn btn-primary w-100 mb-3">Iniciar sesión</button>
                  <div class="text-center">
                    <a class="fs--1" href="/register">¿No tienes cuenta? Registrate</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { loginUser, googleAuth } from '../services/useAuth';
import * as jwt from 'jwt-decode';

export default {
  components: {
    // Se registra el componente con el alias "GoogleLogin"
  },
  data() {
    return {
      loginEmail: '',
      loginPassword: '',
      userProfile: null,
    };
  },
  mounted() {
    const token = localStorage.getItem('authToken');
    const username = localStorage.getItem('username');
    if (token && username) {
      this.$router.push(`/profile/${username}`);
    }
  },
  methods: {
    async handleLogin() {
      try {
        await loginUser({
          email: this.loginEmail,
          password: this.loginPassword,
          router: this.$router,
        });
      } catch (error) {
        alert('Credenciales incorrectas');
      }
    },
    async callback(response) {
      if (response?.credential) {
        
        try {
          const decoded = jwt.jwtDecode(response.credential);
          await googleAuth({
            email: decoded.email,
            name: decoded.name,
            imageUrl: decoded.picture,
            router: this.$router});
        } catch (error) {
          console.error('Failed to decode JWT:', error);
        }
      }
    }
  },
};
</script>

<style scoped>
.flex-center {
  -webkit-box-align: center !important;
  -ms-flex-align: center !important;
  align-items: center !important;
  -webkit-box-pack: center !important;
  -ms-flex-pack: center !important;
  justify-content: center !important;
}
</style>