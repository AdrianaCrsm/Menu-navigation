$(document).ready(function(event){
    resizeLeftMenuHeight();
$('.menu-item').click(function(event){
    $('.menu-item.selected').removeClass('selected');
    $(this).addClass('selected');
    var content=$(this).attr("data-content");
    $('.content').addClass('hidden');
    $('.content.'+ content).removeClass('hidden');
    $('.logos').addClass('hidden');
    $('.logos.'+ content).removeClass('hidden');
});
$('#orders').click(function(){
    $('.orders-content').removeClass('hidden');
    $(this).parent().addClass('hidden');
})
//overlay Product
// de ce avem aici 2 ready functions? este suficient sa folosim una
// ambele metode de declarare a statusului de ready sunt echivalente
$(function(){
    $('.product').click(function(){
        $('.overlay-img-wrapper').css({backgroundImage:"url(assets/images/product-1/" + $(this).data('img') + ")"});
        $('.overlay').fadeIn();
    })
    $('.bag-image').click(function(){
        $('.overlay-img-wrapper').css({backgroundImage:"url(assets/images/product-1/" + $(this).data('img') + ")"});
        $('.overlay').fadeIn();
    })
    $('.overlay-img-wrapper').click(function(event){
        event.stopPropagation();
    })
    $('.overlay').click(function(){
        $(this).fadeOut();
    })
});

});
// resize event
var resizeLeftMenuHeight = function(){
    let windowHeight = $(window).innerHeight -30;
    $('.menu-container').height(windowHeight+"px");
}
$(window).on('resize', resizeLeftMenuHeight);