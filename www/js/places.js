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

	var marker1 = new google.maps.Marker({position: myLatlng,map: map});
	//bounds.extend(marker1);

	var marker2 = new google.maps.Marker({position: new google.maps.LatLng(47.8584831,2.3),map: map});
	//bounds.extend(marker2);

	var marker3 = new google.maps.Marker({position: new google.maps.LatLng(48.89,2.39),map: map});
	//bounds.extend(marker3);

	var marker4 = new google.maps.Marker({position: new google.maps.LatLng(46.88,2.38),map: map});
	//bounds.extend(marker4);

	var marker5 = new google.maps.Marker({position: new google.maps.LatLng(48.83,2.3502476),map: map});
	//bounds.extend(marker5);

	//map.fitBounds(bounds);

	//map.setCenter(bounds.getCenter(), 
	 //                   map.getBoundsZoomLevel(bounds));
					
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