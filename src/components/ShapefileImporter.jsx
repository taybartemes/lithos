import React, { useState } from "react";
import { shp } from "shpjs";

function ShapefileImporter() {
  const [shapefile, setShapefile] = useState();
  if (e.target.files.length > 0) {
    const geoJSON = shp(e.target.files[0]);
    setShapefile(geoJSON);

    // e.target.files[0].arrayBuffer().then((arrayBuffer) => {
    //   shp(arrayBuffer).then((geoJSON) => {
    //     setShapefile(geoJSON);
    //   });
    // });
  }
  return shapefile;
}

export default ShapefileImporter;
