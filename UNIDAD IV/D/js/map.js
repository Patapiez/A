function initialize() {
      var marcadores = [
        ['CENTRO', 19.5335984, -99.1870066],
        ['ORIENTE', 19.536216563314966, -99.11316904840464],
      ];
      var map = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 17,
        center: new google.maps.LatLng(19.5335984, -99.1870066),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      var infowindow = new google.maps.InfoWindow();
      var marker, i;
      for (i = 0; i < marcadores.length; i++) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(marcadores[i][1], marcadores[i][2]),
          map: map,
         icon:'img/instituto/ubicacion/ittla.png',
        animation: google.maps.Animation.BOUNCE
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(marcadores[i][0]);
            infowindow.open(map, marker);
          }
        })(marker, i));
      }
    }
    google.maps.event.addDomListener(window, 'load', initialize);