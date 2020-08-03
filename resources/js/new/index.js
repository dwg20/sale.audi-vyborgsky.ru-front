require("../bootstrap");
require("../common/ymaps");
require("../chunk/carousel");
require("./carousel/carousel");
require("../common/counter");
require("../common/form");
require("../chunk/disclaimer");
require("../chunk/forIE/imageloader");
require("./showcase");

var HeaderTop = $('header').offset().top;
$(window).scroll(() => {
    if ($(window).scrollTop() > HeaderTop) {
        $('header').css({position: 'fixed', top: '0px', left: '0px', right: '0px', margin: '0 auto'});
    } else {
        $('header').css({position: 'static'});
    }
});
