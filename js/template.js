$(document).ready(function ()
{
    DG.then(function() {
        var map,
            myPopUp;

        map = DG.map('map', {
            center: [54.98, 82.89],
            zoom: 13
        });

        DG.popup([54.98, 82.89])
            .setLatLng([54.98, 82.89])
            .setContent('Я открыт по умолчанию')
            .openOn(map);
    });
    
    $('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
 
        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
});