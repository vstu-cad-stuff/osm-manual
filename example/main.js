var map = L.map('map').setView([48.7819, 44.7777], 14);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
map.on('click', onClick);

var popup = L.popup();
function onClick(e) {
  lat = e.latlng.lat.toFixed(5);
  lng = e.latlng.lng.toFixed(5);
  popup.setLatLng(e.latlng)
       .setContent('<b>' + lat + ', ' + lng + '</b>')
       .openOn(map);
}

data = [[48.79481, 44.74777],
        [48.78028, 44.75485],
        [48.76463, 44.78363],
        [48.76719, 44.78686],
        [48.77923, 44.81202],
        [48.78289, 44.80787],
        [48.79229, 44.77988],
        [48.78893, 44.76422],
        [48.79407, 44.75757],
        [48.79667, 44.75634]];

markers = false;
for (i in data) {
  if (markers) marker = L.marker(data[i]);
  else marker = L.circle(data[i], 50, {color: '#f00'}).addTo(map);
  marker.addTo(map).bindPopup(data[i][0] + ', ' + data[i][1]);
}

polyline = false;
if (polyline) {
  L.polyline(data, {color: 'black', weight: 3}).addTo(map);
} else {
  L.polygon(data, {color: 'green'}).addTo(map)
   .bindPopup('<i>I\'m so green</i>');
}
