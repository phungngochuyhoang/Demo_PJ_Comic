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



