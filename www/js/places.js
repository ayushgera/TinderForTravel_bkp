/*$(document).ready(function(){
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
  
}); */




///////////////////////////////////////////////////////////////

function CustomMarker(latlng, map, args) {
	this.latlng = latlng;	
	this.args = args;	
	this.setMap(map);	
}

CustomMarker.prototype = new google.maps.OverlayView();

CustomMarker.prototype.draw = function() {
	
	var self = this;
	
	var div = this.div;
	
	if (!div) {
	
		div = this.div = document.createElement('div');
		
		div.className = 'marker';
		div.id = self.args.image;
		div.style.position = 'absolute';
		div.style.cursor = 'pointer';
		div.style.width = '40px';
		div.style.height = '40px';
		div.style.padding = '3px';
		div.style.backgroundColor = 'white';
		//div.style.background = 'blue';
		//div.style.backgroundImage= "url('las_vegas.jpg')";
		var elem = document.createElement("img");
		elem.src = "images/"+self.args.image;
		elem.setAttribute("height", "40px !important");
		elem.setAttribute("width", "40px !important");
		div.appendChild(elem);
		
		
		if (typeof(self.args.marker_id) !== 'undefined') {
			div.dataset.marker_id = self.args.marker_id;
		}
		
		

		
		
		google.maps.event.addDomListener(div, "click", function(event) {
			//alert('You clicked on a custom marker!' + div.id);	
			
			/*find image to load*/
			
			
			
			
			
			/*find image END*/
			jQuery('#element_to_pop_up').bPopup({
                    appendTo: 'form'
                    , zIndex: 2
                    , modalClose: false,
					content:'image',
					contentContainer:'.content',
					loadUrl:'images/'+div.id
                });			
			google.maps.event.trigger(self, "click");
		});
		
		var panes = this.getPanes();
		panes.overlayImage.appendChild(div);
	}
	
	var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
	
	if (point) {
		div.style.left = (point.x - 10) + 'px';
		div.style.top = (point.y - 20) + 'px';
	}
};

CustomMarker.prototype.remove = function() {
	if (this.div) {
		this.div.parentNode.removeChild(this.div);
		this.div = null;
	}	
};

CustomMarker.prototype.getPosition = function() {
	return this.latlng;	
};

///////////////////////////////////////////////////////////




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

	var marker1 = new CustomMarker(new google.maps.LatLng(41.8369, 87.6847), map,{image: 'Chicago.jpg'});
	//var marker1 = new google.maps.Marker({position: new google.maps.LatLng(41.8369, 87.6847),map: map});
	bounds.extend(new google.maps.LatLng(41.8369, 87.6847));

	var marker2 = new CustomMarker(new google.maps.LatLng(36.1215,115.1739), map,{image: 'las_vegas.jpg'});
	//var marker2 = new google.maps.Marker({position: new google.maps.LatLng(36.1215,115.1739),map: map});
	bounds.extend(new google.maps.LatLng(36.1215,115.1739));

	var marker3 = new CustomMarker(new google.maps.LatLng(25.7753, 80.2089), map,{image: 'Miami.jpg'});
	//var marker3 = new google.maps.Marker({position: new google.maps.LatLng(25.7753, 80.2089),map: map});
	bounds.extend(new google.maps.LatLng(25.7753, 80.2089));

	var marker4 = new CustomMarker(new google.maps.LatLng(40.7127, 74.0059), map,{image: 'NewYork.jpg'});
	//var marker4 = new google.maps.Marker({position: new google.maps.LatLng(40.7127, 74.0059),map: map});
	bounds.extend(new google.maps.LatLng(40.7127, 74.0059));

	var marker5 = new CustomMarker(new google.maps.LatLng(37.7833, 122.4167), map,{image: 'San_Francisco.jpg'});
 	//var marker5 = new google.maps.Marker({position: new google.maps.LatLng(37.7833, 122.4167),map: map});
	bounds.extend(new google.maps.LatLng(37.7833, 122.4167));

 	map.fitBounds(bounds);

	//map.setCenter(bounds.getCenter(), map.getBoundsZoomLevel(bounds));
	getZoomByBounds(map,bounds);			
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

/**
* Returns the zoom level at which the given rectangular region fits in the map view. 
* The zoom level is computed for the currently selected map type. 
* @param {google.maps.Map} map
* @param {google.maps.LatLngBounds} bounds 
* @return {Number} zoom level
**/

function MProjection() {
}
MProjection.prototype.fromLatLngToPoint = function(latlng) {
    var x = (latlng.lng() + 180) / 360 * 256;
    var y = ((1 - Math.log(Math.tan(latlng.lat() * Math.PI / 180) + 1 / Math.cos(latlng.lat() * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, 0)) * 256;
    return new google.maps.Point(x, y);
};

function getZoomByBounds( map, bounds ){
  var MAX_ZOOM =  map.getMapTypeId().maxZoom || 21 ;
  var MIN_ZOOM =  map.getMapTypeId().minZoom || 0 ;

	
	// Wait for idle map
	//google.maps.event.addListener(map, 'idle', function() {
	   // Get projection
	  // projection = overlay.getProjection();
	   
	     var ne= new MProjection().fromLatLngToPoint( bounds.getNorthEast() );
	  var sw= new MProjection().fromLatLngToPoint( bounds.getSouthWest() ); 

	  var worldCoordWidth = Math.abs(ne.x-sw.x);
	  var worldCoordHeight = Math.abs(ne.y-sw.y);

	  //Fit padding in pixels 
	  var FIT_PAD = 40;

	  for( var zoom = MAX_ZOOM; zoom >= MIN_ZOOM; --zoom ){ 
		  if( worldCoordWidth*(1<<zoom)+2*FIT_PAD < $(map.getDiv()).width() && 
			  worldCoordHeight*(1<<zoom)+2*FIT_PAD < $(map.getDiv()).height() )
			  return zoom;
	  }
	   
	//})

  return 0;
}

function onError(error) {
	alert('code: ' + error.code + '\n' +
	'message: ' + error.message + '\n');
	}
//var watchID = navigator.geolocation.watchPosition(onSuccess, onError, {timeout: 10000, enableHighAccuracy: true});
google.maps.event.addDomListener(window, 'load', onSuccess);


