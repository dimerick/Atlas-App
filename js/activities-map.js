$(document).ready(function(){

    var myIcon = L.icon({
        iconUrl: 'images/icon3.png',
        iconSize: [40, 40],
        iconAnchor: [22, 10]
    });

    function eachActivitie(feature, layer){
        layer.setIcon(myIcon);
        console.log(feature);
        var content = '<h4>'+feature.geometry.properties.titulo.toUpperCase()+'</h4>'+
            '</div>' +
            '<div id="description-group">' +
            '<p>'+feature.geometry.properties.descripcion+'</p>' +
            '</div>' +
            '<ul class="data-activitie">' +
            '<li> <i class="fa fa-user"> </i> <span id="num-int-group">'+' '+feature.geometry.properties.autor+'</span></li>' +
            '<li> <i class="fa fa-calendar"> </i><span id="city-group">'+' '+feature.geometry.properties.fecha+'</span> </li>' +
            '</ul>';

       layer.bindPopup(content, {maxWidth: 300, maxHeight: 300}).openPopup();
        // L.popup('', layer).setContent(content).addTo(map);

    };


    var map = L.map('activities-map', {
        center: [6.244203, -75.58121189999997],
        zoom: 12
    });
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

    activities = { "type": "FeatureCollection", "features": [ { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ -75.5693979762, 6.26632842788 ], "properties": { "autor": "CIROARTE", "email": "florcalba@hotmail.com", "id": 15, "titulo": "Dulcita y el burrito", "fecha": "2016-05-26", "creada": "2016-06-14 16:30:35", "descripcion": "Presentaci\u00f3n en la Universidad de Antioquia del grupo de teatro CIROARTE, en la feria de teatro.", "fotos": [ { "url": "Dulcita-y-el-burrito_1.jpg" }, { "url": "Dulcita-y-el-burrito_10.jpg" }, { "url": "Dulcita-y-el-burrito_11.jpg" }, { "url": "Dulcita-y-el-burrito_12.jpg" }, { "url": "Dulcita-y-el-burrito_13.jpg" }, { "url": "Dulcita-y-el-burrito_2.jpg" }, { "url": "Dulcita-y-el-burrito_3.jpg" }, { "url": "Dulcita-y-el-burrito_4.jpg" }, { "url": "Dulcita-y-el-burrito_5.jpg" }, { "url": "Dulcita-y-el-burrito_6.jpg" }, { "url": "Dulcita-y-el-burrito_7.jpg" }, { "url": "Dulcita-y-el-burrito_8.jpg" }, { "url": "Dulcita-y-el-burrito_9.jpg" } ] } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ -75.5375675, 6.2683893 ], "properties": { "autor": "Tasqua Zago ", "email": "tasquazago2014@gmail.com", "id": 3, "titulo": "Recorrido 1 Derecho A La Ciudad", "fecha": "2015-11-14", "creada": "2016-04-28 08:42:31", "descripcion": "Se describe la historia de la honda y la cruz ,y los sobrevivientes.", "fotos": [ { "url": "Recorrido-1-Derecho-A-La-Ciudad_1.jpg" } ] } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ -75.5375339, 6.268136 ], "properties": { "autor": "Tasqua Zago ", "email": "tasquazago2014@gmail.com", "id": 4, "titulo": "Recorrido 1 Derecho A La Ciudad", "fecha": "2015-11-14", "creada": "2016-04-28 08:42:31", "descripcion": "Mostramos la vida de el barrio y uno de sus integrantes con la casa de la memoria en la honda.", "fotos": [ { "url": "Recorrido-1-Derecho-A-La-Ciudad_2.jpg" } ] } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ -75.5374257, 6.2716035 ], "properties": { "autor": "Tasqua Zago ", "email": "tasquazago2014@gmail.com", "id": 5, "titulo": "Recorrido 1 Derecho A La Ciudad", "fecha": "2015-11-14", "creada": "2016-04-28 08:42:31", "descripcion": "La historia brillar en la cruz ( preescolar).", "fotos": [ { "url": "Recorrido-1-Derecho-A-La-Ciudad_3.jpg" } ] } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ -75.5373896, 6.2717041 ], "properties": { "autor": "Tasqua Zago ", "email": "tasquazago2014@gmail.com", "id": 6, "titulo": "Recorrido 1 Derecho A La Ciudad", "fecha": "2015-11-14", "creada": "2016-04-28 08:42:31", "descripcion": "Contando la historia diaria de la mayor\u00eda de los barrios en medellin por los grupos armados.", "fotos": [ { "url": "Recorrido-1-Derecho-A-La-Ciudad_4.jpg" } ] } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ -75.5374525, 6.2715287 ], "properties": { "autor": "Tasqua Zago ", "email": "tasquazago2014@gmail.com", "id": 7, "titulo": "Recorrido 1 Derecho A La Ciudad", "fecha": "2015-11-14", "creada": "2016-04-28 08:42:31", "descripcion": "La invasi\u00f3n de el estado a las personas del barrio gracias a los mega-proyectos.", "fotos": [ { "url": "Recorrido-1-Derecho-A-La-Ciudad_5.jpg" } ] } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ -75.5375206, 6.2716395 ], "properties": { "autor": "Tasqua Zago ", "email": "tasquazago2014@gmail.com", "id": 8, "titulo": "Recorrido 1 Derecho A La Ciudad", "fecha": "2015-11-14", "creada": "2016-04-28 08:42:31", "descripcion": "Despu\u00e9s de una caminata descansamos y almorzamos al lado de la naturaleza.", "fotos": [ { "url": "Recorrido-1-Derecho-A-La-Ciudad_6.jpg" } ] } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ -75.5382996, 6.2785763 ], "properties": { "autor": "Tasqua Zago ", "email": "tasquazago2014@gmail.com", "id": 9, "titulo": "Recorrido 1 Derecho A La Ciudad", "fecha": "2015-11-14", "creada": "2016-04-28 08:42:31", "descripcion": "V\u00eddeo sobre los convites de el barrio y las personas del barrio,una recopilaci\u00f3n de rap y la vida diaria,la cosecha ,el conflicto armado ,nuevas oportunidades el comienzo y el ahora que viven las personas de la comunidad.", "fotos": [ { "url": "Recorrido-1-Derecho-A-La-Ciudad_7.jpg" } ] } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ -75.5565721, 6.2457357 ], "properties": { "autor": "Tasqua Zago ", "email": "tasquazago2014@gmail.com", "id": 10, "titulo": "Recorrido 1 Derecho A La Ciudad", "fecha": "2015-11-14", "creada": "2016-04-28 08:42:31", "descripcion": "La madera y la porcelana una manera creativa de que expresi\u00f3n.", "fotos": [ { "url": "Recorrido-1-Derecho-A-La-Ciudad_8.jpg" } ] } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ -75.5566599, 6.2457455 ], "properties": { "autor": "Tasqua Zago ", "email": "tasquazago2014@gmail.com", "id": 11, "titulo": "Recorrido 1 Derecho A La Ciudad", "fecha": "2015-11-14", "creada": "2016-04-28 08:42:31", "descripcion": "REDAJIC red de j\u00f3venes con distintos temas principales muy interesantes.", "fotos": [ { "url": "Recorrido-1-Derecho-A-La-Ciudad_9.jpg" } ] } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ -75.5567029, 6.2457068 ], "properties": { "autor": "Tasqua Zago ", "email": "tasquazago2014@gmail.com", "id": 12, "titulo": "Recorrido 1 Derecho A La Ciudad", "fecha": "2015-11-14", "creada": "2016-04-28 08:42:31", "descripcion": "Trabajo digno( confiar) s\u00f3lo con un salario m\u00ednimo no se vive tambi\u00e9n.", "fotos": [ { "url": "Recorrido-1-Derecho-A-La-Ciudad_10.jpg" } ] } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ -75.5566119, 6.2458037 ], "properties": { "autor": "Tasqua Zago ", "email": "tasquazago2014@gmail.com", "id": 13, "titulo": "Recorrido 1 Derecho A La Ciudad", "fecha": "2015-11-14", "creada": "2016-04-28 08:42:31", "descripcion": "Asociaci\u00f3n cristiana de j\u00f3venes, Ense\u00f1ar a los jovenes.", "fotos": [ { "url": "Recorrido-1-Derecho-A-La-Ciudad_11.jpg" } ] } } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ -75.5567197, 6.2457865 ], "properties": { "autor": "Tasqua Zago ", "email": "tasquazago2014@gmail.com", "id": 14, "titulo": "Recorrido 1 Derecho A La Ciudad", "fecha": "2015-11-14", "creada": "2016-04-28 08:42:31", "descripcion": "Proceso de paz - yo construy\u00f3 paz con justicia social.", "fotos": [ { "url": "Recorrido-1-Derecho-A-La-Ciudad_12.jpg" } ] } } } ] };

    var activitiesMap = L.geoJson(activities,{
        onEachFeature: eachActivitie
    }).addTo(map);

});
