<template>
    <div>
        <div class="container-fluid px-0">
            <div class="px-3">
                <div class="row min-vh-100 flex-center p-5">
                    <div class="col-12 col-xl-12 col-xxl-12">
                        <div class="row justify-content-center align-items-center g-5 mt-5">
                            <div class="col-12 col-lg-6 text-center order-lg-1"><img
                                    class="img-fluid w-lg-100 d-dark-none" src="../assets/404-illustration.png" alt=""
                                    width="400">
                            </div>
                            <div class="col-12 col-lg-6 text-center text-lg-start">
                                <img class="img-fluid mb-6 w-50 w-lg-75 d-dark-none" src="../assets/404.png" alt="">
                                <h2 class="text-800 fw-bolder mb-3">Pagina perdida!</h2>
                                <p class="text-900 mb-5">Pero no se preocupe. Estamos buscando por todas
                                    partes <br class="d-none d-sm-block">mientras esperas seguro.</p>
                                <RouterLink class="btn btn-lg btn-primary" to="/">Ir a inicio</RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {
    }
};
</script>
