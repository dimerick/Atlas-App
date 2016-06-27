$(document).ready(function(){
var map = L.map('map', {
    center: [6.244203, -75.58121189999997],
    zoom: 11
    });
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

    var myIcon = L.icon({
        iconUrl: 'images/icon.png',
        iconSize: [40, 40],
        iconAnchor: [22, 10]
    });

    var latlng = L.latLng(6.24449, -75.53923);
    var options = {
        icon: myIcon
    }
    L.marker(latlng, options).addTo(map);

});
