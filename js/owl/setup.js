/* owl */

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        320:{
            items:1
        },
        640:{
            items:2
        },
        960:{
            items:3
        },
        1280:{
            items:4
        }

    }
})