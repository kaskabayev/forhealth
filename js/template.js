$(document).ready(function ()
{
    $('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
 
        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
    
    var itemsVisibleElement = 3;
    
    var total=0;
    var current=0;
    
    var itemNumber = $(".list-products>li").length;
    var visibleBlockWidth = $('.list-products').parent().width();
    var totalWidth = itemNumber / itemsVisibleElement * visibleBlockWidth; 
    var width = totalWidth / itemNumber * itemsVisibleElement;
    $('#slide-left').click(function()
    {
        if(current > 0){
            current--;
            total += width;
            $(".list-products").stop().animate({left:total+'px'});
        }
    });

    $('#slide-right').click(function() 
    {	
        if(current < itemNumber/itemsVisibleElement-1)
        {
            current++;
            total -= width;
            $(".list-products").stop().animate({left:total+'px'});
        }
    });
});