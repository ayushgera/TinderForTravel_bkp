$(document).ready(function(){
  //$('.bxslider').bxSlider();
  
  	slider = $('.bxslider').bxSlider({
	pager:false,
	    minSlides: 1,
  maxSlides: 1,
  slideWidth: 250,
  slideMargin: 3
	});
	
	$('#slider-next').click(function(){
	  slider.goToNextSlide();
	  return false;
	});

	$('#slider-count').click(function(){
	  var count = slider.getSlideCount();
	  alert('Slide count: ' + count);
	  return false;
	});
  
});

/**
*	CHICAGO 41.8369, 87.6847
*	LAS VEGDAS 36.1215,115.1739
*   MIAMI 25.7753, 80.2089
*	NYC 40.7127, 74.0059
*	SAN FRANCISCO 37.7833, 122.4167
*/

function onSuccess(position) {
	/*var element = document.getElementById('geolocation');
	element.innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' +
	'Longitude: ' + position.coords.longitude + '<br />' +
	'<hr />' + element.innerHTML;*/
	//48.8584831,2.3502476
	//48.8584831,2.3502476
	//48.8582, 2.2945

	var lat=48.8582;//position.coords.latitude;
	var lang=2.2945;//position.coords.longitude;
	var myLatlng = new google.maps.LatLng(lat,lang);
	var mapOptions = {zoom: 7,center: myLatlng}
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var bounds = new google.maps.LatLngBounds();

	var marker1 = new google.maps.Marker({position: new google.maps.LatLng(41.8369, 87.6847),map: map});
	bounds.extend(new google.maps.LatLng(41.8369, 87.6847));

	var marker2 = new google.maps.Marker({position: new google.maps.LatLng(36.1215,115.1739),map: map});
	bounds.extend(new google.maps.LatLng(36.1215,115.1739));

	var marker3 = new google.maps.Marker({position: new google.maps.LatLng(25.7753, 80.2089),map: map});
	bounds.extend(new google.maps.LatLng(25.7753, 80.2089));

	var marker4 = new google.maps.Marker({position: new google.maps.LatLng(40.7127, 74.0059),map: map});
	bounds.extend(new google.maps.LatLng(40.7127, 74.0059));

 	var marker5 = new google.maps.Marker({position: new google.maps.LatLng(37.7833, 122.4167),map: map});
	bounds.extend(new google.maps.LatLng(37.7833, 122.4167));

 	map.fitBounds(bounds);

	map.setCenter(bounds.getCenter(), 
	                    map.getBoundsZoomLevel(bounds));
					
	google.maps.event.addListener(marker1, 'mousedown', function(){
		slider.goToSlide(0)	;
	});				
	google.maps.event.addListener(marker2, 'mousedown', function(){
		slider.goToSlide(1)	
	});					
	google.maps.event.addListener(marker3, 'mousedown', function(){
		slider.goToSlide(2)	
	});					
	google.maps.event.addListener(marker4, 'mousedown', function(){
		slider.goToSlide(3)	
	});					
	google.maps.event.addListener(marker5, 'mousedown', function(){
		slider.goToSlide(4)	
	});
}
function onError(error) {
	alert('code: ' + error.code + '\n' +
	'message: ' + error.message + '\n');
	}
//var watchID = navigator.geolocation.watchPosition(onSuccess, onError, {timeout: 10000, enableHighAccuracy: true});
google.maps.event.addDomListener(window, 'load', onSuccess);