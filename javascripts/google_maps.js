// $(document).ready(function(){
    var init = function(){
        var myOptions = {
            zoom: 14,
            scrollwheel: false,
            streetViewControl: false,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP};
        var map = new google.maps.Map(document.getElementById("map"), myOptions);
            var pinkParksStyles = [
                {
                    featureType: "all",
                    stylers: [
                        { hue: "#123fff" },
                        { saturation: "-100" },
                        { lightness: "0" },

                    ]
                },
                {
                    featureType: "road",
                    stylers: [
                        { hue: "#123000" },
                        { saturation: "-100" }
                    ]
                }
            ];
    map.setOptions({styles: pinkParksStyles});
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode( { 'address': 'Івано-Франківськ, Січових Стрільців 34'}, function(results, status){
            if (status == google.maps.GeocoderStatus.OK){
                map.setCenter(results[0].geometry.location);
                var conf ={
                    map: map,
                    position: results[0].geometry.location};
                var marker = new google.maps.Marker(conf);
            }
        })
    };
    google.maps.event.addDomListener(window, 'load', init());
// });