<template>
  <div>
    <main class="main" id="top">
      <div class="container-fluid px-0">
        <div class="row vh-100 g-0">
          <div class="col-lg-6 position-relative d-none d-lg-block" :style="`background-image: url(${require('@/assets/bg-bib.jpeg')}); background-size: cover; background-position: center;`">
            <div class="bg-holder ">
            </div> 
            <!--/.bg-holder-->
          </div>
          <div class="col-lg-6">
            <div class="row flex h-100 g-0 px-4 px-sm-0 align-items-center">
              <div class="col col-sm-6 col-lg-7 col-xl-6" style="margin-inline:auto"><a class="d-flex flex-center text-decoration-none " >
                  <div class="d-flex align-items-center fw-bolder fs-5 d-inline-block"><img src="@/assets/LogoRM.png" alt="phoenix" width="150">
                  </div>
                </a>
                <div class="text-center mb-7">
                  <h3 class="text-1000">Iniciar Sesión</h3>
                  <p class="text-700">Sigue donde lo dejaste</p>
                </div>
                <form  @submit.prevent="handleLogin">
                  <!-- <div class="mb-3 text-start">
                    <label class="form-label" for="name">Name</label>
                    <input class="form-control" id="name" type="text" placeholder="Name">
                  </div> -->
                  <div class="mb-3 text-start">
                    <label class="form-label" for="email">Email</label>
                    <input class="form-control" name="" id="email" type="email" placeholder="name@example.com" v-model="loginEmail">
                  </div>
                
                  <div class="mb-3 text-start">
                    <label class="form-label" for="email">Contraseña</label>
                    <input class="form-control" id="email" type="password" placeholder="Contraseña" v-model="loginPassword">
                  </div>
                
                  <!-- <div class="form-check mb-3"> -->
                    <!-- <input class="form-check-input" id="termsService" type="checkbox"> -->
                    <!-- <label class="form-label fs--1 text-none" for="termsService">I accept the <a href="#!">terms </a>and <a href="#!">privacy policy</a></label> -->
                  <!-- </div> -->
                  <button class="btn btn-primary w-100 mb-3">Iniciar sesión</button>
                  <div class="text-center"><a class="fs--1 " href="/">¿No tienes cuenta? Registrate</a></div>
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
import { loginUser } from '../services/useAuth';
export default {

  components: {
  },

  data() {
    return {
      loginEmail: '',
      loginPassword: '',
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
  },
 
};
</script>

<style scoped>
.flex-center {
    -webkit-box-align: center !important;
    -ms-flex-align: center!important;
    align-items: center!important;
    -webkit-box-pack: center!important;
    -ms-flex-pack: center!important;
    justify-content: center!important;
}
</style>