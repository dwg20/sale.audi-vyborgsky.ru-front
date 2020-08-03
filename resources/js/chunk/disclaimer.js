$(".footer__disclaimer--slider").css("display", "none"); //Инициализация
$(".footer__disclaimer--button").on("click", function (e) {
    var self = $(this);
    self.next(".footer__disclaimer--slider").toggle();
    window.requestAnimationFrame(_ => {
        self.toggleClass("close");
        if (self.hasClass("close")) {
            self.text("Развернуть")
        } else {
            self.text("Cвернуть")
        }
    });
});
