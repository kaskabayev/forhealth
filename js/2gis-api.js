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
});