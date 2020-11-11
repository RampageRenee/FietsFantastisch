

/*----------------------------------------Contact----------------------------------------------------------*/

var bMapSleutel = "Ao4NiMukSnNPQLargdtRVYiiHxyulxPzCGCxSF7CJWNO7BkFipffBSgPFvwbp68C";
var map;
function GetMap() {

    var bikerHfd = new Microsoft.Maps.Location(25.689866, 32.637105)

    map = new Microsoft.Maps.Map('#myMap', {
        //credentials: 'Your Bing Maps Key',
        center: bikerHfd,
        mapTypeId: Microsoft.Maps.MapTypeId.canvasLight,
        zoom: 12
    });

    //Create an infobox at the center of the map but don't show it.
    var infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
        visible: false
    });

    //Assign the infobox to a map instance.
    infobox.setMap(map);


    var pin = new Microsoft.Maps.Pushpin(bikerHfd, {
        title: 'Biker Hoofd Locatie',
        subTitle: 'City Center',

    });
    pin.metadata = {
        title: 'Biker Hoofd Locatie',
        description: 'El Sina Street 22, 85951 Luxor'
    };

    //Add a click event handler to the pushpin.
    Microsoft.Maps.Events.addHandler(pin, 'click', pushpinClicked);
    //Add the pushpin to the map
    map.entities.push(pin);

    function pushpinClicked(e) {
        //Make sure the infobox has metadata to display.
        if (e.target.metadata) {
            //Set the infobox options with the metadata of the pushpin.
            infobox.setOptions({
                location: e.target.getLocation(),
                title: e.target.metadata.title,
                description: e.target.metadata.description,
                visible: true
            });
        }
    }
}
