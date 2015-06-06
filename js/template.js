$(document).ready(function ()
{
    var productPopupVisible = false;

    $('#send_message').click(function(){
        $('.wrap').css({'z-index':1515, 'height' : '100%'}).fadeIn(250);
        $('.popup_message').fadeIn(250);
    });
    
    $('#close_message, .wrap').click(function(){
        $('.popup_message').fadeOut(250,function(){
            if (productPopupVisible)
                $('.wrap').css({'z-index':1510, 'height' : $('.popup').height() + 2});
            else
                $('.wrap').fadeOut(250);
        });
    });

    
    $('.products').click(function(){
        productPopupVisible = true;
        $(".popup_wrapper").show();
        var height = $('.popup').height() + 2;
        $('.wrap').css({'z-index':1510, 'height':height}).fadeIn(250);
        $('html, body').css({
            'height': height,
            'overflow': 'hidden'
        });
        $(".popup").stop().animate({'z-index':1513, left:0});

    });
    
    $('.wrap, #close_popup').click(function(){
        $('.wrap').fadeOut(250);
        $(".popup").stop().animate({left:'-1500px'}, 500, function(){
            $(".popup_wrapper").hide();
            $('html, body').css({
                'height': 'auto',
                'overflow': 'auto'
            });
        });
    });
    
    $(window).scroll(function() {
    if ($(this).scrollTop() > 65){
        $('.menu').hide();
        $('.menu_sticky').slideDown(250);
      }
      else{
        $('.menu').show();
        $('.menu_sticky').stop().slideUp(250);
      }
    });
    
    
    var itemsVisibleElement = 3;
    
    var total=0;
    var current=0;
    var itemNumber = $("#suggested_items>li").length;
    var visibleBlockWidth = $('#suggested_items').parent().width();
    var totalWidth = itemNumber / itemsVisibleElement * visibleBlockWidth; 
    var width = totalWidth / itemNumber * itemsVisibleElement;

    $('.arrow_left').click(function()
        {	
            if(current > 0){
                current--;
                total += width;
                $("#suggested_items").stop().animate({left:total+'px'});
            }
        });

    $('.arrow_right').click(function() 
    {	
        if(current < itemNumber/itemsVisibleElement-1)
        {
            current++;
            total -= width;
            $("#suggested_items").stop().animate({left:total+'px'});
        }
    });
});