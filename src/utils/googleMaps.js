export const initGoogleMaps = () => {
  const lat = 48.827487;
  const long = 2.260838;

  const centerLong = long - 0.0015;

  const myLatlng = new google.maps.LatLng(lat, long);
  const centerPosition = new google.maps.LatLng(lat, centerLong);

  const mapOptions = {
    zoom: 17,
    center: centerPosition,
    styles: [{
      "featureType": "water",
      "stylers": [{
        "saturation": 43
      }, {
        "lightness": -11
      }, {
        "hue": "#0088ff"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [{
        "hue": "#ff0000"
      }, {
        "saturation": -100
      }, {
        "lightness": 99
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#808080"
      }, {
        "lightness": 54
      }]
    }, {
      "featureType": "landscape.man_made",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#ece2d9"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#ccdca1"
      }]
    }, {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#767676"
      }]
    }, {
      "featureType": "road",
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#ffffff"
      }]
    }, {
      "featureType": "poi",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "landscape.natural",
      "elementType": "geometry.fill",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#b8cb93"
      }]
    }, {
      "featureType": "poi.park",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "poi.sports_complex",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "poi.medical",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "poi.business",
      "stylers": [{
        "visibility": "simplified"
      }]
    }],
    scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
  };
  const map = new google.maps.Map(document.getElementById("contactUs2Map"), mapOptions);

  const marker = new google.maps.Marker({
    position: myLatlng,
    title: "Melting Sports Consulting"
  });

  marker.setMap(map);
}
