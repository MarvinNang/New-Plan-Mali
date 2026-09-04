ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-8.376243, 12.427908, -7.638404, 12.783326]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Adminboundaries_1 = new ol.format.GeoJSON();
var features_Adminboundaries_1 = format_Adminboundaries_1.readFeatures(json_Adminboundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Adminboundaries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adminboundaries_1.addFeatures(features_Adminboundaries_1);
var lyr_Adminboundaries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Adminboundaries_1, 
                style: style_Adminboundaries_1,
                popuplayertitle: 'Admin boundaries',
                interactive: true,
                title: '<img src="styles/legend/Adminboundaries_1.png" /> Admin boundaries'
            });
var format_Bamakoboundaries_2 = new ol.format.GeoJSON();
var features_Bamakoboundaries_2 = format_Bamakoboundaries_2.readFeatures(json_Bamakoboundaries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Bamakoboundaries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bamakoboundaries_2.addFeatures(features_Bamakoboundaries_2);
var lyr_Bamakoboundaries_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bamakoboundaries_2, 
                style: style_Bamakoboundaries_2,
                popuplayertitle: 'Bamako boundaries',
                interactive: true,
                title: '<img src="styles/legend/Bamakoboundaries_2.png" /> Bamako boundaries'
            });
var format_Locationscores_3 = new ol.format.GeoJSON();
var features_Locationscores_3 = format_Locationscores_3.readFeatures(json_Locationscores_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Locationscores_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Locationscores_3.addFeatures(features_Locationscores_3);
var lyr_Locationscores_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Locationscores_3, 
                style: style_Locationscores_3,
                popuplayertitle: 'Location scores',
                interactive: true,
    title: 'Location scores<br />\
    <img src="styles/legend/Locationscores_3_0.png" /> 0 - 1<br />\
    <img src="styles/legend/Locationscores_3_1.png" /> 1 - 2<br />\
    <img src="styles/legend/Locationscores_3_2.png" /> 2 - 3<br />\
    <img src="styles/legend/Locationscores_3_3.png" /> 3 - 4<br />' });
var format_Identifiedsites_4 = new ol.format.GeoJSON();
var features_Identifiedsites_4 = format_Identifiedsites_4.readFeatures(json_Identifiedsites_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Identifiedsites_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Identifiedsites_4.addFeatures(features_Identifiedsites_4);
var lyr_Identifiedsites_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Identifiedsites_4, 
                style: style_Identifiedsites_4,
                popuplayertitle: 'Identified sites',
                interactive: true,
    title: 'Identified sites<br />\
    <img src="styles/legend/Identifiedsites_4_0.png" /> 350 - 580 sqm<br />\
    <img src="styles/legend/Identifiedsites_4_1.png" /> 750 - 1200 sqm<br />\
    <img src="styles/legend/Identifiedsites_4_2.png" /> 2640 - 6650 sqm<br />' });
var format_PlannedsitesBamako_5 = new ol.format.GeoJSON();
var features_PlannedsitesBamako_5 = format_PlannedsitesBamako_5.readFeatures(json_PlannedsitesBamako_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PlannedsitesBamako_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlannedsitesBamako_5.addFeatures(features_PlannedsitesBamako_5);
var lyr_PlannedsitesBamako_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlannedsitesBamako_5, 
                style: style_PlannedsitesBamako_5,
                popuplayertitle: 'Planned sites Bamako',
                interactive: true,
    title: 'Planned sites Bamako<br />\
    <img src="styles/legend/PlannedsitesBamako_5_0.png" /> Petrol Station<br />\
    <img src="styles/legend/PlannedsitesBamako_5_1.png" /> Solar hub<br />' });
var group_Shellstations = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Shell stations'});
var group_SitesMali = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Sites Mali'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Adminboundaries_1.setVisible(true);lyr_Bamakoboundaries_2.setVisible(true);lyr_Locationscores_3.setVisible(true);lyr_Identifiedsites_4.setVisible(true);lyr_PlannedsitesBamako_5.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Adminboundaries_1,lyr_Bamakoboundaries_2,lyr_Locationscores_3,lyr_Identifiedsites_4,lyr_PlannedsitesBamako_5];
lyr_Adminboundaries_1.set('fieldAliases', {'fid': 'fid', 'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_Bamakoboundaries_2.set('fieldAliases', {'fid': 'fid', 'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_Locationscores_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'score': 'score', });
lyr_Identifiedsites_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Type': 'Type', 'Roof space': 'Roof space', 'City': 'City', });
lyr_PlannedsitesBamako_5.set('fieldAliases', {'id': 'id', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Type': 'Type', });
lyr_Adminboundaries_1.set('fieldImages', {'fid': '', 'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm2_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_Bamakoboundaries_2.set('fieldImages', {'fid': 'TextEdit', 'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm2_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_Locationscores_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'score': 'TextEdit', });
lyr_Identifiedsites_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Type': 'TextEdit', 'Roof space': 'TextEdit', 'City': 'TextEdit', });
lyr_PlannedsitesBamako_5.set('fieldImages', {'id': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Type': 'TextEdit', });
lyr_Adminboundaries_1.set('fieldLabels', {'fid': 'hidden field', 'adm2_name': 'inline label - visible with data', 'adm2_name1': 'hidden field', 'adm2_name2': 'hidden field', 'adm2_name3': 'hidden field', 'adm2_pcode': 'hidden field', 'adm1_name': 'inline label - visible with data', 'adm1_name1': 'hidden field', 'adm1_name2': 'hidden field', 'adm1_name3': 'hidden field', 'adm1_pcode': 'hidden field', 'adm0_name': 'inline label - visible with data', 'adm0_name1': 'hidden field', 'adm0_name2': 'hidden field', 'adm0_name3': 'hidden field', 'adm0_pcode': 'hidden field', 'valid_on': 'hidden field', 'valid_to': 'hidden field', 'area_sqkm': 'hidden field', 'version': 'hidden field', 'lang': 'hidden field', 'lang1': 'hidden field', 'lang2': 'hidden field', 'lang3': 'hidden field', 'adm2_ref_n': 'hidden field', 'center_lat': 'hidden field', 'center_lon': 'hidden field', });
lyr_Bamakoboundaries_2.set('fieldLabels', {'fid': 'hidden field', 'adm2_name': 'inline label - visible with data', 'adm2_name1': 'hidden field', 'adm2_name2': 'hidden field', 'adm2_name3': 'hidden field', 'adm2_pcode': 'hidden field', 'adm1_name': 'inline label - visible with data', 'adm1_name1': 'hidden field', 'adm1_name2': 'hidden field', 'adm1_name3': 'hidden field', 'adm1_pcode': 'hidden field', 'adm0_name': 'inline label - visible with data', 'adm0_name1': 'hidden field', 'adm0_name2': 'hidden field', 'adm0_name3': 'hidden field', 'adm0_pcode': 'hidden field', 'valid_on': 'hidden field', 'valid_to': 'hidden field', 'area_sqkm': 'hidden field', 'version': 'hidden field', 'lang': 'hidden field', 'lang1': 'hidden field', 'lang2': 'hidden field', 'lang3': 'hidden field', 'adm2_ref_n': 'hidden field', 'center_lat': 'hidden field', 'center_lon': 'hidden field', });
lyr_Locationscores_3.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'score': 'inline label - always visible', });
lyr_Identifiedsites_4.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Type': 'inline label - always visible', 'Roof space': 'inline label - always visible', 'City': 'inline label - always visible', });
lyr_PlannedsitesBamako_5.set('fieldLabels', {'id': 'hidden field', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Type': 'inline label - always visible', });
lyr_PlannedsitesBamako_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});