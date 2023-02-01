
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
    $(this).parent().addClass('on')
})

$('#header .close').on('click', function() {
    $(this).parents('#header').removeClass('on')
})

$('#nav .depth1 > li > a').on('click', function() {
    $(this).parent().toggleClass('on')
    $(this).parent().siblings().removeClass('on')
    
})


