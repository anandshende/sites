lazyload();

$(document).ready(function () {

    var offsetTop = $('#tabContainer')[0].offsetTop;
    window.onscroll = function () {
        if (window.pageYOffset >= offsetTop) {
            $('#tabContainer').addClass("sticky");
        } else {
            $('#tabContainer').removeClass("sticky");
        }
    };


});
