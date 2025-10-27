import React, { useState, useEffect } from "react";
import Map from "./Map";

import FileDropZone from "./DropZone";

export default function MainLayout() {
  const [shapefile, setShapefile] = useState();
  const handleShapefileChange = (newShapefile) => {
    setShapefile(newShapefile);
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Map shapefile={shapefile} />
      <FileDropZone
        shapefile={shapefile}
        onShapefileChange={handleShapefileChange}
      />
    </div>
  );
}
