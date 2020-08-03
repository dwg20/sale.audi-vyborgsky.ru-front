import _createTimer from "./_createTimer";
import V_IE from "../../common/vie";
/**
 * Таймер
 * @returns {undefined}
 */
try {
    if (V_IE() !== 11) {
        initTimer();
    }
    if (V_IE() === 11) {
        $(".timer_container").css("display", "none");
    }
} catch (e) {

}

function initTimer() {
    $(window).on("scroll", function initTimerScroll() {
        try {
            var special_block = $(".special_block").position().top;
        } catch (e) {
            return;
        }
        var position = $(this).scrollTop() + window.innerHeight - 300;
        if (position > special_block) {
            var wrapper = document.querySelectorAll(".timer_wrapper");
            Array.from(wrapper).forEach(item => {
                _createTimer(item);
            });
            $(window).off("scroll", initTimerScroll);
        }
    });

}
