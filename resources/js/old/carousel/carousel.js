import owlCarousel from "owl.carousel";
/**
 * Смена слайда
 */
var car_items = $(".special_block__carousel");
car_items.on("changed.owl.carousel", function (e) {
    $(".special_block__carousel-counter .owl-counter").html(++e.page.index + " / <span>" + e.page.count + "</span>");
});
$(".icon-counter").on("click", function (e) {
    if ($(this).hasClass("owl-next")) {
        car_items.trigger("next.owl.carousel");
    } else {
        car_items.trigger("prev.owl.carousel");
    }
});

var car_items = $(".special_block__carousel");
car_items.on("initialized.owl.carousel", function (e) {
    $(".special_block__carousel-counter .owl-counter").html("1 / <span>" + e.item.count + "</span>");
});




