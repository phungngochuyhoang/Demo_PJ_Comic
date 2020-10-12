// bar navigation
$(document).ready(() => {
    $('.close-user').click(() => {
        $('.bx-user').fadeOut(100)
    })
    $('.img-circle').click(() => {
        $('.bx-user').fadeIn(400)
    })

    $('.bar-nav').click(() => {
        $('body').css({'overflow': 'hidden'})
        $('.bar-nav').hide();    
        $('.ul-mobile').animate({'left': 0 }, 1000)
    })

    $('.close-nav').click(() => { 
        $('body').css({'overflow': 'auto'})
        $('.ul-mobile').animate({'left': -100 + "%"}, 1000)
        $('.bar-nav').show();  
    })
})

// slide hot story

var objSlideHot = {
    slidesPerView: 6,
    spaceBetween: 8,
    freeMode: true,
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
}

var swiperHot = new Swiper('.slide-hot', objSlideHot);
