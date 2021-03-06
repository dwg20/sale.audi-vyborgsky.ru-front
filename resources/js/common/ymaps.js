const ymaps = window.ymaps;
if (ymaps) {
    ymaps.ready(_ => {
        var myMap = new ymaps.Map("Ymaps", {
            center: [60.09, 30.25],
            zoom: 14
        });

        var audiObject = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [60.094090, 30.254202]
            }
        });
        myMap.geoObjects.add(audiObject);
        if (window.innerWidth < 800) {
            myMap.behaviors.disable('drag');
        }
    });
}
