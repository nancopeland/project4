//script

//google maps

/*var google = []; 

var moonTypeOptions = {
        getTileUrl: function(coord, zoom) {
          var normalizedCoord = getNormalizedCoord(coord, zoom);
          if (!normalizedCoord) {
            return null;
          }
          var bound = Math.pow(2, zoom);
          return 'http://nan-copeland.com/project4/seven-kingdoms' +
          '/' + zoom + '/' + normalizedCoord.x + '/' +
          (bound - normalizedCoord.y - 1) + '.jpg';
        },
        tileSize: new google.maps.Size(256, 256),
        maxZoom: 9,
        minZoom: 0,
        radius: 1738000,
        name: 'Moon'
      };

      var moonMapType = new google.maps.ImageMapType(moonTypeOptions);

      function initialize() {
        var myLatlng = new google.maps.LatLng(0, 0);
        var mapOptions = {
          center: myLatlng,
          zoom: 1,
          streetViewControl: false,
          mapTypeControlOptions: {
            mapTypeIds: ['moon']
          }
        };
      
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
        map.mapTypes.set('moon', moonMapType);
        map.setMapTypeId('moon');
      }
      
      // Normalizes the coords that tiles repeat across the x axis (horizontally)
      // like the standard Google map tiles.
      function getNormalizedCoord(coord, zoom) {
        var y = coord.y;
        var x = coord.x;
      
        // tile range in one direction range is dependent on zoom level
        // 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
        var tileRange = 1 << zoom;
      
        // don't repeat across y-axis (vertically)
        if (y < 0 || y >= tileRange) {
          return null;
        }
      
        // repeat across x-axis
        if (x < 0 || x >= tileRange) {
          x = (x % tileRange + tileRange) % tileRange;
        }
      
        return {
          x: x,
          y: y
        };
      }
      
      google.maps.event.addDomListener(window, 'load', initialize);*/
      
      
      /*function initialize() {
        var myLatlng = { lat: +35.9333, lng: -79.0333 }
        var myLatlng2  = { lat: +35.9206, lng: -79.0839 }
        
        var mapOptions = {
          center: { lat: +35.9333, lng: -79.0333},
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.TERRAIN
        };
        
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions
        );
        
        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';
            
        var contentString2 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        
        var infowindow2 = new google.maps.InfoWindow({
            content: contentString2
        });
        
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title:"Chapel Hill"
        });
        
        var marker2 = new google.maps.Marker({
            position: myLatlng2,
            map: map,
            title:"Carrboro"
        });
        
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });
        
        google.maps.event.addListener(marker2, 'click', function() {
            infowindow2.open(map,marker2);
        });
        //figure out how to get boxes to disappear on new click function
    }
    
    
        google.maps.event.addDomListener(window, 'load', initialize);*/
      
      
      
      
      
      
      
      