import V_IE from "./vie";

if (V_IE() > 11) {
    $(".cars_in_stock__count").each(function () {
        $(this).prop("Counter", 0).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: "swing",
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    $("text.time").each(function () {
        $(this).prop("Counter", 0).animate({
            Counter: $(this).text()
        }, {
            duration: 500,
            easing: "swing",
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
}
