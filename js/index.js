$('.article1 .slide-group').slick({
    autoplay:true,
    autoplaySpeed:4000,
    dots:true,
    speed:500,
    pauseOnHover:false,
    prevArrow:'<button class="slick-prev slick-arrow"><span class="arrow"></span><span class="prev">PREV</span></button>',
    nextArrow:'<button class="slick-next slick-arrow"><span class="arrow"></span><span class="next">NEXT</span></button>',
    
})


$('.scroll').on('click', function() {
    let mouse = $('.notice').offset().top
    $('html').animate({scrollTop:mouse},500)
})