<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>

<?php
//query database to retrieve postcode

//store postcode in variable
$postcode = mysql_result($result,0,"postcode");
?>
<!-- generate google map -->

<!-- google maps key -->    
 <script src="http://maps.google.com/maps?file=api&v=2&key=AIzaSyDODUmyocCqD_RB5Ui6r9ezHDCuWEnIkE4"
      type="text/javascript"></script>

<!-- ajax key -->        
<script src="http://www.google.com/uds/api?file=uds.js&v=1.0&key=AIzaSyDODUmyocCqD_RB5Ui6r9ezHDCuWEnIkE4"
type="text/javascript"></script>    

<script type="text/javascript">
var map;
var localSearch = new GlocalSearch();

var icon = new GIcon();
icon.image = "http://www.google.com/mapfiles/marker.png";
icon.shadow = "http://www.google.com/mapfiles/shadow50.png";
icon.iconSize = new GSize(20, 34);
icon.shadowSize = new GSize(37, 34);
icon.iconAnchor = new GPoint(10, 34);


function usePointFromPostcode(postcode, callbackFunction) {
    
    localSearch.setSearchCompleteCallback(null, 
        function() {
            
            if (localSearch.results[0])
            {        
                var resultLat = localSearch.results[0].lat;
                var resultLng = localSearch.results[0].lng;
                var point = new GLatLng(resultLat,resultLng);
                callbackFunction(point);
            }else{
                alert("Postcode not found!");
            }
        });    
        
    localSearch.execute(postcode + ", UK");
}


function setCenterToPoint(point)
{
    map.setCenter(point, 17);
    var marker = new GMarker(point,icon);
    map.addOverlay(marker);
}


function mapLoad() {
    if (GBrowserIsCompatible()) {
        map = new GMap2(document.getElementById("map"));
        map.addControl(new GLargeMapControl());
        map.addControl(new GMapTypeControl());
        map.setCenter(new GLatLng(54.622978,-2.592773), 5, G_NORMAL_MAP);
    }
}

<!-- This function may not be needed, I haven't tried removing it  -->
function addUnLoadEvent(func) {
    var oldonunload = window.onunload;
    if (typeof window.onunload != 'function') {
      window.onunload = func;
    } else {
      window.onunload = function() {
        oldonunload();
        func();
      }
    }
}

<!-- This call may not be necessary, I haven't tried removing it -->
addUnLoadEvent(GUnload);
    
</script>
    
<script>
     window.onload = function() {
     mapLoad();
     usePointFromPostcode("<?php echo $postcode; ?>", setCenterToPoint);
     }
</script>

<!-- use this div to size and position map -->
<input type="number" size="6" placeholder="postcode" id="postcode"/>
<input type="button" value="OK" onclick="function usePointFromPostcode(postcode, callbackFunction)"/>
<div id="map" style="width: 500px; height: 500px; "></div>

</body>
</html>