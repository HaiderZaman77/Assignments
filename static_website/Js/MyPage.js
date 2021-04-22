
function initMap() {
    var location = { lat: 32.1877, lng: 74.1945 };
    var location1 = {lat: 31.5732 , lng: 74.3079};
    var location2 = {lat: 31.5106, lng: 74.3445};
  var map = new google.maps.Map(document.getElementById("map"), {
    center:location,
    zoom: 8,
  });
  //Home Town Marker
  var marker = new google.maps.Marker({
      position: location,
      map: map,
      animation:google.maps.Animation.BOUNCE,
      icon: {
        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
      }
  });
  var infowindow = new google.maps.InfoWindow({
    content:"HomeTown"
  });
  
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

  //Studied
  var marker1 = new google.maps.Marker({
    position: location1,
    map: map,
    icon: {
        url: "http://maps.google.com/mapfiles/ms/icons/pink-dot.png"
      }
});
var infowindow1 = new google.maps.InfoWindow({
  content:"Studied<br><b>GCU Lahore</b>"
});

google.maps.event.addListener(marker1, 'click', function() {
  infowindow1.open(map,marker1);
});

  //Working Place
  var marker2 = new google.maps.Marker({
    position: location2,
    map: map,
    icon: {
        url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
      }
});
var infowindow2 = new google.maps.InfoWindow({
  content:"Working Place<br><b>Coeus Solutions</b>"
});

google.maps.event.addListener(marker2, 'click', function() {
  infowindow2.open(map,marker2);
});

}
