<template>
    <MainLayout>
        <div>
            <div class="container px-0">
                <div class="px-3">
                    <div class="row min-vh-100 flex-center p-5">
                        <div class="col-12 col-xl-12 col-xxl-12">
                            <div class="row justify-content-center align-items-center g-5 mt-5">
                                <div class="col-12 col-lg-6 text-center order-lg-1"><img
                                        class="img-fluid w-lg-100 d-dark-none" src="../assets/reading-a-book.svg" alt=""
                                        width="500">
                                </div>
                                <div class="col-12 col-lg-6 text-center text-lg-start">
                                    <img class="img-fluid mb-6 w-50 w-lg-75 d-dark-none" src="../assets/404.png" alt="">
                                    <h2 class="text-800 fw-bolder mb-3">Pagina perdida!</h2>
                                    <p class="text-900 mb-5">La página que busca no existe.<br
                                            class="d-none d-sm-block">Verifique la URL o vuelva a la pagina de inicio
                                    </p>
                                    <RouterLink class="btn btn-lg btn-primary" to="/">Ir a inicio<i
                                            class="ci ci-arrow-right "></i>
                                    </RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script>

import MainLayout from '@/layouts/MainLayout.vue';

export default {
    components: {
        MainLayout
    }
};
</script>
