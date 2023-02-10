
// let header =document.querySelector('#header')
// let open =document.querySelector('#header .open')
// let close =document.querySelector('#header #nav .close')
// 
// open.onclick = function() {
//     header.classList.add('on')
// }
// close.onclick = function() {
//     header.classList.remove('on')
// }

var deviceSize = 1024
function scrollOX(status){
    $('html').css({
        overflowY:status
    })
    return $('html').width()
}
// 토글디바이스툴바가 켜져 있으면 scX와 scO는 같은 값이 되므로
// 아래 if 문을 들어가지 않아서 deviceSize는 원래 값임
var scX = scrollOX('hidden')
var scO = scrollOX('scroll')
var scD = scX - scO
// 토글디바이스툴바가 꺼져 있으면 스크롤바가 생성되므로
// 스크롤바 넓이 17px을 deviceSize에서 빼야 함
if (scD>0) {
    deviceSize = deviceSize - scD
}
var ww = $(window).width()
if (ww>deviceSize ) {
    $('html').addClass('pc')
} else {
    $('html').addClass('mobile')
}



$(window).on('resize', function(){
    let ww = $(window).width()
    if (ww>deviceSize && !$('html').hasClass('pc') ) {
        $('html').addClass('pc').removeClass('mobile')
        location.reload()
    } else if (ww<=deviceSize && !$('html').hasClass('mobile')) {
        $('html').addClass('mobile').removeClass('pc')
        location.reload()
    }
})


$('#header .open').on('click', function() {
    $(this).parent().find('#nav').stop().fadeIn(400)
    $(this).parent().addClass('on')
})

$('#header .close').on('click', function() {
    $(this).parents('#nav').stop().fadeOut(400)
    $(this).parents('#header').removeClass('on')
})

$('#nav .depth1 > li > a').on('click', function() {
    $(this).parent().toggleClass('on')
    // $(this).parent().siblings().removeClass('on')
    $(this).parent().find('.depth2').stop().slideToggle()


    $(this).parent().siblings().find('.depth2').slideUp()
    $(this).parent().siblings().removeClass('on')
})


let count = 0;
let timer = setInterval(add, 25)

function add() {
    count++
    if(count>=100) {clearInterval(timer)
    $('.introAni').animate({
        left:'-100%'
    }, 500, function() {
        $(this),hide()
    })
    }

    $('.introAni div').eq(1).text(count+'%')
}




