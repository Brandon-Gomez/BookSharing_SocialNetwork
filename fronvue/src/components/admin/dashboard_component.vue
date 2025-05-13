<template>
  <main class="page-wrapper">
    <!-- Navbar 3 Level (Light)-->
    <header class="shadow-sm">
      <!-- Topbar-->
      <div class="topbar topbar-dark bg-dark">
        <div class="container">
          <div class="topbar-text dropdown d-md-none"><a class="topbar-link dropdown-toggle" href="#"
              data-bs-toggle="dropdown">Useful links</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="tel:00331697720"><i class="ci-support text-muted me-2"></i>(00) 33 169
                  7720</a></li>
              <li><a class="dropdown-item" href="order-tracking.html"><i class="ci-location text-muted me-2"></i>Order
                  tracking</a></li>
            </ul>
          </div>
          <div class="topbar-text text-nowrap d-none d-md-inline-block"><i class="ci-support"></i><span
              class="text-muted me-1">Support</span><a class="topbar-link" href="tel:00331697720">(00) 33 169 7720</a>
          </div>
          <div class="tns-carousel tns-controls-static d-none d-md-block">
            <div class="tns-outer" id="tns1-ow">
              <div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button"
                  data-controls="prev" tabindex="-1" aria-controls="tns1"><i class="ci-arrow-left"></i></button><button
                  type="button" data-controls="next" tabindex="-1" aria-controls="tns1"><i
                    class="ci-arrow-right"></i></button></div>
              <div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span
                  class="current">1</span> of 3</div>
              <div class="tns-inner" id="tns1-iw">
                <div class="tns-carousel-inner tns-slider tns-gallery tns-subpixel tns-calc tns-horizontal"
                  data-carousel-options="{&quot;mode&quot;: &quot;gallery&quot;, &quot;nav&quot;: false}" id="tns1">
                  <div class="topbar-text tns-item tns-fadeIn tns-slide-active" id="tns1-item0" style="left: 0%;">Free
                    shipping for order over $200</div>
                  <div class="topbar-text tns-item tns-normal" id="tns1-item1" aria-hidden="true" tabindex="-1">We
                    return money within 30 days</div>
                  <div class="topbar-text tns-item tns-normal" id="tns1-item2" aria-hidden="true" tabindex="-1">Friendly
                    24/7 customer support</div>
                  <div class="topbar-text tns-item tns-normal tns-slide-cloned" aria-hidden="true" tabindex="-1">Free
                    shipping for order over $200</div>
                </div>
              </div>
            </div>
          </div>
          <div class="ms-3 text-nowrap"><a class="topbar-link me-4 d-none d-md-inline-block"
              href="order-tracking.html"><i class="ci-location"></i>Order tracking</a>
            <div class="topbar-text dropdown disable-autohide"><a class="topbar-link dropdown-toggle" href="#"
                data-bs-toggle="dropdown"><img class="me-2" src="img/flags/en.png" width="20" alt="English">Eng / $</a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li class="dropdown-item">
                  <select class="form-select form-select-sm">
                    <option value="usd">$ USD</option>
                    <option value="eur">€ EUR</option>
                    <option value="ukp">£ UKP</option>
                    <option value="jpy">¥ JPY</option>
                  </select>
                </li>
                <li><a class="dropdown-item pb-1" href="#"><img class="me-2" src="img/flags/fr.png" width="20"
                      alt="Français">Français</a></li>
                <li><a class="dropdown-item pb-1" href="#"><img class="me-2" src="img/flags/de.png" width="20"
                      alt="Deutsch">Deutsch</a></li>
                <li><a class="dropdown-item" href="#"><img class="me-2" src="img/flags/it.png" width="20"
                      alt="Italiano">Italiano</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page.-->
      <div class="navbar-sticky bg-light">
        <div class="navbar navbar-expand-lg navbar-light">
          <div class="container"><a class="navbar-brand d-none d-sm-block flex-shrink-0" href="index.html"><img
                src="img/logo-dark.png" width="142" alt="Cartzilla"></a><a
              class="navbar-brand d-sm-none flex-shrink-0 me-2" href="index.html"><img src="img/logo-icon.png"
                width="74" alt="Cartzilla"></a>
            <div class="input-group d-none d-lg-flex mx-4">
              <input class="form-control rounded-end pe-5" type="text" placeholder="Search for products"><i
                class="ci-search position-absolute top-50 end-0 translate-middle-y text-muted fs-base me-3"></i>
            </div>
            <div class="navbar-toolbar d-flex flex-shrink-0 align-items-center">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"><span class="navbar-toggler-icon"></span></button><a
                class="navbar-tool navbar-stuck-toggler" href="#"><span class="navbar-tool-tooltip">Expand menu</span>
                <div class="navbar-tool-icon-box"><i class="navbar-tool-icon ci-menu"></i></div>
              </a><a class="navbar-tool d-none d-lg-flex" href="account-wishlist.html"><span
                  class="navbar-tool-tooltip">Wishlist</span>
                <div class="navbar-tool-icon-box"><i class="navbar-tool-icon ci-heart"></i></div>
              </a><a class="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2" href="#signin-modal" data-bs-toggle="modal">
                <div class="navbar-tool-icon-box"><i class="navbar-tool-icon ci-user"></i></div>
                <div class="navbar-tool-text ms-n3"><small>Hello, Sign in</small>My Account</div>
              </a>
              <div class="navbar-tool dropdown ms-3"><a class="navbar-tool-icon-box bg-secondary dropdown-toggle"
                  href="shop-cart.html"><span class="navbar-tool-label">4</span><i
                    class="navbar-tool-icon ci-cart"></i></a><a class="navbar-tool-text" href="shop-cart.html"><small>My
                    Cart</small>$265.00</a>
                <!-- Cart dropdown-->
                <div class="dropdown-menu dropdown-menu-end">
                  <div class="widget widget-cart px-3 pt-2 pb-3" style="width: 20rem;">
                    <div style="height: 15rem;" data-simplebar="init" data-simplebar-auto-hide="false">
                      <div class="simplebar-wrapper" style="margin: 0px -16px 0px 0px;">
                        <div class="simplebar-height-auto-observer-wrapper">
                          <div class="simplebar-height-auto-observer"></div>
                        </div>
                        <div class="simplebar-mask">
                          <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                            <div class="simplebar-content-wrapper" tabindex="0" role="region"
                              aria-label="scrollable content" style="height: auto; overflow: hidden;">
                              <div class="simplebar-content" style="padding: 0px 16px 0px 0px;">
                                <div class="widget-cart-item pb-2 border-bottom">
                                  <button class="btn-close text-danger" type="button" aria-label="Remove"><span
                                      aria-hidden="true">×</span></button>
                                  <div class="d-flex align-items-center"><a class="flex-shrink-0"
                                      href="shop-single-v1.html"><img src="img/shop/cart/widget/01.jpg" width="64"
                                        alt="Product"></a>
                                    <div class="ps-2">
                                      <h6 class="widget-product-title"><a href="shop-single-v1.html">Women Colorblock
                                          Sneakers</a></h6>
                                      <div class="widget-product-meta"><span
                                          class="text-accent me-2">$150.<small>00</small></span><span
                                          class="text-muted">x 1</span></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="widget-cart-item py-2 border-bottom">
                                  <button class="btn-close text-danger" type="button" aria-label="Remove"><span
                                      aria-hidden="true">×</span></button>
                                  <div class="d-flex align-items-center"><a class="flex-shrink-0"
                                      href="shop-single-v1.html"><img src="img/shop/cart/widget/02.jpg" width="64"
                                        alt="Product"></a>
                                    <div class="ps-2">
                                      <h6 class="widget-product-title"><a href="shop-single-v1.html">TH Jeans City
                                          Backpack</a></h6>
                                      <div class="widget-product-meta"><span
                                          class="text-accent me-2">$79.<small>50</small></span><span
                                          class="text-muted">x 1</span></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="widget-cart-item py-2 border-bottom">
                                  <button class="btn-close text-danger" type="button" aria-label="Remove"><span
                                      aria-hidden="true">×</span></button>
                                  <div class="d-flex align-items-center"><a class="flex-shrink-0"
                                      href="shop-single-v1.html"><img src="img/shop/cart/widget/03.jpg" width="64"
                                        alt="Product"></a>
                                    <div class="ps-2">
                                      <h6 class="widget-product-title"><a href="shop-single-v1.html">3-Color Sun Stash
                                          Hat</a></h6>
                                      <div class="widget-product-meta"><span
                                          class="text-accent me-2">$22.<small>50</small></span><span
                                          class="text-muted">x 1</span></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="widget-cart-item py-2 border-bottom">
                                  <button class="btn-close text-danger" type="button" aria-label="Remove"><span
                                      aria-hidden="true">×</span></button>
                                  <div class="d-flex align-items-center"><a class="flex-shrink-0"
                                      href="shop-single-v1.html"><img src="img/shop/cart/widget/04.jpg" width="64"
                                        alt="Product"></a>
                                    <div class="ps-2">
                                      <h6 class="widget-product-title"><a href="shop-single-v1.html">Cotton Polo Regular
                                          Fit</a></h6>
                                      <div class="widget-product-meta"><span
                                          class="text-accent me-2">$9.<small>00</small></span><span class="text-muted">x
                                          1</span></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="simplebar-placeholder" style="width: 0px; height: 0px;"></div>
                      </div>
                      <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                        <div class="simplebar-scrollbar simplebar-visible" style="width: 0px; display: none;"></div>
                      </div>
                      <div class="simplebar-track simplebar-vertical" style="visibility: hidden;">
                        <div class="simplebar-scrollbar simplebar-visible" style="height: 0px; display: none;"></div>
                      </div>
                    </div>
                    <div class="d-flex flex-wrap justify-content-between align-items-center py-3">
                      <div class="fs-sm me-2 py-2"><span class="text-muted">Subtotal:</span><span
                          class="text-accent fs-base ms-1">$265.<small>00</small></span></div><a
                        class="btn btn-outline-secondary btn-sm" href="shop-cart.html">Expand cart<i
                          class="ci-arrow-right ms-1 me-n1"></i></a>
                    </div><a class="btn btn-primary btn-sm d-block w-100" href="checkout-details.html"><i
                        class="ci-card me-2 fs-base align-middle"></i>Checkout</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar navbar-expand-lg navbar-light navbar-stuck-menu mt-n2 pt-0 pb-2">
          <div class="container">
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <!-- Search-->
              <div class="input-group d-lg-none my-3"><i
                  class="ci-search position-absolute top-50 start-0 translate-middle-y text-muted fs-base ms-3"></i>
                <input class="form-control rounded-start" type="text" placeholder="Search for products">
              </div>
              <!-- Departments menu-->
              <ul class="navbar-nav navbar-mega-nav pe-lg-2 me-lg-2">
                <li class="nav-item dropdown"><a class="nav-link dropdown-toggle ps-lg-0" href="#"
                    data-bs-toggle="dropdown"><i class="ci-view-grid me-2"></i>Departments</a>
                  <div class="dropdown-menu px-2 pb-4">
                    <div class="d-flex flex-wrap flex-sm-nowrap">
                      <div class="mega-dropdown-column pt-3 pt-sm-4 px-2 px-lg-3">
                        <div class="widget widget-links"><a class="d-block overflow-hidden rounded-3 mb-3" href="#"><img
                              src="img/shop/departments/01.jpg" alt="Clothing"></a>
                          <h6 class="fs-base mb-2">Clothing</h6>
                          <ul class="widget-list">
                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Women's clothing</a>
                            </li>
                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Men's clothing</a>
                            </li>
                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Kid's clothing</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="mega-dropdown-column pt-4 px-2 px-lg-3">
                        <div class="widget widget-links"><a class="d-block overflow-hidden rounded-3 mb-3" href="#"><img
                              src="img/shop/departments/02.jpg" alt="Shoes"></a>
                          <h6 class="fs-base mb-2">Shoes</h6>
                          <ul class="widget-list">
                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Women's shoes</a>
                            </li>
                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Men's shoes</a></li>
                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Kid's shoes</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="mega-dropdown-column pt-4 px-2 px-lg-3">
                        <div class="widget widget-links"><a class="d-block overflow-hidden rounded-3 mb-3" href="#"><img
                              src="img/shop/departments/03.jpg" alt="Gadgets"></a>
                          <h6 class="fs-base mb-2">Gadgets</h6>
                          <ul class="widget-list">
                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Smartphones &amp;
                                Tablets</a></li>
                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Wearable gadgets</a>
                            </li>
                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">E-book readers</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex flex-wrap flex-sm-nowrap">
                      <div class="mega-dropdown-column pt-4 px-2 px-lg-3">
                        <div class="widget widget-links"><a class="d-block overflow-hidden rounded-3 mb-3" href="#"><img
                              src="img/shop/departments/04.jpg" alt="Furniture"></a>
                          <h6 class="fs-base mb-2">Furniture &amp; Decor</h6>
                          <ul class="widget-list">
                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Home furniture</a>
                            </li>
                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Office furniture</a>
                            </li>
                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Lighting and
                                decoration</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="mega-dropdown-column pt-4 px-2 px-lg-3">
                        <div class="widget widget-links"><a class="d-block overflow-hidden rounded-3 mb-3" href="#"><img
                              src="img/shop/departments/05.jpg" alt="Accessories"></a>
                          <h6 class="fs-base mb-2">Accessories</h6>
                          <ul class="widget-list">
                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Hats</a></li>
                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Sunglasses</a></li>
                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Bags</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="mega-dropdown-column pt-4 px-2 px-lg-3">
                        <div class="widget widget-links"><a class="d-block overflow-hidden rounded-3 mb-3" href="#"><img
                              src="img/shop/departments/06.jpg" alt="Entertainment"></a>
                          <h6 class="fs-base mb-2">Entertainment</h6>
                          <ul class="widget-list">
                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Kid's toys</a></li>
                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Video games</a></li>
                            <li class="widget-list-item mb-1"><a class="widget-list-link" href="#">Outdoor / Camping</a>
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
                <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#"
                    data-bs-toggle="dropdown">Home</a>
                  <ul class="dropdown-menu">
                    <li class="dropdown position-static mb-0"><a class="dropdown-item border-bottom py-2"
                        href="home-nft.html"><span class="d-block text-heading">NFT Marketplace<span
                            class="badge bg-danger ms-1">NEW</span></span><small class="d-block text-muted">NFTs,
                          Multi-vendor, Auctions</small></a>
                      <div class="dropdown-menu h-100 animation-none mt-0 p-3"><a class="d-block" href="home-nft.html"
                          style="width: 250px;"><img src="img/home/preview/th08.jpg" alt="NFT Marketplace"></a></div>
                    </li>
                    <li class="dropdown position-static mb-0"><a class="dropdown-item py-2 border-bottom"
                        href="home-fashion-store-v1.html"><span class="d-block text-heading">Fashion Store
                          v.1</span><small class="d-block text-muted">Classic shop layout</small></a>
                      <div class="dropdown-menu h-100 animation-none mt-0 p-3"><a class="d-block"
                          href="home-fashion-store-v1.html" style="width: 250px;"><img src="img/home/preview/th01.jpg"
                            alt="Fashion Store v.1"></a></div>
                    </li>
                    <li class="dropdown position-static mb-0"><a class="dropdown-item py-2 border-bottom"
                        href="home-electronics-store.html"><span class="d-block text-heading">Electronics
                          Store</span><small class="d-block text-muted">Slider + Promo banners</small></a>
                      <div class="dropdown-menu h-100 animation-none mt-0 p-3"><a class="d-block"
                          href="home-electronics-store.html" style="width: 250px;"><img src="img/home/preview/th03.jpg"
                            alt="Electronics Store"></a></div>
                    </li>
                    <li class="dropdown position-static mb-0"><a class="dropdown-item py-2 border-bottom"
                        href="home-marketplace.html"><span class="d-block text-heading">Marketplace</span><small
                          class="d-block text-muted">Multi-vendor, digital goods</small></a>
                      <div class="dropdown-menu h-100 animation-none mt-0 p-3"><a class="d-block"
                          href="home-marketplace.html" style="width: 250px;"><img src="img/home/preview/th04.jpg"
                            alt="Marketplace"></a></div>
                    </li>
                    <li class="dropdown position-static mb-0"><a class="dropdown-item py-2 border-bottom"
                        href="home-grocery-store.html"><span class="d-block text-heading">Grocery Store</span><small
                          class="d-block text-muted">Full width + Side menu</small></a>
                      <div class="dropdown-menu h-100 animation-none mt-0 p-3"><a class="d-block"
                          href="home-grocery-store.html" style="width: 250px;"><img src="img/home/preview/th06.jpg"
                            alt="Grocery Store"></a></div>
                    </li>
                    <li class="dropdown position-static mb-0"><a class="dropdown-item py-2 border-bottom"
                        href="home-food-delivery.html"><span class="d-block text-heading">Food Delivery
                          Service</span><small class="d-block text-muted">Food &amp; Beverages delivery</small></a>
                      <div class="dropdown-menu h-100 animation-none mt-0 p-3"><a class="d-block"
                          href="home-food-delivery.html" style="width: 250px;"><img src="img/home/preview/th07.jpg"
                            alt="Food Delivery Service"></a></div>
                    </li>
                    <li class="dropdown position-static mb-0"><a class="dropdown-item py-2 border-bottom"
                        href="home-fashion-store-v2.html"><span class="d-block text-heading">Fashion Store
                          v.2</span><small class="d-block text-muted">Slider + Featured categories</small></a>
                      <div class="dropdown-menu h-100 animation-none mt-0 p-3"><a class="d-block"
                          href="home-fashion-store-v2.html" style="width: 250px;"><img src="img/home/preview/th02.jpg"
                            alt="Fashion Store v.2"></a></div>
                    </li>
                    <li class="dropdown position-static mb-0"><a class="dropdown-item py-2"
                        href="home-single-store.html"><span class="d-block text-heading">Single Product
                          Store</span><small class="d-block text-muted">Single product / mono brand</small></a>
                      <div class="dropdown-menu h-100 animation-none mt-0 p-3"><a class="d-block"
                          href="home-single-store.html" style="width: 250px;"><img src="img/home/preview/th05.jpg"
                            alt="Single Product / Brand Store"></a></div>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#"
                    data-bs-toggle="dropdown">Shop</a>
                  <div class="dropdown-menu p-0">
                    <div class="d-flex flex-wrap flex-sm-nowrap px-2">
                      <div class="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3">
                        <div class="widget widget-links mb-4">
                          <h6 class="fs-base mb-3">Shop layouts</h6>
                          <ul class="widget-list">
                            <li class="widget-list-item"><a class="widget-list-link" href="shop-grid-ls.html">Shop Grid
                                - Left Sidebar</a></li>
                            <li class="widget-list-item"><a class="widget-list-link" href="shop-grid-rs.html">Shop Grid
                                - Right Sidebar</a></li>
                            <li class="widget-list-item"><a class="widget-list-link" href="shop-grid-ft.html">Shop Grid
                                - Filters on Top</a></li>
                            <li class="widget-list-item"><a class="widget-list-link" href="shop-list-ls.html">Shop List
                                - Left Sidebar</a></li>
                            <li class="widget-list-item"><a class="widget-list-link" href="shop-list-rs.html">Shop List
                                - Right Sidebar</a></li>
                            <li class="widget-list-item"><a class="widget-list-link" href="shop-list-ft.html">Shop List
                                - Filters on Top</a></li>
                          </ul>
                        </div>
                        <div class="widget widget-links mb-4">
                          <h6 class="fs-base mb-3">Marketplace</h6>
                          <ul class="widget-list">
                            <li class="widget-list-item"><a class="widget-list-link"
                                href="marketplace-category.html">Category Page</a></li>
                            <li class="widget-list-item"><a class="widget-list-link"
                                href="marketplace-single.html">Single Item Page</a></li>
                            <li class="widget-list-item"><a class="widget-list-link"
                                href="marketplace-vendor.html">Vendor Page</a></li>
                            <li class="widget-list-item"><a class="widget-list-link"
                                href="marketplace-cart.html">Cart</a></li>
                            <li class="widget-list-item"><a class="widget-list-link"
                                href="marketplace-checkout.html">Checkout</a></li>
                          </ul>
                        </div>
                        <div class="widget widget-links">
                          <h6 class="fs-base mb-3">Grocery store</h6>
                          <ul class="widget-list">
                            <li class="widget-list-item"><a class="widget-list-link" href="grocery-catalog.html">Product
                                Catalog</a></li>
                            <li class="widget-list-item"><a class="widget-list-link" href="grocery-single.html">Single
                                Product Page</a></li>
                            <li class="widget-list-item"><a class="widget-list-link"
                                href="grocery-checkout.html">Checkout</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3">
                        <div class="widget widget-links mb-4">
                          <h6 class="fs-base mb-3">Food Delivery</h6>
                          <ul class="widget-list">
                            <li class="widget-list-item"><a class="widget-list-link"
                                href="food-delivery-category.html">Category Page</a></li>
                            <li class="widget-list-item"><a class="widget-list-link"
                                href="food-delivery-single.html">Single Item (Restaurant)</a></li>
                            <li class="widget-list-item"><a class="widget-list-link" href="food-delivery-cart.html">Cart
                                (Your Order)</a></li>
                            <li class="widget-list-item"><a class="widget-list-link"
                                href="food-delivery-checkout.html">Checkout (Address &amp; Payment)</a></li>
                          </ul>
                        </div>
                        <div class="widget widget-links">
                          <h6 class="fs-base mb-3">NFT Marketplace<span class="badge bg-danger ms-1">NEW</span></h6>
                          <ul class="widget-list">
                            <li class="widget-list-item"><a class="widget-list-link" href="nft-catalog-v1.html">Catalog
                                v.1</a></li>
                            <li class="widget-list-item"><a class="widget-list-link" href="nft-catalog-v2.html">Catalog
                                v.2</a></li>
                            <li class="widget-list-item"><a class="widget-list-link"
                                href="nft-single-auction-live.html">Single Item - Auction Live</a></li>
                            <li class="widget-list-item"><a class="widget-list-link"
                                href="nft-single-auction-ended.html">Single Item - Auction Ended</a></li>
                            <li class="widget-list-item"><a class="widget-list-link" href="nft-single-buy.html">Single
                                Item - Buy Now</a></li>
                            <li class="widget-list-item"><a class="widget-list-link" href="nft-vendor.html">Vendor
                                Page</a></li>
                            <li class="widget-list-item"><a class="widget-list-link"
                                href="nft-connect-wallet.html">Connect Wallet</a></li>
                            <li class="widget-list-item"><a class="widget-list-link" href="nft-create-item.html">Create
                                New Item</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="mega-dropdown-column pt-1 pt-lg-4 px-2 px-lg-3">
                        <div class="widget widget-links mb-4">
                          <h6 class="fs-base mb-3">Shop pages</h6>
                          <ul class="widget-list">
                            <li class="widget-list-item"><a class="widget-list-link" href="shop-categories.html">Shop
                                Categories</a></li>
                            <li class="widget-list-item"><a class="widget-list-link" href="shop-single-v1.html">Product
                                Page v.1</a></li>
                            <li class="widget-list-item"><a class="widget-list-link" href="shop-single-v2.html">Product
                                Page v.2</a></li>
                            <li class="widget-list-item"><a class="widget-list-link" href="shop-cart.html">Cart</a></li>
                            <li class="widget-list-item"><a class="widget-list-link"
                                href="checkout-details.html">Checkout - Details</a></li>
                            <li class="widget-list-item"><a class="widget-list-link"
                                href="checkout-shipping.html">Checkout - Shipping</a></li>
                            <li class="widget-list-item"><a class="widget-list-link"
                                href="checkout-payment.html">Checkout - Payment</a></li>
                            <li class="widget-list-item"><a class="widget-list-link"
                                href="checkout-review.html">Checkout - Review</a></li>
                            <li class="widget-list-item"><a class="widget-list-link"
                                href="checkout-complete.html">Checkout - Complete</a></li>
                            <li class="widget-list-item"><a class="widget-list-link" href="order-tracking.html">Order
                                Tracking</a></li>
                            <li class="widget-list-item"><a class="widget-list-link" href="comparison.html">Product
                                Comparison</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown active"><a class="nav-link dropdown-toggle" href="#"
                    data-bs-toggle="dropdown" data-bs-auto-close="outside">Account</a>
                  <ul class="dropdown-menu">
                    <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#"
                        data-bs-toggle="dropdown">Shop User Account</a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="account-orders.html">Orders History</a></li>
                        <li><a class="dropdown-item" href="account-profile.html">Profile Settings</a></li>
                        <li><a class="dropdown-item" href="account-address.html">Account Addresses</a></li>
                        <li><a class="dropdown-item" href="account-payment.html">Payment Methods</a></li>
                        <li><a class="dropdown-item" href="account-wishlist.html">Wishlist</a></li>
                        <li><a class="dropdown-item" href="account-tickets.html">My Tickets</a></li>
                        <li><a class="dropdown-item" href="account-single-ticket.html">Single Ticket</a></li>
                      </ul>
                    </li>
                    <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#"
                        data-bs-toggle="dropdown">Vendor Dashboard</a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="dashboard-settings.html">Settings</a></li>
                        <li><a class="dropdown-item" href="dashboard-purchases.html">Purchases</a></li>
                        <li><a class="dropdown-item" href="dashboard-favorites.html">Favorites</a></li>
                        <li><a class="dropdown-item" href="dashboard-sales.html">Sales</a></li>
                        <li><a class="dropdown-item" href="dashboard-products.html">Products</a></li>
                        <li><a class="dropdown-item" href="dashboard-add-new-product.html">Add New Product</a></li>
                        <li><a class="dropdown-item" href="dashboard-payouts.html">Payouts</a></li>
                      </ul>
                    </li>
                    <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">NFT
                        Marketplace<span class="badge bg-danger ms-1">NEW</span></a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="nft-account-settings.html">Profile Settings</a></li>
                        <li><a class="dropdown-item" href="nft-account-payouts.html">Wallet &amp; Payouts</a></li>
                        <li><a class="dropdown-item" href="nft-account-my-items.html">My Items</a></li>
                        <li><a class="dropdown-item" href="nft-account-my-collections.html">My Collections</a></li>
                        <li><a class="dropdown-item" href="nft-account-favorites.html">Favorites</a></li>
                        <li><a class="dropdown-item" href="nft-account-notifications.html">Notifications</a></li>
                      </ul>
                    </li>
                    <li><a class="dropdown-item" href="account-signin.html">Sign In / Sign Up</a></li>
                    <li><a class="dropdown-item" href="account-password-recovery.html">Password Recovery</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                    data-bs-auto-close="outside">Pages</a>
                  <ul class="dropdown-menu">
                    <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#"
                        data-bs-toggle="dropdown">Navbar Variants</a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="navbar-1-level-light.html">1 Level Light</a></li>
                        <li><a class="dropdown-item" href="navbar-1-level-dark.html">1 Level Dark</a></li>
                        <li><a class="dropdown-item" href="navbar-2-level-light.html">2 Level Light</a></li>
                        <li><a class="dropdown-item" href="navbar-2-level-dark.html">2 Level Dark</a></li>
                        <li><a class="dropdown-item" href="navbar-3-level-light.html">3 Level Light</a></li>
                        <li><a class="dropdown-item" href="navbar-3-level-dark.html">3 Level Dark</a></li>
                        <li><a class="dropdown-item" href="home-electronics-store.html">Electronics Store</a></li>
                        <li><a class="dropdown-item" href="home-marketplace.html">Marketplace</a></li>
                        <li><a class="dropdown-item" href="home-grocery-store.html">Side Menu (Grocery)</a></li>
                      </ul>
                    </li>
                    <li class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="about.html">About Us</a></li>
                    <li><a class="dropdown-item" href="contacts.html">Contacts</a></li>
                    <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#"
                        data-bs-toggle="dropdown">Help Center</a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="help-topics.html">Help Topics</a></li>
                        <li><a class="dropdown-item" href="help-single-topic.html">Single Topic</a></li>
                        <li><a class="dropdown-item" href="help-submit-request.html">Submit a Request</a></li>
                      </ul>
                    </li>
                    <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">404
                        Not Found</a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="404-simple.html">404 - Simple Text</a></li>
                        <li><a class="dropdown-item" href="404-illustration.html">404 - Illustration</a></li>
                      </ul>
                    </li>
                    <li class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="sticky-footer.html">Sticky Footer Demo</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                    data-bs-auto-close="outside">Blog</a>
                  <ul class="dropdown-menu">
                    <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#"
                        data-bs-toggle="dropdown">Blog List Layouts</a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="blog-list-sidebar.html">List with Sidebar</a></li>
                        <li><a class="dropdown-item" href="blog-list.html">List no Sidebar</a></li>
                      </ul>
                    </li>
                    <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#"
                        data-bs-toggle="dropdown">Blog Grid Layouts</a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="blog-grid-sidebar.html">Grid with Sidebar</a></li>
                        <li><a class="dropdown-item" href="blog-grid.html">Grid no Sidebar</a></li>
                      </ul>
                    </li>
                    <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#"
                        data-bs-toggle="dropdown">Single Post Layouts</a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="blog-single-sidebar.html">Article with Sidebar</a></li>
                        <li><a class="dropdown-item" href="blog-single.html">Article no Sidebar</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#"
                    data-bs-toggle="dropdown">Docs / Components</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="docs/dev-setup.html">
                        <div class="d-flex">
                          <div class="lead text-muted pt-1"><i class="ci-book"></i></div>
                          <div class="ms-2"><span class="d-block text-heading">Documentation</span><small
                              class="d-block text-muted">Kick-start customization</small></div>
                        </div>
                      </a></li>
                    <li class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="components/typography.html">
                        <div class="d-flex">
                          <div class="lead text-muted pt-1"><i class="ci-server"></i></div>
                          <div class="ms-2"><span class="d-block text-heading">Components<span
                                class="badge bg-info ms-2">40+</span></span><small class="d-block text-muted">Faster
                              page building</small></div>
                        </div>
                      </a></li>
                    <li class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="docs/changelog.html">
                        <div class="d-flex">
                          <div class="lead text-muted pt-1"><i class="ci-edit"></i></div>
                          <div class="ms-2"><span class="d-block text-heading">Changelog<span
                                class="badge bg-success ms-2">v2.4.0</span></span><small
                              class="d-block text-muted">Regular updates</small></div>
                        </div>
                      </a></li>
                    <li class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="mailto:support@createx.studio">
                        <div class="d-flex">
                          <div class="lead text-muted pt-1"><i class="ci-help"></i></div>
                          <div class="ms-2"><span class="d-block text-heading">Support</span><small
                              class="d-block text-muted">support@createx.studio</small></div>
                        </div>
                      </a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Page Title-->
    <div class="page-title-overlap bg-dark pt-4">
      <div class="container d-lg-flex justify-content-between py-2 py-lg-3">
        <div class="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
              <li class="breadcrumb-item"><a class="text-nowrap" href="index.html"><i class="ci-home"></i>Home</a></li>
              <li class="breadcrumb-item text-nowrap"><a href="#">Account</a>
              </li>
              <li class="breadcrumb-item text-nowrap active" aria-current="page">Profile info</li>
            </ol>
          </nav>
        </div>
        <div class="order-lg-1 pe-lg-4 text-center text-lg-start">
          <h1 class="h3 text-light mb-0">Profile info</h1>
        </div>
      </div>
    </div>
    <div class="container pb-5 mb-2 mb-md-4">
      <div class="row">
        <!-- Sidebar-->
        <aside class="col-lg-4 pt-4 pt-lg-0 pe-xl-5">
          <div class="bg-white rounded-3 shadow-lg pt-1 mb-5 mb-lg-0">
            <div class="d-md-flex justify-content-between align-items-center text-center text-md-start p-4">
              <div class="d-md-flex align-items-center">
                <div class="img-thumbnail rounded-circle position-relative flex-shrink-0 mx-auto mb-2 mx-md-0 mb-md-0"
                  style="width: 6.375rem;"><span class="badge bg-warning position-absolute end-0 mt-n2"
                    data-bs-toggle="tooltip" title="" data-bs-original-title="Reward points">384</span><img
                    class="rounded-circle" src="img/shop/account/avatar.jpg" alt="Susan Gardner"></div>
                <div class="ps-md-3">
                  <h3 class="fs-base mb-0">Susan Gardner</h3><span
                    class="text-accent fs-sm">s.gardner@example.com</span>
                </div>
              </div><a class="btn btn-primary d-lg-none mb-2 mt-3 mt-md-0" href="#account-menu"
                data-bs-toggle="collapse" aria-expanded="false"><i class="ci-menu me-2"></i>Account menu</a>
            </div>
            <div class="d-lg-block collapse" id="account-menu">
              <div class="bg-secondary px-4 py-3">
                <h3 class="fs-sm mb-0 text-muted">Dashboard</h3>
              </div>
              <ul class="list-unstyled mb-0">
                <li class="border-bottom mb-0"><a class="nav-link-style d-flex align-items-center px-4 py-3"
                    href="account-orders.html"><i class="ci-bag opacity-60 me-2"></i>Orders<span
                      class="fs-sm text-muted ms-auto">1</span></a></li>
                <li class="border-bottom mb-0"><a class="nav-link-style d-flex align-items-center px-4 py-3"
                    href="account-wishlist.html"><i class="ci-heart opacity-60 me-2"></i>Wishlist<span
                      class="fs-sm text-muted ms-auto">3</span></a></li>
                <li class="mb-0"><a class="nav-link-style d-flex align-items-center px-4 py-3"
                    href="account-tickets.html"><i class="ci-help opacity-60 me-2"></i>Support tickets<span
                      class="fs-sm text-muted ms-auto">1</span></a></li>
              </ul>
              <div class="bg-secondary px-4 py-3">
                <h3 class="fs-sm mb-0 text-muted">Account settings</h3>
              </div>
              <ul class="list-unstyled mb-0">
                <li class="border-bottom mb-0"><a class="nav-link-style d-flex align-items-center px-4 py-3 active"
                    href="account-profile.html"><i class="ci-user opacity-60 me-2"></i>Profile info</a></li>
                <li class="border-bottom mb-0"><a class="nav-link-style d-flex align-items-center px-4 py-3"
                    href="account-address.html"><i class="ci-location opacity-60 me-2"></i>Addresses</a></li>
                <li class="mb-0"><a class="nav-link-style d-flex align-items-center px-4 py-3"
                    href="account-payment.html"><i class="ci-card opacity-60 me-2"></i>Payment methods</a></li>
                <li class="d-lg-none border-top mb-0"><a class="nav-link-style d-flex align-items-center px-4 py-3"
                    href="account-signin.html"><i class="ci-sign-out opacity-60 me-2"></i>Sign out</a></li>
              </ul>
            </div>
          </div>
        </aside>
        <!-- Content  -->
        <section class="col-lg-8">
          <!-- Toolbar-->
          <div class="d-none d-lg-flex justify-content-between align-items-center pt-lg-3 pb-4 pb-lg-5 mb-lg-3">
            <h6 class="fs-base text-light mb-0">Update you profile details below:</h6><a class="btn btn-primary btn-sm"
              href="account-signin.html"><i class="ci-sign-out me-2"></i>Sign out</a>
          </div>
          <!-- Profile form-->
          <form>
            <div class="bg-secondary rounded-3 p-4 mb-4">
              <div class="d-flex align-items-center"><img class="rounded" src="img/shop/account/avatar.jpg" width="90"
                  alt="Susan Gardner">
                <div class="ps-3">
                  <button class="btn btn-light btn-shadow btn-sm mb-2" type="button"><i
                      class="ci-loading me-2"></i>Change avatar</button>
                  <div class="p mb-0 fs-ms text-muted">Upload JPG, GIF or PNG image. 300 x 300 required.</div>
                </div>
              </div>
            </div>
            <div class="row gx-4 gy-3">
              <div class="col-sm-6">
                <label class="form-label" for="account-fn">First Name</label>
                <input class="form-control" type="text" id="account-fn" value="Susan">
              </div>
              <div class="col-sm-6">
                <label class="form-label" for="account-ln">Last Name</label>
                <input class="form-control" type="text" id="account-ln" value="Gardner">
              </div>
              <div class="col-sm-6">
                <label class="form-label" for="account-email">Email Address</label>
                <input class="form-control" type="email" id="account-email" value="s.gardner@example.com" disabled="">
              </div>
              <div class="col-sm-6">
                <label class="form-label" for="account-phone">Phone Number</label>
                <input class="form-control" type="text" id="account-phone" value="+7 (805) 348 95 72" required="">
              </div>
              <div class="col-sm-6">
                <label class="form-label" for="account-pass">New Password</label>
                <div class="password-toggle">
                  <input class="form-control" type="password" id="account-pass">
                  <label class="password-toggle-btn" aria-label="Show/hide password">
                    <input class="password-toggle-check" type="checkbox"><span class="password-toggle-indicator"></span>
                  </label>
                </div>
              </div>
              <div class="col-sm-6">
                <label class="form-label" for="account-confirm-pass">Confirm Password</label>
                <div class="password-toggle">
                  <input class="form-control" type="password" id="account-confirm-pass">
                  <label class="password-toggle-btn" aria-label="Show/hide password">
                    <input class="password-toggle-check" type="checkbox"><span class="password-toggle-indicator"></span>
                  </label>
                </div>
              </div>
              <div class="col-12">
                <hr class="mt-2 mb-3">
                <div class="d-flex flex-wrap justify-content-between align-items-center">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="subscribe_me" checked="">
                    <label class="form-check-label" for="subscribe_me">Subscribe me to Newsletter</label>
                  </div>
                  <button class="btn btn-primary mt-3 mt-sm-0" type="button">Update profile</button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
// import apiClient from '@/services/ApiService';

export default {
  data() {
    return {
      searchQuery: '',
      users: [],
    };
  },
  methods: {

  },
};
</script>
