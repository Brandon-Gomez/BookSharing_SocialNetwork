<template>
  <MainLayout>
    <div class="bg-secondary py-4">
      <div class="container d-lg-flex justify-content-between py-2 py-lg-3">
        <div class="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-start"
              style="background-color: unset;">
              <li class="breadcrumb-item"><a class="text-nowrap" href="index.html"><i class="ci-home"></i>Home</a></li>
              <li class="breadcrumb-item text-nowrap"><a href="#">Blog</a>
              </li>
              <li class="breadcrumb-item text-nowrap active" aria-current="page">Single post</li>
            </ol>
          </nav>
        </div>
        <div class="order-lg-1 pe-lg-4 text-center text-lg-start align-self-center">
          <h1 class="h3 mb-0" style="display: flex;align-items: anchor-center;">Cien años de soledad
            <a class="btn-tag ml-2  " href="#">Realismo magico</a>
          </h1>
        </div>
      </div>
    </div>
    <div class="container pb-5">
      <div class="row pt-5 mt-md-2">
        <section class="col-lg-8">
          <!-- Post meta-->
          <div class="d-flex flex-wrap justify-content-between align-items-center pb-4 mt-n1">
            <div class="d-flex align-items-center fs-sm mb-2"><a class="blog-entry-meta-link" href="#">
                <div class="blog-entry-author-ava"><img src="../../dist/img/blog/meta/02.jpg" alt="Cynthia Gomez"></div>
                Cynthia
                Gomez
              </a><span class="blog-entry-meta-divider"></span><a class="blog-entry-meta-link" href="#">Jul 17</a></div>
            <div class="fs-sm mb-2">


              <a class="blog-entry-meta-link text-nowrap mr-3" href="#comments" data-scroll=""><i
                  class="ci-eye"></i>589</a>
              <a class="blog-entry-meta-link text-nowrap mr-3" href="#comments" data-scroll=""><i
                  class="ci-heart"></i>33</a>
              <a class="blog-entry-meta-link text-nowrap" href="#comments" data-scroll=""><i
                  class="ci-message"></i>3</a>

            </div>
          </div>
          <!-- Gallery-->
          <h2 class="h4"></h2>

          <div class="gallery pb-2 text-center" lg-uid="lg0">
            <img width="300px"
              src="https://tunovela.es/wp-content/uploads/Cien-anos-de-soledad-de-Gabriel-Garcia-Marquez-resumen-y-analisis.jpg"
              alt="Gallery image">
          </div>
          <!-- Post content-->
          <p class="mt-2">"Cien años de soledad" narra la historia de la familia Buendía, desde su fundación en el
            pueblo de Macondo
            hasta su declive y desaparición. A lo largo de siete generaciones, los Buendía experimentan amores
            imposibles, tragedias, guerras y una maldición que los condena a una profunda soledad.
          </p>

          <!-- ver pdf button -->
          <!-- <div class="mt-3 me-3"><a class="btn-tag mb-2" href="#">Ver PDF</a></div> -->

          <!-- Post tags + sharing-->
          <div class="d-flex flex-wrap justify-content-between pb-4 mb-1">
            <div class="mt-3 me-3"><a class="btn-tag mb-2 " href="#">Ver PDF</a></div>
            <div class="mt-3"><span class="d-inline-block align-middle text-muted fs-sm me-3 mt-1 mb-2">Compartir
                libro:</span><a class="btn-social bs-facebook me-2 mb-2" href="#"><i class="ci-facebook"></i></a><a
                class="btn-social bs-twitter me-2 mb-2" href="#"><i class="ci-twitter"></i></a><a
                class="btn-social bs-pinterest me-2 mb-2" href="#"><i class="ci-pinterest"></i></a></div>
          </div>
          <!-- Post navigation-->
          <nav class="entry-navigation" aria-label="Post navigation"><a class="entry-navigation-link" href="#"
              data-bs-toggle="popover" data-bs-placement="top" data-bs-trigger="hover" data-bs-html="true"
              data-bs-content="<div class=&quot;d-flex align-items-center&quot;><img src=&quot;img/blog/navigation/01.jpg&quot; width=&quot;60&quot; class=&quot;rounded&quot; alt=&quot;Post thumb&quot;><div class=&quot;ps-3&quot;><h6 class=&quot;fs-sm fw-semibold mb-0&quot;>How to choose perfect shoes for running</h6><span class=&quot;d-block fs-xs text-muted&quot;>by Susan Mayer</span></div></div>"
              data-bs-original-title="" title=""><i class="ci-arrow-left me-2"></i><span class="d-none d-sm-inline">Ant
                libro</span></a><a class="entry-navigation-link" href="blog-list.html"><i
                class="ci-view-list me-2"></i><span class="d-none d-sm-inline">Ver libros</span></a><a
              class="entry-navigation-link" href="#" data-bs-toggle="popover" data-bs-placement="top"
              data-bs-trigger="hover" data-bs-html="true"
              data-bs-content="<div class=&quot;d-flex align-items-center&quot;><img src=&quot;img/blog/navigation/02.jpg&quot; width=&quot;60&quot; class=&quot;rounded&quot; alt=&quot;Post thumb&quot;><div class=&quot;ps-3&quot;><h6  class=&quot;fs-sm fw-semibold mb-0&quot;>Factors behind smart watches popularity</h6><span class=&quot;d-block fs-xs text-muted&quot;>by Logan Coleman</span></div></div>"
              data-bs-original-title="" title=""><span class="d-none d-sm-inline">Sig libro</span><i
                class="ci-arrow-right ms-2"></i></a></nav>
          <!-- Comments-->
          <div class="pt-2 mt-5" id="comments">
            <!-- likes -->

            <h2 class="h4">Comentarios<span class="badge bg-secondary fs-sm text-body align-middle ms-2">3</span></h2>
            <!-- comment-->
            <div class="d-flex align-items-start py-4 border-bottom"><img class="rounded-circle"
                src="../../dist/img/testimonials/04.jpg" width="50" alt="Laura Willson">
              <div class="ps-3">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <h6 class="fs-md mb-0">Laura Willson</h6><a class="nav-link-style fs-sm fw-medium" href="#"><i
                      class="ci-reply me-2"></i>Reply</a>
                </div>
                <p class="fs-md mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat cupidatat non proident, sunt in culpa qui.</p>
                <span class="fs-ms text-muted"><i class="ci-time align-middle me-2"></i>Sep 7, 2019</span>
                <!-- comment reply-->
                <div class="d-flex align-items-start border-top pt-4 mt-4"><img class="rounded-circle"
                    src="../../dist/img/testimonials/03.jpg" width="50" alt="Michael Davis">
                  <div class="ps-3">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <h6 class="fs-md mb-0">Michael Davis</h6>
                    </div>
                    <p class="fs-md mb-1">Egestas sed sed risus pretium quam vulputate dignissim. A diam sollicitudin
                      tempor id eu nisl. Ut porttitor leo a diam. Bibendum at varius vel pharetra vel turpis nunc.</p>
                    <span class="fs-ms text-muted"><i class="ci-time align-middle me-2"></i>Sep 13, 2019</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- comment-->

            <div class="d-flex align-items-start py-4"><img class="rounded-circle"
                src="../../dist/img/testimonials/02.jpg" width="50" alt="Benjamin Miller">
              <div class="ps-3">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <h6 class="fs-md mb-0">Benjamin Miller</h6><a class="nav-link-style fs-sm fw-medium" href="#"><i
                      class="ci-reply me-2"></i>Reply</a>
                </div>
                <p class="fs-md mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat cupidatat non proident, sunt in culpa qui.</p>
                <span class="fs-ms text-muted"><i class="ci-time align-middle me-2"></i>Aug 15, 2019</span>
              </div>
            </div>
            <!-- Post comment form-->
            <div class="card border-0 shadow mt-2 mb-4">
              <div class="card-body">
                <div class="d-flex align-items-start"><img class="rounded-circle"
                    src="../../dist/img/testimonials/01.jpg" width="50" alt="Mary Alice">
                  <form class="w-100 needs-validation ms-3" novalidate="">
                    <div class="mb-3">
                      <textarea class="form-control" rows="4" placeholder="Escribir comentario..."
                        required=""></textarea>
                      <div class="invalid-feedback">Porfavor escriba un comentario.</div>
                    </div>
                    <button class="btn btn-primary btn-sm" type="submit">Publicar comentario</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <aside class="col-lg-4">
          <!-- Sidebar-->
          <div class="offcanvas offcanvas-collapse offcanvas-end border-start ms-lg-auto" id="blog-sidebar"
            style="max-width: 22rem;">
            <div class="offcanvas-header align-items-center shadow-sm">
              <h2 class="h5 mb-0">Sidebar</h2>
              <button class="btn-close ms-auto" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body py-grid-gutter py-lg-1 px-lg-4" data-simplebar="init"
              data-simplebar-auto-hide="true">
              <div class="simplebar-wrapper" style="margin: -4px -24px;">
                <div class="simplebar-height-auto-observer-wrapper">
                  <div class="simplebar-height-auto-observer"></div>
                </div>
                <div class="simplebar-mask">
                  <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                    <div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content"
                      style="height: auto; overflow: hidden;">
                      <div class="simplebar-content" style="padding: 4px 24px;">
                        <!-- Categories-->
                        <div class="widget widget-links mb-grid-gutter pb-grid-gutter border-bottom mx-lg-2">
                          <h3 class="widget-title">Categorias libros</h3>
                          <ul class="widget-list">
                            <li class="widget-list-item"><a
                                class="widget-list-link d-flex justify-content-between align-items-center"
                                href="#"><span>Online shopping</span><span class="fs-xs text-muted ms-3">18</span></a>
                            </li>
                            <li class="widget-list-item"><a
                                class="widget-list-link d-flex justify-content-between align-items-center"
                                href="#"><span>Fashion</span><span class="fs-xs text-muted ms-3">25</span></a></li>
                            <li class="widget-list-item"><a
                                class="widget-list-link d-flex justify-content-between align-items-center"
                                href="#"><span>Personal finance</span><span class="fs-xs text-muted ms-3">13</span></a>
                            </li>
                            <li class="widget-list-item"><a
                                class="widget-list-link d-flex justify-content-between align-items-center"
                                href="#"><span>Travel &amp; vacation</span><span
                                  class="fs-xs text-muted ms-3">7</span></a></li>
                            <li class="widget-list-item"><a
                                class="widget-list-link d-flex justify-content-between align-items-center"
                                href="#"><span>Lifestyle</span><span class="fs-xs text-muted ms-3">34</span></a></li>
                            <li class="widget-list-item"><a
                                class="widget-list-link d-flex justify-content-between align-items-center"
                                href="#"><span>Technology</span><span class="fs-xs text-muted ms-3">6</span></a></li>
                          </ul>
                        </div>
                        <!-- Trending posts-->
                        <div class="widget mb-grid-gutter pb-grid-gutter border-bottom mx-lg-2">
                          <h3 class="widget-title">Libros en tendencia</h3>
                          <div class="d-flex align-items-center mb-3"><a class="flex-shrink-0"
                              href="blog-single.html"><img class="rounded" src="../../dist/img/blog/widget/01.jpg"
                                width="64" alt="Post image"></a>
                            <div class="ps-3">
                              <h6 class="blog-entry-title fs-sm mb-0"><a href="blog-single.html">Retro Cameras are
                                  Trending. Why so Popular?</a></h6><span class="fs-ms text-muted">by <a href="#"
                                  class="blog-entry-meta-link">Andy Williams</a></span>
                            </div>
                          </div>
                          <div class="d-flex align-items-center mb-3"><a class="flex-shrink-0"
                              href="blog-single.html"><img class="rounded" src="../../dist/img/blog/widget/02.jpg"
                                width="64" alt="Post image"></a>
                            <div class="ps-3">
                              <h6 class="blog-entry-title fs-sm mb-0"><a href="blog-single.html">New Trends in Suburban
                                  Fashion</a></h6><span class="fs-ms text-muted">by <a href="#"
                                  class="blog-entry-meta-link">Susan Mayer</a></span>
                            </div>
                          </div>
                          <div class="d-flex align-items-center"><a class="flex-shrink-0" href="blog-single.html"><img
                                class="rounded" src="../../dist/img/blog/widget/03.jpg" width="64" alt="Post image"></a>
                            <div class="ps-3">
                              <h6 class="blog-entry-title fs-sm mb-0"><a href="blog-single.html">Augmented Reality -
                                  Game Changing Technology</a></h6><span class="fs-ms text-muted">by <a href="#"
                                  class="blog-entry-meta-link">John Doe</a></span>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="simplebar-placeholder" style="width: auto; height: 1081px;"></div>
              </div>
              <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                <div class="simplebar-scrollbar" style="width: 0px; display: none;"></div>
              </div>
              <div class="simplebar-track simplebar-vertical" style="visibility: hidden;">
                <div class="simplebar-scrollbar" style="height: 0px; display: none;"></div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </MainLayout>

</template>

<script>

import MainLayout from '@/layouts/MainLayout.vue';

export default {
  components: {
    MainLayout
  },
};
</script>