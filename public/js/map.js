$(document).ready(function (){

  // create a churchLatLong object containing the coordinate for the center of the map
  var churchLatLong = new google.maps.LatLng(53.659539, -1.482265);
  var qeLatLong = new google.maps.LatLng(53.688953, -1.502317);
  var centerLatLong = new google.maps.LatLng(53.683298, -1.505924);
  // prepare the map properties
  var options = {
    zoom: 12,
    center: centerLatLong,
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
