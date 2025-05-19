<template>
  <div>
    <!-- Sign in / sign up modal-->
    <div class="modal fade" id="signin-modal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header bg-secondary">
            <ul class="nav nav-tabs card-header-tabs" role="tablist">
              <li class="nav-item">
                <a class="nav-link fw-medium active" href="#signin-tab" data-bs-toggle="tab" role="tab"
                  aria-selected="true"><i class="ci-unlocked me-2 mt-n1"></i>Sign in</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-medium" href="#signup-tab" data-bs-toggle="tab" role="tab"
                  aria-selected="false"><i class="ci-user me-2 mt-n1"></i>Sign up</a>
              </li>
            </ul>
            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body tab-content py-4">
            <form class="needs-validation tab-pane fade show active" autocomplete="off" novalidate id="signin-tab">
              <div class="mb-3">
                <label class="form-label" for="si-email">Email address</label>
                <input class="form-control" type="email" id="si-email" placeholder="johndoe@example.com" required />
                <div class="invalid-feedback">
                  Please provide a valid email address.
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label" for="si-password">Password</label>
                <div class="password-toggle">
                  <input class="form-control" type="password" id="si-password" required />
                  <label class="password-toggle-btn" aria-label="Show/hide password">
                    <input class="password-toggle-check" type="checkbox" /><span
                      class="password-toggle-indicator"></span>
                  </label>
                </div>
              </div>
              <div class="mb-3 d-flex flex-wrap justify-content-between">
                <div class="form-check mb-2">
                  <input class="form-check-input" type="checkbox" id="si-remember" />
                  <label class="form-check-label" for="si-remember">Remember me</label>
                </div>
                <a class="fs-sm" href="#">Forgot password?</a>
              </div>
              <button class="btn btn-primary btn-shadow d-block w-100" type="submit">
                Sign in
              </button>
            </form>
            <form class="needs-validation tab-pane fade" autocomplete="off" novalidate id="signup-tab">
              <div class="mb-3">
                <label class="form-label" for="su-name">Full name</label>
                <input class="form-control" type="text" id="su-name" placeholder="John Doe" required />
                <div class="invalid-feedback">Please fill in your name.</div>
              </div>
              <div class="mb-3">
                <label for="su-email">Email address</label>
                <input class="form-control" type="email" id="su-email" placeholder="johndoe@example.com" required />
                <div class="invalid-feedback">
                  Please provide a valid email address.
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label" for="su-password">Password</label>
                <div class="password-toggle">
                  <input class="form-control" type="password" id="su-password" required />
                  <label class="password-toggle-btn" aria-label="Show/hide password">
                    <input class="password-toggle-check" type="checkbox" /><span
                      class="password-toggle-indicator"></span>
                  </label>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label" for="su-password-confirm">Confirm password</label>
                <div class="password-toggle">
                  <input class="form-control" type="password" id="su-password-confirm" required />
                  <label class="password-toggle-btn" aria-label="Show/hide password">
                    <input class="password-toggle-check" type="checkbox" /><span
                      class="password-toggle-indicator"></span>
                  </label>
                </div>
              </div>
              <button class="btn btn-primary btn-shadow d-block w-100" type="submit">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <main class="page-wrapper">

      <div class="offcanvas offcanvas-end me-auto order-lg-2" id="navbarOffcanvas">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title">Menu</h5>
          <button class="btn-close text-reset" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                data-bs-auto-close="outside">Dropdown</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action link</a></li>
                <li class="dropdown">
                  <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Dropdown</a>
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
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
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
              <a class="navbar-brand d-none d-sm-block flex-shrink-0 py-0" href="index.html"><img
                  src="../../dist/img/LogoRM.b5d6692e.png" width="142" alt="Readmate" /></a><a
                class="navbar-brand d-sm-none flex-shrink-0 me-2" href="index.html"><img
                  src="../../dist/img/LogoRM.b5d6692e.png" width="74" alt="Readmate" /></a>
              <div class="input-group d-none d-lg-flex mx-4">
                <input class="form-control rounded-end pe-5" type="text" placeholder="Buscar un libro.." /><i
                  class="ci-search position-absolute top-50 end-0 translate-middle-y text-muted fs-base me-3"></i>
              </div>
              <div class="navbar-toolbar d-flex flex-shrink-0 align-items-center">
                <a class="navbar-tool d-none d-lg-flex" href="account-wishlist.html"><span
                    class="navbar-tool-tooltip">Favoritos</span>
                  <div class="navbar-tool-icon-box">
                    <i class="navbar-tool-icon ci-heart"></i>
                  </div>
                </a><a class="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2" href="#signin-modal" data-bs-toggle="modal">
                  <div class="navbar-tool-icon-box">
                    <i class="navbar-tool-icon ci-user"></i>
                  </div>
                  <div class="navbar-tool-text ms-n3 ">
                    <small>Iniciar Sesión</small>Mi cuenta
                  </div>
                </a>
                <a class="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2 text-dark d-none d-lg-block" href="#navbarOffcanvas"
                  data-bs-toggle="offcanvas">
                  <div class="navbar-tool-icon-box">
                    <i class="navbar-tool-icon ci-menu"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <!-- Menu movil -->
          <!-- esconde solo pantallas de menor a 1024px -->
          <div class="navbar navbar-expand-lg navbar-light navbar-stuck-menu mt-n2 pt-0 pb-2 d-lg-none">
            <div class="container">
              <div class="collapse navbar-collapse" id="navbarCollapse">
                <!-- Search-->
                <div class="input-group d-lg-none my-3">
                  <i class="ci-search position-absolute top-50 start-0 translate-middle-y text-muted fs-base ms-3"></i>
                  <input class="form-control rounded-start" type="text" placeholder="Search for books" />
                </div>
                <!-- Departments menu movil-->
                <ul class="navbar-nav navbar-mega-nav pe-lg-2 me-lg-2">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle ps-lg-0" href="#" data-bs-toggle="dropdown"><i
                        class="ci-view-grid me-2"></i>Categorias</a>
                    <div class="dropdown-menu px-2 pb-4">
                      <div class="d-flex flex-wrap flex-sm-nowrap">
                        <div class="mega-dropdown-column pt-3 pt-sm-4 px-2 px-lg-3">
                          <div class="widget widget-links">
                            <a class="d-block overflow-hidden rounded-3 mb-3" href="#"><img
                                src="img/shop/departments/01.jpg" alt="Clothing" /></a>
                            <h6 class="fs-base mb-2">Clothing</h6>
                            <ul class="widget-list">
                              <li class="widget-list-item mb-1">
                                <a class="widget-list-link" href="#">Women's clothing</a>
                              </li>
                              <li class="widget-list-item mb-1">
                                <a class="widget-list-link" href="#">Men's clothing</a>
                              </li>
                              <li class="widget-list-item mb-1">
                                <a class="widget-list-link" href="#">Kid's clothing</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="mega-dropdown-column pt-4 px-2 px-lg-3">
                          <div class="widget widget-links">
                            <a class="d-block overflow-hidden rounded-3 mb-3" href="#"><img
                                src="img/shop/departments/02.jpg" alt="Shoes" /></a>
                            <h6 class="fs-base mb-2">Shoes</h6>
                            <ul class="widget-list">
                              <li class="widget-list-item mb-1">
                                <a class="widget-list-link" href="#">Women's shoes</a>
                              </li>
                              <li class="widget-list-item mb-1">
                                <a class="widget-list-link" href="#">Men's shoes</a>
                              </li>
                              <li class="widget-list-item mb-1">
                                <a class="widget-list-link" href="#">Kid's shoes</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="mega-dropdown-column pt-4 px-2 px-lg-3">
                          <div class="widget widget-links">
                            <a class="d-block overflow-hidden rounded-3 mb-3" href="#"><img
                                src="img/shop/departments/03.jpg" alt="Gadgets" /></a>
                            <h6 class="fs-base mb-2">Gadgets</h6>
                            <ul class="widget-list">
                              <li class="widget-list-item mb-1">
                                <a class="widget-list-link" href="#">Smartphones &amp; Tablets</a>
                              </li>
                              <li class="widget-list-item mb-1">
                                <a class="widget-list-link" href="#">Wearable gadgets</a>
                              </li>
                              <li class="widget-list-item mb-1">
                                <a class="widget-list-link" href="#">E-book readers</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex flex-wrap flex-sm-nowrap">
                        <div class="mega-dropdown-column pt-4 px-2 px-lg-3">
                          <div class="widget widget-links">
                            <a class="d-block overflow-hidden rounded-3 mb-3" href="#"><img
                                src="img/shop/departments/04.jpg" alt="Furniture" /></a>
                            <h6 class="fs-base mb-2">Furniture &amp; Decor</h6>
                            <ul class="widget-list">
                              <li class="widget-list-item mb-1">
                                <a class="widget-list-link" href="#">Home furniture</a>
                              </li>
                              <li class="widget-list-item mb-1">
                                <a class="widget-list-link" href="#">Office furniture</a>
                              </li>
                              <li class="widget-list-item mb-1">
                                <a class="widget-list-link" href="#">Lighting and decoration</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="mega-dropdown-column pt-4 px-2 px-lg-3">
                          <div class="widget widget-links">
                            <a class="d-block overflow-hidden rounded-3 mb-3" href="#"><img
                                src="img/shop/departments/05.jpg" alt="Accessories" /></a>
                            <h6 class="fs-base mb-2">Accessories</h6>
                            <ul class="widget-list">
                              <li class="widget-list-item mb-1">
                                <a class="widget-list-link" href="#">Hats</a>
                              </li>
                              <li class="widget-list-item mb-1">
                                <a class="widget-list-link" href="#">Sunglasses</a>
                              </li>
                              <li class="widget-list-item mb-1">
                                <a class="widget-list-link" href="#">Bags</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="mega-dropdown-column pt-4 px-2 px-lg-3">
                          <div class="widget widget-links">
                            <a class="d-block overflow-hidden rounded-3 mb-3" href="#"><img
                                src="img/shop/departments/06.jpg" alt="Entertainment" /></a>
                            <h6 class="fs-base mb-2">Entertainment</h6>
                            <ul class="widget-list">
                              <li class="widget-list-item mb-1">
                                <a class="widget-list-link" href="#">Kid's toys</a>
                              </li>
                              <li class="widget-list-item mb-1">
                                <a class="widget-list-link" href="#">Video games</a>
                              </li>
                              <li class="widget-list-item mb-1">
                                <a class="widget-list-link" href="#">Outdoor / Camping</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <!-- Primary menu-->
                <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Home</a>
                    <ul class="dropdown-menu">
                      <li class="dropdown position-static mb-0">
                        <a class="dropdown-item border-bottom py-2" href="home-nft.html"><span
                            class="d-block text-heading">NFT Marketplace<span
                              class="badge bg-danger ms-1">NEW</span></span><small class="d-block text-muted">NFTs,
                            Multi-vendor, Auctions</small></a>
                        <div class="dropdown-menu h-100 animation-none mt-0 p-3">
                          <a class="d-block" href="home-nft.html" style="width: 250px"><img
                              src="img/home/preview/th08.jpg" alt="NFT Marketplace" /></a>
                        </div>
                      </li>
                      <li class="dropdown position-static mb-0">
                        <a class="dropdown-item py-2 border-bottom" href="home-fashion-store-v1.html"><span
                            class="d-block text-heading">Fashion Store v.1</span><small
                            class="d-block text-muted">Classic shop layout</small></a>
                        <div class="dropdown-menu h-100 animation-none mt-0 p-3">
                          <a class="d-block" href="home-fashion-store-v1.html" style="width: 250px"><img
                              src="img/home/preview/th01.jpg" alt="Fashion Store v.1" /></a>
                        </div>
                      </li>
                      <li class="dropdown position-static mb-0">
                        <a class="dropdown-item py-2 border-bottom" href="home-electronics-store.html"><span
                            class="d-block text-heading">Electronics Store</span><small
                            class="d-block text-muted">Slider + Promo banners</small></a>
                        <div class="dropdown-menu h-100 animation-none mt-0 p-3">
                          <a class="d-block" href="home-electronics-store.html" style="width: 250px"><img
                              src="img/home/preview/th03.jpg" alt="Electronics Store" /></a>
                        </div>
                      </li>
                      <li class="dropdown position-static mb-0">
                        <a class="dropdown-item py-2 border-bottom" href="home-marketplace.html"><span
                            class="d-block text-heading">Marketplace</span><small
                            class="d-block text-muted">Multi-vendor, digital goods</small></a>
                        <div class="dropdown-menu h-100 animation-none mt-0 p-3">
                          <a class="d-block" href="home-marketplace.html" style="width: 250px"><img
                              src="img/home/preview/th04.jpg" alt="Marketplace" /></a>
                        </div>
                      </li>
                      <li class="dropdown position-static mb-0">
                        <a class="dropdown-item py-2 border-bottom" href="home-grocery-store.html"><span
                            class="d-block text-heading">Grocery Store</span><small class="d-block text-muted">Full
                            width + Side menu</small></a>
                        <div class="dropdown-menu h-100 animation-none mt-0 p-3">
                          <a class="d-block" href="home-grocery-store.html" style="width: 250px"><img
                              src="img/home/preview/th06.jpg" alt="Grocery Store" /></a>
                        </div>
                      </li>
                      <li class="dropdown position-static mb-0">
                        <a class="dropdown-item py-2 border-bottom" href="home-food-delivery.html"><span
                            class="d-block text-heading">Food Delivery Service</span><small
                            class="d-block text-muted">Food &amp; Beverages delivery</small></a>
                        <div class="dropdown-menu h-100 animation-none mt-0 p-3">
                          <a class="d-block" href="home-food-delivery.html" style="width: 250px"><img
                              src="img/home/preview/th07.jpg" alt="Food Delivery Service" /></a>
                        </div>
                      </li>
                      <li class="dropdown position-static mb-0">
                        <a class="dropdown-item py-2 border-bottom" href="home-fashion-store-v2.html"><span
                            class="d-block text-heading">Fashion Store v.2</span><small
                            class="d-block text-muted">Slider + Featured categories</small></a>
                        <div class="dropdown-menu h-100 animation-none mt-0 p-3">
                          <a class="d-block" href="home-fashion-store-v2.html" style="width: 250px"><img
                              src="img/home/preview/th02.jpg" alt="Fashion Store v.2" /></a>
                        </div>
                      </li>
                      <li class="dropdown position-static mb-0">
                        <a class="dropdown-item py-2" href="home-single-store.html"><span
                            class="d-block text-heading">Single Book Store</span><small
                            class="d-block text-muted">Single book / mono brand</small></a>
                        <div class="dropdown-menu h-100 animation-none mt-0 p-3">
                          <a class="d-block" href="home-single-store.html" style="width: 250px"><img
                              src="img/home/preview/th05.jpg" alt="Single Book / Brand Store" /></a>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Shop</a>
                    <div class="dropdown-menu p-0">
                      <div class="d-flex flex-wrap flex-sm-nowrap px-2">
                        <div class="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3">
                          <div class="widget widget-links mb-4">
                            <h6 class="fs-base mb-3">Shop layouts</h6>
                            <ul class="widget-list">
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="shop-grid-ls.html">Shop Grid - Left Sidebar</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="shop-grid-rs.html">Shop Grid - Right Sidebar</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="shop-grid-ft.html">Shop Grid - Filters on Top</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="shop-list-ls.html">Shop List - Left Sidebar</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="shop-list-rs.html">Shop List - Right Sidebar</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="shop-list-ft.html">Shop List - Filters on Top</a>
                              </li>
                            </ul>
                          </div>
                          <div class="widget widget-links mb-4">
                            <h6 class="fs-base mb-3">Marketplace</h6>
                            <ul class="widget-list">
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="marketplace-category.html">Category Page</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="marketplace-single.html">Single Item Page</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="marketplace-vendor.html">Vendor Page</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="marketplace-cart.html">Cart</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="marketplace-checkout.html">Checkout</a>
                              </li>
                            </ul>
                          </div>
                          <div class="widget widget-links">
                            <h6 class="fs-base mb-3">Grocery store</h6>
                            <ul class="widget-list">
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="grocery-catalog.html">Book Catalog</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="grocery-single.html">Single Book Page</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="grocery-checkout.html">Checkout</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3">
                          <div class="widget widget-links mb-4">
                            <h6 class="fs-base mb-3">Food Delivery</h6>
                            <ul class="widget-list">
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="food-delivery-category.html">Category Page</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="food-delivery-single.html">Single Item
                                  (Restaurant)</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="food-delivery-cart.html">Cart (Your Order)</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="food-delivery-checkout.html">Checkout (Address &amp;
                                  Payment)</a>
                              </li>
                            </ul>
                          </div>
                          <div class="widget widget-links">
                            <h6 class="fs-base mb-3">
                              NFT Marketplace<span class="badge bg-danger ms-1">NEW</span>
                            </h6>
                            <ul class="widget-list">
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="nft-catalog-v1.html">Catalog v.1</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="nft-catalog-v2.html">Catalog v.2</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="nft-single-auction-live.html">Single Item - Auction
                                  Live</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="nft-single-auction-ended.html">Single Item - Auction
                                  Ended</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="nft-single-buy.html">Single Item - Buy Now</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="nft-vendor.html">Vendor Page</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="nft-connect-wallet.html">Connect Wallet</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="nft-create-item.html">Create New Item</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="mega-dropdown-column pt-1 pt-lg-4 px-2 px-lg-3">
                          <div class="widget widget-links mb-4">
                            <h6 class="fs-base mb-3">Shop pages</h6>
                            <ul class="widget-list">
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="shop-categories.html">Shop Categories</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="shop-single-v1.html">Book Page v.1</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="shop-single-v2.html">Book Page v.2</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="shop-cart.html">Cart</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="checkout-details.html">Checkout - Details</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="checkout-shipping.html">Checkout - Shipping</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="checkout-payment.html">Checkout - Payment</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="checkout-review.html">Checkout - Review</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="checkout-complete.html">Checkout - Complete</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="order-tracking.html">Order Tracking</a>
                              </li>
                              <li class="widget-list-item">
                                <a class="widget-list-link" href="comparison.html">Book Comparison</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                      data-bs-auto-close="outside">Account</a>
                    <ul class="dropdown-menu">
                      <li class="dropdown">
                        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Shop User
                          Account</a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="account-orders.html">Orders History</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="account-profile.html">Profile Settings</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="account-address.html">Account Addresses</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="account-payment.html">Payment Methods</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="account-wishlist.html">Favoritos</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="account-tickets.html">My Tickets</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="account-single-ticket.html">Single Ticket</a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Vendor Dashboard</a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="dashboard-settings.html">Settings</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="dashboard-purchases.html">Purchases</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="dashboard-favorites.html">Favorites</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="dashboard-sales.html">Sales</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="dashboard-books.html">Books</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="dashboard-add-new-book.html">Add New Book</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="dashboard-payouts.html">Payouts</a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">NFT Marketplace<span
                            class="badge bg-danger ms-1">NEW</span></a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="nft-account-settings.html">Profile Settings</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="nft-account-payouts.html">Wallet &amp; Payouts</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="nft-account-my-items.html">My Items</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="nft-account-my-collections.html">My Collections</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="nft-account-favorites.html">Favorites</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="nft-account-notifications.html">Notifications</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a class="dropdown-item" href="account-signin.html">Sign In / Sign Up</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="account-password-recovery.html">Password Recovery</a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown active">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                      data-bs-auto-close="outside">Pages</a>
                    <ul class="dropdown-menu">
                      <li class="dropdown">
                        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Navbar Variants</a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="navbar-1-level-light.html">1 Level Light</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="navbar-1-level-dark.html">1 Level Dark</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="navbar-2-level-light.html">2 Level Light</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="navbar-2-level-dark.html">2 Level Dark</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="navbar-3-level-light.html">3 Level Light</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="navbar-3-level-dark.html">3 Level Dark</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="home-electronics-store.html">Electronics Store</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="home-marketplace.html">Marketplace</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="home-grocery-store.html">Side Menu (Grocery)</a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li>
                        <a class="dropdown-item" href="about.html">About Us</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="contacts.html">Contacts</a>
                      </li>
                      <li class="dropdown">
                        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Help Center</a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="help-topics.html">Help Topics</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="help-single-topic.html">Single Topic</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="help-submit-request.html">Submit a Request</a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">404 Not Found</a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="404-simple.html">404 - Simple Text</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="404-illustration.html">404 - Illustration</a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li>
                        <a class="dropdown-item" href="sticky-footer.html">Sticky Footer Demo</a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                      data-bs-auto-close="outside">Blog</a>
                    <ul class="dropdown-menu">
                      <li class="dropdown">
                        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Blog List
                          Layouts</a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="blog-list-sidebar.html">List with Sidebar</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="blog-list.html">List no Sidebar</a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Blog Grid
                          Layouts</a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="blog-grid-sidebar.html">Grid with Sidebar</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="blog-grid.html">Grid no Sidebar</a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Single Post
                          Layouts</a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="blog-single-sidebar.html">Article with Sidebar</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="blog-single.html">Article no Sidebar</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Docs / Components</a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="docs/dev-setup.html">
                          <div class="d-flex">
                            <div class="lead text-muted pt-1">
                              <i class="ci-book"></i>
                            </div>
                            <div class="ms-2">
                              <span class="d-block text-heading">Documentation</span><small
                                class="d-block text-muted">Kick-start customization</small>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li>
                        <a class="dropdown-item" href="components/typography.html">
                          <div class="d-flex">
                            <div class="lead text-muted pt-1">
                              <i class="ci-server"></i>
                            </div>
                            <div class="ms-2">
                              <span class="d-block text-heading">Components<span
                                  class="badge bg-info ms-2">40+</span></span><small class="d-block text-muted">Faster
                                page building</small>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li>
                        <a class="dropdown-item" href="docs/changelog.html">
                          <div class="d-flex">
                            <div class="lead text-muted pt-1">
                              <i class="ci-edit"></i>
                            </div>
                            <div class="ms-2">
                              <span class="d-block text-heading">Changelog<span
                                  class="badge bg-success ms-2">v2.4.0</span></span><small
                                class="d-block text-muted">Regular updates</small>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li>
                        <a class="dropdown-item" href="mailto:support@createx.studio">
                          <div class="d-flex">
                            <div class="lead text-muted pt-1">
                              <i class="ci-help"></i>
                            </div>
                            <div class="ms-2">
                              <span class="d-block text-heading">Support</span><small
                                class="d-block text-muted">support@createx.studio</small>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
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
    <footer class="footer pt-5" style="background-color: #19191a;">
      <div class="container pt-2 pb-3">
        <div class="row">
          <div class="col-md-6 text-center text-md-start mb-4">
            <div class="text-nowrap mb-3"><a class="d-inline-block align-middle mt-n2 me-2" href="#"><img
                  class="d-block" src="../../dist/img/LogoRM.b5d6692e.png" width="117" alt="Readmate"></a>
            </div>
            <p class="fs-sm text-white opacity-70 pb-1">Lee, comparte, construye comunidad.</p>
            <h6 class="d-inline-block pe-3 me-3 border-end border-light"><span class="text-primary">2,521 </span><span
                class="fw-normal text-white">Lectores</span></h6>
            <h6 class="d-inline-block pe-3 me-3  border-light"><span class="text-primary">65,478 </span><span
                class="fw-normal text-white">Libros</span></h6>
            <div class="widget mt-4 text-md-nowrap text-center text-md-start"><a
                class="btn-social bs-light bs-twitter me-2 mb-2" href="#"><i class="ci-instagram"></i></a><a
                class="btn-social bs-light bs-facebook me-2 mb-2" href="#"><i class="ci-facebook"></i></a><a
                class="btn-social bs-light bs-dribbble me-2 mb-2" href="#"><i class="ci-tiktok"></i></a></div>
          </div>
          <!-- Mobile dropdown menu (visible on screens below md)-->
          <div class="col-12 d-md-none text-center mb-4 pb-2">
            <div class="btn-group dropdown d-block mx-auto mb-3">
              <button class="btn btn-outline-light border-light dropdown-toggle" type="button"
                data-bs-toggle="dropdown">Categories</button>
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
              <button class="btn btn-outline-light border-light dropdown-toggle" type="button"
                data-bs-toggle="dropdown">For members</button>
              <ul class="dropdown-menu my-1">
                <li><a class="dropdown-item" href="#">Licenses</a></li>
                <li><a class="dropdown-item" href="#">Return policy</a></li>
                <li><a class="dropdown-item" href="#">Payment methods</a></li>
                <li><a class="dropdown-item" href="#">Become a vendor</a></li>
                <li><a class="dropdown-item" href="#">Become an affiliate</a></li>
                <li><a class="dropdown-item" href="#">Marketplace benefits</a></li>
              </ul>
            </div>
          </div>
          <!-- Desktop menu (visible on screens above md)-->
          <div class="col-md-3 d-none d-md-block text-center text-md-start mb-4">
            <div class="widget widget-links widget-light pb-2">
              <h3 class="widget-title text-light">Categorias</h3>
              <ul class="widget-list">
                <li class="widget-list-item"><a class="widget-list-link" href="#">Photos</a></li>
                <li class="widget-list-item"><a class="widget-list-link" href="#">Graphics</a></li>
                <li class="widget-list-item"><a class="widget-list-link" href="#">UI Design</a></li>
                <li class="widget-list-item"><a class="widget-list-link" href="#">Web Themes</a></li>
                <li class="widget-list-item"><a class="widget-list-link" href="#">Fonts</a></li>
                <li class="widget-list-item"><a class="widget-list-link" href="#">Add-Ons</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 d-none d-md-block text-center text-md-start mb-4">
            <div class="widget widget-links widget-light pb-2">
              <h3 class="widget-title text-light">For members</h3>
              <ul class="widget-list">
                <li class="widget-list-item"><a class="widget-list-link" href="#">Licenses</a></li>
                <li class="widget-list-item"><a class="widget-list-link" href="#">Return policy</a></li>
                <li class="widget-list-item"><a class="widget-list-link" href="#">Payment methods</a></li>
                <li class="widget-list-item"><a class="widget-list-link" href="#">Become a vendor</a></li>
                <li class="widget-list-item"><a class="widget-list-link" href="#">Become an affiliate</a></li>
                <li class="widget-list-item"><a class="widget-list-link" href="#">Marketplace benefits</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </footer>
    <!-- Toolbar for handheld devices (Default)-->
    <div class="handheld-toolbar">
      <div class="d-table table-layout-fixed w-100">
        <a class="d-table-cell handheld-toolbar-item" href="#"><span class="handheld-toolbar-icon"><i
              class="ci-heart"></i></span><span class="handheld-toolbar-label">Favoritos</span></a><a
          class="d-table-cell handheld-toolbar-item" href="javascript:void(0)" data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse" onclick="window.scrollTo(0, 0)"><span class="handheld-toolbar-icon"><i
              class="ci-menu"></i></span><span class="handheld-toolbar-label">Menu</span></a>

      </div>
    </div>
    <!-- Back To Top Button--><a class="btn-scroll-top" href="#top" data-scroll><span
        class="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span><i class="btn-scroll-top-icon ci-arrow-up">
      </i></a>
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
      const token = localStorage.getItem('authToken');
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
          localStorage.removeItem('authToken'); // Limpiar token inválido
        }
      } else {
        this.isAuthenticated = false;
      }
    }
  },
  mounted() {
    this.checkAuth();
  }
};
</script>
