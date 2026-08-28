ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-8.601910, 12.264768, -7.298394, 12.898312]);
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
var format_Identifiedsites_3 = new ol.format.GeoJSON();
var features_Identifiedsites_3 = format_Identifiedsites_3.readFeatures(json_Identifiedsites_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Identifiedsites_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Identifiedsites_3.addFeatures(features_Identifiedsites_3);
var lyr_Identifiedsites_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Identifiedsites_3, 
                style: style_Identifiedsites_3,
                popuplayertitle: 'Identified sites',
                interactive: true,
    title: 'Identified sites<br />\
    <img src="styles/legend/Identifiedsites_3_0.png" /> 350 - 580 sqm<br />\
    <img src="styles/legend/Identifiedsites_3_1.png" /> 750 - 1200 sqm<br />\
    <img src="styles/legend/Identifiedsites_3_2.png" /> 2640 - 6650 sqm<br />' });
var format_PlannedsitesBamako_4 = new ol.format.GeoJSON();
var features_PlannedsitesBamako_4 = format_PlannedsitesBamako_4.readFeatures(json_PlannedsitesBamako_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PlannedsitesBamako_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlannedsitesBamako_4.addFeatures(features_PlannedsitesBamako_4);
var lyr_PlannedsitesBamako_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlannedsitesBamako_4, 
                style: style_PlannedsitesBamako_4,
                popuplayertitle: 'Planned sites Bamako',
                interactive: true,
    title: 'Planned sites Bamako<br />\
    <img src="styles/legend/PlannedsitesBamako_4_0.png" /> Petrol Station<br />\
    <img src="styles/legend/PlannedsitesBamako_4_1.png" /> Solar hub<br />\
    <img src="styles/legend/PlannedsitesBamako_4_2.png" /> <br />' });
var group_Shellstations = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Shell stations'});
var group_SitesMali = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Sites Mali'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Adminboundaries_1.setVisible(true);lyr_Bamakoboundaries_2.setVisible(true);lyr_Identifiedsites_3.setVisible(true);lyr_PlannedsitesBamako_4.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Adminboundaries_1,lyr_Bamakoboundaries_2,lyr_Identifiedsites_3,lyr_PlannedsitesBamako_4];
lyr_Adminboundaries_1.set('fieldAliases', {'fid': 'fid', 'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_Bamakoboundaries_2.set('fieldAliases', {'fid': 'fid', 'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_Identifiedsites_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Type': 'Type', 'Roof space': 'Roof space', 'City': 'City', });
lyr_PlannedsitesBamako_4.set('fieldAliases', {'id': 'id', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Type': 'Type', });
lyr_Adminboundaries_1.set('fieldImages', {'fid': '', 'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm2_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_Bamakoboundaries_2.set('fieldImages', {'fid': 'TextEdit', 'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm2_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_Identifiedsites_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Type': 'TextEdit', 'Roof space': 'TextEdit', 'City': 'TextEdit', });
lyr_PlannedsitesBamako_4.set('fieldImages', {'id': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Type': 'TextEdit', });
lyr_Adminboundaries_1.set('fieldLabels', {'fid': 'no label', 'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm2_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_Bamakoboundaries_2.set('fieldLabels', {'fid': 'no label', 'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm2_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_Identifiedsites_3.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Type': 'inline label - always visible', 'Roof space': 'inline label - always visible', 'City': 'inline label - always visible', });
lyr_PlannedsitesBamako_4.set('fieldLabels', {'id': 'no label', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Type': 'inline label - always visible', });
lyr_PlannedsitesBamako_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});