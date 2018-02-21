exports.toGeoJSON = (lats, lons, data, padding=true) => {
    var arr = [];

    if(padding){
        for(let latIdx = 0; latIdx < lats.length; latIdx++){
            for(let lonIdx = 0; lonIdx < lons.length; lonIdx++){
                let lat1 = lats[latIdx]
                let lon1 = lons[lonIdx];
                let lat2, lon2;
                if(latIdx != lats.length-1){
                    lat2 = lats[latIdx+1];
                } else {
                    lat2 = lats[latIdx] + (lats[latIdx] - lats[latIdx-1]); 
                }
                if(lonIdx != lons.length-1){
                    lon2 = lons[latIdx+1];
                } else {
                    lon2 = lons[latIdx] + (lons[latIdx] - lons[latIdx-1]); 
                }

                lat1 = parseFloat(lat1.toFixed(0));
                lat2 = parseFloat(lat2.toFixed(0));
                lon1 = parseFloat(lon1.toFixed(0));
                lon2 = parseFloat(lon2.toFixed(0));

                let feature = { "type": "Feature" };
                feature.properties = { value: data[latIdx][lonIdx] };
                feature.geometry = {
                    "type": "Polygon",
                    "coordinates": [[
                        [lon1, lat1],
                        [lon2, lat1],
                        [lon2, lat2],
                        [lon1, lat2]
                    ]]
                };
                arr.push(feature);
            }
        }
    } else {
        for(let latIdx = 0; latIdx < lats.length-1; latIdx++){
            for(let lonIdx = 0; lonIdx < lons.length-1; lonIdx++){
                let lat1 = lats[latIdx]
                let lon1 = lons[lonIdx];
                let lat2 = lats[latIdx+1];
                let lon2 = lons[latIdx+1];

                lat1 = parseFloat(lat1.toFixed(0));
                lat2 = parseFloat(lat2.toFixed(0));
                lon1 = parseFloat(lon1.toFixed(0));
                lon2 = parseFloat(lon2.toFixed(0));
                
                let feature = { "type": "Feature" };
                feature.properties = { value: data[latIdx][lonIdx] };
                feature.geometry = {
                    "type": "Polygon",
                    "coordinates": [[
                        [lon1, lat1],
                        [lon2, lat1],
                        [lon2, lat2],
                        [lon1, lat2]
                    ]]
                };
                arr.push(feature);
            }
        }
    }
    return arr;
};