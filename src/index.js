/**
 * Animação Scroll
 */

var $target = $(".anime");
var animationclass = "anime-start";
offset = $(window).height()*3/4;
function animeScroll(){
    var documentTop = $(document).scrollTop();
    
    $target.each(function(){
        var itemTop = $(this).offset().top;
        if(documentTop > itemTop - 350){
            $(this).addClass(animationclass);
        }else{
            $(this).removeClass(animationclass);
        }
    })
}
animeScroll();

$(document).scroll(function(){
    animeScroll();
})
