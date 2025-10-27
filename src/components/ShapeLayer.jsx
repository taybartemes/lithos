import React from "react";
import { GeoJSON, useMap } from "react-leaflet";
import { featureCollection } from "@turf/helpers";
import { bbox } from "@turf/bbox";
import { bboxPolygon } from "@turf/bbox-polygon";

export default function ShapeLayer({ shapefile, map }) {
  if (shapefile) {
    if (shapefile?.features?.length > 0) {
      const boundingBox = bbox(shapefile);
      //turf return [minX, minY, maxX, maxY]
      //leaflet wants [[minY, minX], [maxY, maxX]]
      const bounds = [
        [boundingBox[1], boundingBox[0]],
        [boundingBox[3], boundingBox[2]],
      ];
      map.flyToBounds(bounds);
      return (
        <div>
          <GeoJSON key={shapefile?.fileName} data={shapefile} />;
        </div>
      );
    } else {
      //assume its many features in an array
      let allPolys = [];
      for (const feature of shapefile) {
        const boundingBox = bbox(feature);

        allPolys.push(bboxPolygon(boundingBox));
      }
      const allFeatures = featureCollection(allPolys);
      const boundingBox = bbox(allFeatures);
      //turf returns [minX, minY, maxX, maxY]
      //leaflet wants [[minY, minX], [maxY, maxX]]
      const bounds = [
        [boundingBox[1], boundingBox[0]],
        [boundingBox[3], boundingBox[2]],
      ];
      map.flyToBounds(bounds);

      return (
        <div>
          {shapefile.map((feature) => (
            <GeoJSON key={feature.fileName} data={feature} />
          ))}
        </div>
      );
    }
  }
}
