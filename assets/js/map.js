var latitude = 46.88381003748741;
var longitude = 5.347738623234953;

var mymap = L.map('map').setView([latitude, longitude], 16);

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png?key=cb1_48lk_1_bba504ac11437db91ba0bcab', {
    attribution: '©<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);

L.marker([latitude, longitude]).addTo(mymap)
    .bindPopup('1 Rue du Meix, 71270 Mouthier-en-Bresse')
    .openPopup();