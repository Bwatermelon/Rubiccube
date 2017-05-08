var comp_map, infoWindow;
function initMap() {
    comp_map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -27.497357, lng: 153.013249},
        zoom: 12
    });
    infoWindow = new google.maps.InfoWindow;
        
		// Try geolocation
        if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				var position = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};
				comp_map.setCenter(position);
			}, function() {
				handleLocationError(true, infoWindow, comp_map.getCenter());
			});
		} else {
        // Browser doesn't support Geolocation
			handleLocationError(false, infoWindow, comp_map.getCenter());
        }
		
		//Add markers on the map   ?Database储存五个比赛信息（时间，地点，坐标等）@王琪
			
			var marker1_pos = new google.maps.LatLng(-27.484480, 153.067322);   //Competition one 
			var marker1 = new google.maps.Marker({position:marker1_pos});
			marker1.setMap(comp_map);
			google.maps.event.addListener(marker1,'click',function() {
				var infowindow = new google.maps.InfoWindow({
					content:"Competition 1"    //?地图图标换成对战图片
				});
				infowindow.open(comp_map,marker1);
			});
			var marker2_pos = new google.maps.LatLng(-27.464943, 153.024063);   //Competition two 
			var marker = new google.maps.Marker({position:marker2_pos});
			marker.setMap(comp_map);
			google.maps.event.addListener(marker,'click',function() {
				var infowindow = new google.maps.InfoWindow({
					content:"Competition 2"
				});
				infowindow.open(comp_map,marker);
			});
	}
	//Error checking
    function handleLocationError(browserHasGeolocation, infoWindow, position) {
        infoWindow.setPosition(position);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(comp_map);
    }