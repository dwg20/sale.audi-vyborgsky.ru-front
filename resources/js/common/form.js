/**
 * Регулярочка для ввода корректного номера
 */
$("input[type=tel]").on("keyup", function (e) {
    var input = $(this).val();
    var test_regex_1 = /^(\+|7|8[\d]{0,1}|\+7)$/;
    var test_regex_2 = /^(\+7|8)[\d]{1,20}$/;
    if (input.length > 2) {
        if (!test_regex_2.test(input)) {
            e.preventDefault();
            $(this).val(input.substring(0, input.length - 1));
            return false
        }
    } else {
        if (!test_regex_1.test(input)) {
            e.preventDefault();
            $(this).val(input.substring(0, input.length - 1));
            return false
        } else {
            $(this).val("+7");
        }
    }
    return true;
});

/**
 * Валидация корректного ввода номера телефона
 * @param phone_el
 * @returns {boolean}
 */
function validate_phone(phone_el) {
    var regex = /^(\+7|8)[\d]{10,10}$/;
    if (!regex.test(phone_el.val())) {
        if (!phone_el.next().hasClass("error")) {
            phone_el.after("<span class='error' style='color: red'>Неверно указан номер телефона, укажите в формате +79998887766</span>")
        }
        return false;
    }
    return true;
}

/**
 * Отправка форм
 */
$("form[method='POST']").on("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();
    var self = $(this);
    var phone = $(this).find("input[type=tel]");
    if (phone && validate_phone(phone)) {
        $.post("/send", $(this).serialize(), function (resp) {
            $.fancybox.close();
            if (resp.status == true) {
                $("#content .modal__text").text("Спасибо за заявку");
                $.fancybox.open({
                    src: "#content",
                    type: "inline"
                });
            }
            setTimeout(function () {
                $.fancybox.close();
            }, 5000);
        }, "json");
    }
    return false;
});

/**
 * Отправка данных в комеджик
 * @returns {undefined}
 */
function CoMagicSend(obj) {
    // Подготовка объекта отправки в комэджик
    var default_obj = {
        phone: '',
    };
    /**
     * Валидация
     * @type CoMagicSend.obj
     */
    for (var i in obj) {
        if (i in default_obj) {
            default_obj[i] = obj[i];
        }
        if (i == "additional") {
//                default_obj.message=obj[i];
        }
    }
    try {
        Comagic.sitePhoneCall(default_obj);
    } catch (e) {
        console.log(e);
    }
}
