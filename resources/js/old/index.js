import "select2";
import tippy from "tippy.js";

require("../bootstrap");
require("./carousel/carousel");
require("../common/ymaps")
require("../common/counter");
require("../chunk/carousel");
require("../common/form");
require("../chunk/disclaimer");
tippy(".icon__question", {
    arrow: true,
    placement: "bottom"
});



function showcaseScroll() {
    var showcase_object = $(".showcase__cars");
    if (showcase_object.length) {
        var showcase = showcase_object.position().top;
        var position = $(this).scrollTop() + window.innerHeight - 300;
        if (position > showcase) {
            $(".showcase__item").addClass("animated");
            animatedCounter();
            window.removeEventListener("scroll", showcaseScroll);
        }
    } else {
        window.removeEventListener("scroll", showcaseScroll);
    }


}

/**
 * Появление а/м при скролле
 */
window.addEventListener("scroll", showcaseScroll);

/**
 * Анимация счётчика
 * @returns {undefined}
 */
function animatedCounter() {
    $(".animated .item__head_in_stock").each(function () {
        $(this).prop("Counter", 0).animate({
            Counter: $(this).text()
        }, {
            duration: 3500,
            easing: "swing",
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
}

$(document).ready(function () {
    $("select:not([class*='comagic']").select2({
        minimumResultsForSearch: -1
    });

    $(".audi__select").on("select2:select", function () {
        var href = $(this).val();
        var loc = location.protocol + "//" + location.hostname + href;
        location.href = loc;
    });
});



$("[data-additional]").on("click", function () {
    var add = $(this).data("additional");
    $("#callback [name=additional]").val(add);
});




