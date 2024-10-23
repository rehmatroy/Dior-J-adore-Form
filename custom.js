$(document).ready(function () {

    $('.color.color-1').click(function (e) {
        e.preventDefault();
        $('.colors .color').removeClass('active');
        $('.colors .color.color-1').addClass('active');

        $('.bxslider li.active').removeClass('active');
        $('.phone.graphite').addClass('active');


    });

    $('.color.color-2').click(function (e) {
        e.preventDefault();
        $('.colors .color').removeClass('active');
        $('.colors .color.color-2').addClass('active');

        $('.bxslider li.active').removeClass('active');
        $('.phone.silver').addClass('active');


    });

    $('.color.color-3').click(function (e) {
        e.preventDefault();
        $('.colors .color').removeClass('active');
        $('.colors .color.color-3').addClass('active');

        $('.bxslider li.active').removeClass('active');
        $('.phone.gold').addClass('active');


    });

    $('.color.color-4').click(function (e) {
        e.preventDefault();
        $('.colors .color').removeClass('active');
        $('.colors .color.color-4').addClass('active');

        $('.bxslider li.active').removeClass('active');
        $('.phone.blue').addClass('active');


    });

    $('.color.color-5').click(function (e) {
        e.preventDefault();
        $('.colors .color').removeClass('active');
        $('.colors .color.color-5').addClass('active');

        $('.bxslider li.active').removeClass('active');
        $('.phone.gold').addClass('active');


    });

});


function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        //display.innerHTML = "<div class='tim-div'><span class='spn1'>"+ minutes +"</span><span class='spn2'>Minutes</span></div><div class='tim-div'><span class='spn1'>"+ seconds +"</span><span class='spn2'>Seconds</span></div>";
        display.innerHTML = "<span class='con-time-block'>&nbsp;" + minutes + "&nbsp;</span>:<span class='con-time-block'>&nbsp;" + seconds + "</span>";
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function() {
    var fiveMinutes = 30 * 13, display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};