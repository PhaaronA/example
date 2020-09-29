// $(document).ready(function () {
//     $(".menu-nav").on("click", "a", function (event) {
//         event.preventDefault();
//         let id = $(this).attr('href'),
//             top = $(id).offset().top;
//         $('body,html').animate({ scrollTop: top }, 1500);
//     });
// });

$(document).scroll(() => {
    if ($(window).scrollTop() > 200) {
        $(".nav").addClass("container-scroll");
        // $(".nav-bar-inner").addClass("nav-bar-inner-scroll");
    } else {
        $(".nav").removeClass("container-scroll");
        // $(".nav-bar-inner").removeClass("nav-bar-inner-scroll");
    }
});

$(document).ready(function () {
    $('.menu__burger').click(function (event) {
        $('.nav-burger').toggleClass('visible');
        $('.menu__burger, .menu__burger__line').toggleClass('active');
        // $('#body').toggleClass('lock');
    })
})

$('.video-img__item').on('click', function () {
    let tabName = $(this).data('tab'),
        tab = $('.video-screen__item[data-tab="' + tabName + '"]');

    $('.video-img__item.border').removeClass('border');
    $(this).addClass('border');

    $('.video-screen__item.visible').removeClass('visible');
    tab.addClass('visible');
});

$(function () {
    $(".meet-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1000,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                },
            },
        ],
    });
});

$(function () {
    $(".reviews-slider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1000,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
});

$("body").on('click', '[href*="#"]', function (e) {
    let fixed_offset = 30;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1100);
    e.preventDefault();
});

enter.onclick = function () {
    let val = document.getElementById('password').value;
    let pass = [1, 2, 3];
    for (let i = 0; i < pass.length; i++) {
        if (pass[i] == val) {
            $('.unvisible').removeClass('unvisible');
            $('.input').addClass('unvisible');
        } else {
            $('.title_blue').addClass('visible');
        }
    }
};