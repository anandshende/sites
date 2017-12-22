$(document).ready(function () {

    $('#tile1 .settings').click(function () {

        $('#tile1').addClass('animate');
        $('#tile1 div.settings-form').css('display', 'block').delay('40').animate({ 'opacity': 1 });

        setTimeout(function () {
            $('#tile1 form div').css('display', 'block').animate({ 'opacity': 1, 'top': 0 }, 200);
        }, 40);

        setTimeout(function () {
            $('#tile1 form button').css('display', 'block').animate({ 'opacity': 1, 'top': 0 }, 200);
            $('#tile1 .cx, #tile1 .cy').addClass('s1');
            setTimeout(function () { $('#tile1 .cx, #tile1 .cy').addClass('s2'); }, 100);
            setTimeout(function () { $('#tile1 .cx, #tile1 .cy').addClass('s3'); }, 200);
        }, 100);

    });


    $('#tile1 .close').click(function () {

        $('#tile1 .cx, #tile1 .cy').removeClass('s1 s2 s3');

        $('#tile1 form button').animate({ 'opacity': 0, 'top': -20 }, 120, function () { $(this).css('display', 'none') });
        setTimeout(function () {
            $('#tile1 form div').animate({ 'opacity': 0, 'top': -20 }, 120, function () {
                $(this).css('display', 'none')
            });
            $('#tile1 div.settings-form').animate({ 'opacity': 0 }, 120, function () { $(this).hide(); });

            $('#tile1').removeClass('animate');
        }, 50);

    });
    var flipCard = $("#make-3D .tile");

    $("#make-3D .settings").click(function () {

        $(flipCard).addClass('flip-10');
        setTimeout(function () {
            $(flipCard).removeClass('flip-10').addClass('flip90');
        }, 50);

        setTimeout(function () {
            $(flipCard).removeClass('flip90').addClass('flip190');
            $('#front').hide(); $('#back').show();
            setTimeout(function () {
                $(flipCard).removeClass('flip190').addClass('flip180');
                $('#back .cx, #back .cy').addClass('s1');
                setTimeout(function () { $('#back .cx, #back .cy').addClass('s2'); }, 80);
                setTimeout(function () { $('#back .cx, #back .cy').addClass('s3'); }, 150);
                setTimeout(function () {
                    $(flipCard).css('transition', '100ms ease-out');
                }, 100);
            }, 100);
        }, 150);
    });

    $('#back .close').click(function () {

        $('#back .cx, #back .cy').removeClass('s1 s2 s3');
        $(flipCard).removeClass('flip180').addClass('flip190');

        setTimeout(function () {
            $(flipCard).removeClass('flip190').addClass('flip90');
        }, 50);

        setTimeout(function () {
            $('#front').show(); $('#back').hide();
            $(flipCard).removeClass('flip90').addClass('flip-10');

            setTimeout(function () {
                $(flipCard).removeClass('flip-10').css('transition', '100ms ease-out');
            }, 100);
        }, 150);

    });

    $('button').click(function () { return false; });

});