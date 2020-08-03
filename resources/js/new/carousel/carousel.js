import owlCarousel from "owl.carousel";
var banner_promo = $(".banner_carousel");
banner_promo.owlCarousel({
    loop: true,
    thumbs: false,
    // nav:true,
    // autoWidth:true,
    autoplay: true,
    autoplayTimeout: 15000,
    autoplayHoverPause: true,
    items: 1,
    lazyLoad: true,
    itemsDesktop: ["100%", 1],
    itemsDesktopSmall: ["100%", 1],
    itemsMobile: ["100%", 1],
    itemsTablet: ["100%", 1]
})



