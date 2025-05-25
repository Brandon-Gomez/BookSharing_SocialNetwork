<template>
  <div>
    <main class="main" id="top">
      <div class="container-fluid px-0">
        <div class="row vh-100 g-0">
          <div class="col-lg-6 position-relative d-none d-lg-block" :style="`background-image: url(${require('@/assets/bg-bib.jpg')}); background-size: cover; background-position: center;`">
            <div class="bg-holder ">
            </div> 
          </div>
          <div class="col-lg-6">
            <div class="row flex h-100 g-0 px-4 px-sm-0 align-items-center">
              <div class="col col-sm-6 col-lg-7 col-xl-6" style="margin-inline:auto"><a class="d-flex flex-center text-decoration-none " >
                  <div class="d-flex align-items-center fw-bolder fs-5 d-inline-block"><img src="@/assets/LogoRM.png" alt="phoenix" width="150">
                  </div>
                </a>
                <div class="text-center mb-7">
                  <h3 class="text-1000">Registrarse</h3>
                  <p class="text-700">Crea tu cuenta hoy</p>
                </div>
                <form @submit.prevent="registerUser">
                  <div class="mb-3 text-start">
                    <label class="form-label" for="name">Nombre de usuario</label>
                    <input class="form-control" id="name" type="text" placeholder="brandon_123" v-model="username" required>
                  </div> 
                  <div class="mb-3 text-start">
                    <label class="form-label" for="email">Email</label>
                    <input class="form-control" name="" id="email" type="email" required placeholder="name@example.com" v-model="email">
                  </div>
                
                  <div class="mb-3 text-start">
                    <label class="form-label" for="email">Contraseña</label>
                    <input class="form-control" id="email" type="password" required placeholder="Contraseña" v-model="password">
                  </div>
                
                <div class="form-check mb-3"> 
                    <input class="form-check-input" id="termsService" type="checkbox" v-model="terminos" required> 
                    <label class="form-label fs--1 text-none" for="termsService">Acepto los <a href="#!">terminos</a> y <a href="#!">politicas de privacidad</a></label> 
                  </div> 
                  <button class="btn btn-primary w-100 mb-3">Registrarme</button>
                  <div class="text-center"><a class="fs--1 " href="/login">¿Ya tienes una cuenta? Inicia sesión</a></div>
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
  import apiClient from '../services/ApiService.js';

  export default {
    data() {
      return {
        email: '',
        username: '',
        password: '',
        terminos: false,
      };
    },
    methods: {
      async registerUser() {
        try {
          const response = await apiClient.post('/register', {
            email: this.email,
            username: this.username,
            password: this.password,
            termsAccepted: this.terminos
          });
          console.log('Registered:', response.data);

          localStorage.setItem('authToken', response.data.token);
          alert("USUARIO REGISTRADO CORRECTAMENTE");
          this.$router.push('/login');
        } catch (error) {
          console.error('Error en el registro:', error.response);
        }
      }
    }
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