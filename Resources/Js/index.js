// bar navigation
$(document).ready(() => {
    $('.close-user').click(() => {
        $('.bx-user').fadeOut(100)
    })
    $('.img-circle').click(() => {
        $('.bx-user').fadeIn(400)
    })

    $('.bar-nav').click(() => {
        $('.bar-nav').hide();    
        $('.ul-mobile').animate({'left': 0 }, 1000)
    })

    $('.close-nav').click(() => { 
        $('.ul-mobile').animate({'left': -100 + "%"}, 1000)
        $('.bar-nav').show();  
    })
})

// slide hot story

var objSlideHot = {
    slidesPerView: 6,
    spaceBetween: 10,
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


if(window.innerWidth <= 1024 && window.innerWidth > 568) {
    objSlideHot.slidesPerView = 5;
}else if(window.innerWidth <= 568 && window.innerWidth >= 360) {
    objSlideHot.slidesPerView = 2;
    objSlideHot.spaceBetween = 20;
}

var swiperHot = new Swiper('.slide-hot', objSlideHot);
