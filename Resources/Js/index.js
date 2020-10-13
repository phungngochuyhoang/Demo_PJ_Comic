// bar navigation
$(document).ready(() => {
    $('.close-user').click(() => {
        $('.bx-user').fadeOut(100)
    })
    $('.img-circle').click(() => {
        $('.bx-user').fadeIn(400)
    })
    // -----------------------------------------
    $('.bar-nav').click(() => {
        $('body').css({'overflow': 'hidden'})
        $('.bar-nav').hide();    
        $('.ul-mobile').animate({'left': 0 }, 500)
    })

    $('.close-nav').click(() => { 
        $('body').css({'overflow': 'auto'})
        $('.ul-mobile').animate({'left': -100 + "%"}, 500)
        $('.bar-nav').show();  
    })
    // --------------------------------------------
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

if(window.innerWidth <= 768 && window.innerWidth >= 360) {
    objSlideHot.slidesPerView = 1;
}

function swiper(object) {
   return new Swiper('.slide-hot', object);
}

swiper(objSlideHot);


// handle length text 
var nameStory = Array.from(document.querySelectorAll('.n-story'));
var contentStory = Array.from(document.querySelectorAll('.c-story'));
const MAX_LEN_N = 17;
const MAX_LEN_C = 160;
var textN = "";
function nameLength(arr, max) {
    arr.forEach((item) => {
        if(!item.innerHTML.trim().length < max) {
           textN = item.innerHTML.trim().slice(0, max) + ' ...';
        }
        item.innerHTML = textN;
    })
}
nameLength(nameStory, MAX_LEN_N);
nameLength(contentStory, MAX_LEN_C);

// handle copy
var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function(e) {
    if(e.action === 'copy') {
        e.trigger.style.border = 1 + 'px solid green';
        e.trigger.style.background = 'green';
        e.trigger.childNodes.forEach(item => {
            if(item.tagName === "I") {
                item.style.color = 'white';
            }
            if(item.tagName === "SPAN") {
                item.innerHTML = 'copy';
                item.style.color = 'green'
                item.style.fontWeight = 'bold';
            }
        })
    }
    setTimeout(() => {
        e.trigger.setAttribute('style', '');
        e.trigger.childNodes.forEach(item => {
            if(item.tagName === "I") {
                item.setAttribute('style', '');
            }
            if(item.tagName === "SPAN") {
                item.innerHTML = e.text;
                item.setAttribute('style', '');
            }
        })
    }, 1500)
    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});