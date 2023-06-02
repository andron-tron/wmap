// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import * as L from 'leaflet';

var myMap = L.map('map').setView([54.8728, 26.9368], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 15,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(myMap);

var geojsonFeature = {
	"type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            26.938341276758678,
            54.88372992857171
          ],
          [
            26.93618672700461,
            54.885552501958585
          ],
          [
            26.939228444303524,
            54.88803106945966
          ],
          [
            26.93618672700461,
            54.88948897911382
          ],
          [
            26.9380878003158,
            54.89262330620849
          ],
          [
            26.935172821238325,
            54.89575738942369
          ]
        ],
        "type": "LineString"
      }
    }
  ]
};
var myStyle = {
    "color": "#ff78aa",
    "weight": 5,
    "opacity": 0.65
};
L.geoJSON(geojsonFeature, {style: myStyle}).addTo(myMap);
console.log('Started!');