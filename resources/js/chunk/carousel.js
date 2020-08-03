import owlCarousel from "owl.carousel";
/**
 * Инициализация карусели
 */
const owl = $(".carousel");
const owl2 = $(".carousel2");
owl.owlCarousel({
    loop: true,
    thumbs: false,
    // nav:true,
    // autoWidth:true,
    autoplay: true,
    autoplayTimeout: 240000,
    autoplayHoverPause: true,
    items: 1,
    lazyLoad: true,
    itemsDesktop: ["100%", 1],
    itemsDesktopSmall: ["100%", 1],
    itemsMobile: ["100%", 1],
    itemsTablet: ["100%", 1]
});
owl2.owlCarousel({
    loop: true,
    thumbs: false,
    nav: true,
    // autoWidth:true,
    autoplay: false,
    autoplayTimeout: 10000,
    autoplayHoverPause: false,
    items: 1,
    lazyLoad: true,
    itemsDesktop: ["100%", 1],
    itemsDesktopSmall: ["100%", 1],
    itemsMobile: ["100%", 1],
    itemsTablet: ["100%", 1],
    doots: true,
    navText: [, ]
});
