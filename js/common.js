
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

$('#header .open').on('click', function() {
    $(this).parent().find('#nav').stop().fadeIn(400)
    $(this).parent().addClass('on')
})

$('#header .close').on('click', function() {
    $(this).parents('#header').removeClass('on')
    $(this).parents('#nav').stop().fadeOut(400)
})

$('#nav .depth1 > li > a').on('click', function() {
    $(this).parent().toggleClass('on')
    // $(this).parent().siblings().removeClass('on')
    $(this).parent().find('.depth2').stop().slideToggle()
})







