/**
 * Audi Сервис
 */
require("../bootstrap");
require("../chunk/carousel");
require("../chunk/disclaimer");
require("../common/ymaps");
require("../common/form");
    //Делаем фиксированное меню
var $afterblock = $("#special-offers");
if ($afterblock.length) {
    var $afterblock_position = $afterblock.offset().top - 50;
    $(window).scroll(function () {
        if ($(window).scrollTop() > $afterblock_position) {
            $('.top-menu').addClass('top-menu__sticky');
            $('#scroll-top').fadeIn(700);
        } else {
            $('.top-menu').removeClass('top-menu__sticky');
            $('#scroll-top').fadeOut(700);
        }
    });
}


/*Переход по якорю*/
function GoToLink(e) {
    e.preventDefault();
    var mylink = $(this).attr('href'); //значение ссылки
    var headerheight = $(".top-menu").outerHeight(); //вычисляем высоту fixed меню
    var positionblock = $(mylink).offset().top - headerheight; //вычисляем позицию блока и вычитаем высоту меню
    $('html, body').animate({scrollTop: positionblock}, 1100);
}

$(".menu__link").on("click", GoToLink);

//Активный пункт меню при прокрутке
var links = $('[data-link]');
var sections = $('[data-section]');
var currentSection = null; //активная секция

$(window).scroll(function () {
    sections.each(function (index, SectionElement) { //проверяем каждую секцию
        var foundItem = $(SectionElement).offset().top + ($(SectionElement).outerHeight() / 2) > $(window).scrollTop();      //true, если верхняя точка блока + высота/2 больше, чем текущий скролл
        if (foundItem) {
            currentSection = $(SectionElement).data('section');
            setLinkHover(currentSection);
            return false; //если условие выполнено, то выходим из цикла
        }
    });

});

function setLinkHover(currentSection) {
    $('.menu__link').removeClass('menu__link--active');
    links.each(function (index, LinkElement) {
        if ($(LinkElement).data('link') === currentSection) {
            $(LinkElement).addClass('menu__link--active');
            return false;
        }
    });
}
//End Активный пункт меню при прокрутке


$("[data-id_service_popup]").on("click", function () {
    var id_service = $(this).data("id_service_popup");
    $.get("/api/services/ts/" + id_service, null, function (resp) {
        if (resp.banner_modal != null && resp.banner_modal != 0) {
            $("#service-popup .modal-service__img").attr("src", resp.banner_modal)
        } else {
            $("#service-popup .modal-service__img").attr("src", "img/service-popup-01.jpg")
        }
        $("#service-popup .modal-service__title").text(resp.head);
        $("#service-popup .modal-service__additional").val(resp.head);
        $("#service-popup .modal-service__item__text").html(resp.text);
    }, "json");
});

try {
    var HeaderTop = $('.header_fixed').offset().top;
    $(window).scroll(function () {
        if ($(window).scrollTop() > HeaderTop) {
            $('.header_fixed').css({position: 'fixed', top: '0px', left: '0px', right: '0px', margin: '0 auto'});
        } else {
            $('.header_fixed').css({position: 'initial'});
        }
    });
} catch (e) {
    console.log(e);
}
