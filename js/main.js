/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/
$(document).ready(function(){
  
// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.

var map = L.map('map-container').setView([46.852984, -121.760368,], 12); 


 //OpenStreetMap Layer
var osmLayer = L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: "© <a href='http://openstreetmap.org'>OpenStreetMap</a> contributors",
    minZoom: 10, maxZoom: 16, 
 });
  
  //Terrain layer using Mapbox  
var terrainLayer = L.tileLayer('https://api.mapbox.com/styles/v1/hardyj1/cise85zpa005e2wo9qnyy64y3/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGFyZHlqMSIsImEiOiJjaXM5ejBtdzgwMDZhMm9vZjhpOHRrdWw2In0.xgUX-vUMg4D9dC1--f-6Zw', {
    attribution: "© <a href='https://www.mapbox.com/map-feedback/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
    minZoom: 10, maxZoom: 16,
 });

//Satellite layer using Mapbox
var satLayer = L.tileLayer('https://api.mapbox.com/styles/v1/hardyj1/cise81xqg005d2wo96025sa0w/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGFyZHlqMSIsImEiOiJjaXM5ejBtdzgwMDZhMm9vZjhpOHRrdWw2In0.xgUX-vUMg4D9dC1--f-6Zw', {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
    minZoom: 10, maxZoom: 16,
  });
  
  //add layers to map
var mapLayers = {
      "Open Street Maps": osmLayer,
      "Terrain View": terrainLayer,
      "Satellite": satLayer,      
  };
  
L.control.layers(mapLayers).addTo(map);
satLayer.addTo(map);  
  
// Mt. Rainier markers
  
// Center and highest point of Mt. Rainier   
var crestMarker = L.marker([46.852984, -121.760368,]).addTo(map);
    crestMarker.bindPopup("<p>14,411 ft. to the peak of Columbia Crest - Mount Rainier's highest point.</p>");
// Marker for the second highest peak on the mountain  
var successMarker = L.marker([46.8459122,-121.7676539]).addTo(map);
    successMarker.bindPopup("<p>At 14,158 ft., Point Success is Rainier's second highest peak.</p>");
// circle for the third highest peak
var libertyMarker = L.circle([46.8629145,-121.774965], 500, {
   color: 'red',
   fillColor: 'red',
   fillOpacity: 0.5
 }).addTo(map); libertyMarker.bindPopup("<p>Liberty Cap is the third highest peak on the mountain at 14,112 ft.");
});