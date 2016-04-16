$(document).ready(function (){

  // create a churchLatLong object containing the coordinate for the center of the map
  var churchLatLong = new google.maps.churchLatLong(55.053203, 11.601563);
  var qeLatLong = new google.maps.churchLatLong(60.780619, 5.888672);

  // prepare the map properties
  var options = {
    zoom: 11,
    center: churchLatLong,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    navigationControl: true,
    mapTypeControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true
  };

  // initialize the map object
  var map = new google.maps.Map(document.getElementById('google_map'), options);

  // add Marker
  var church = new google.maps.Marker({
    position: churchLatLong, map: map
  });

  var reception = new google.maps.Marker({
    position: qeLatLong, map: map
  });

  // add listener for a click on the pin
  google.maps.event.addListener(church, 'click', function() {
    infowindow.open(map, church);
  });

  // add listener for a click on the pin
  google.maps.event.addListener(reception, 'click', function() {
    receptionWindow.open(map, reception);
  });

  // add information window
  var infowindow = new google.maps.InfoWindow({
    content:  '<div class="info"><strong>Ceremony - St Helen\'s Church</strong><br><br><p>Starts at 13:30</p></div>'
  });

  var receptionWindow = new google.maps.InfoWindow({
    content:  '<div class="info"><strong>Reception - QEGS</strong><br><br><p>From 16:00</p></div>'
  });
});
