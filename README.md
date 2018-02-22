# grid2geojson
Node.js package for convert 2D array grid data to GeoJSON format

See source code on [Github](https://github.com/arukpupatee/grid2geojson)

## Installing

In Node.js. Install by npm command

```
npm install grid2geojson
```

## Example

Import package

```
var grid2geojson = require('grid2geojson');
```

Initial parameter in this format

```
lats = [lat1, lat2, lat3, lat4]
lons = [lon1, lon2, lon3, lon4]
data = [[value at lat1lon1, value at lat1lon2, value at lat1lon3, value at lat1lon4],
        [value at lat2lon1, value at lat2lon2, value at lat2lon3, value at lat2lon4],
        [value at lat3lon1, value at lat3lon2, value at lat3lon3, value at lat3lon4],
        [value at lat4lon1, value at lat4lon2, value at lat4lon3, value at lat4lon4]]
```


And then use function

```
padding = true
var geojson = grid2geojson.toGeoJSON(lats, lons, data, padding);
```

It's will return like this.

```
geojson = [feature at lat1lon1, feature at lat1lon2, feature at lat1,lon3, ...]

feature at lat1lon1 = {
    "type": "Feature",
    "properties": { "value": value at lat1lon1 },
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                [lon1, lat1],
                [lon2, lat1],
                [lon2, lat2],
                [lon1, lat2]
            ]
        ]
    }
}
```

If data is NxN grid and padding is false. output is (N-1)x(N-1) grid
If data is NxN grid and padding is true. output is NxN grid

## Authors

* **Aruk Pupatee** - [ArukPupatee](https://github.com/arukpupatee)

See also the list of [contributors](https://github.com/arukpupatee/grid2geojson/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details