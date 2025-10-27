import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, useMap, GeoJSON } from "react-leaflet";
import ShapeLayer from "./ShapeLayer";

export default function Map({ shapefile }) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (shapefile) {
      console.log("from map:", shapefile);
      // map.flyTo(shapefile.bbox);
    }
  }, [shapefile]);
  // useEffect(() => {
  //   if (shapefile) {
  //     console.log("Adding shapefile to map", shapefile);
  //     // create new shapefile layer (assuming L.Shapefile plugin available and accepts File/Blob)
  //     // map.addLayer(

  //     // )
  //     // const shpfile = new L.Shapefile(shapefile, {
  //     //   onEachFeature: function (feature, layer) {
  //     //     if (feature.properties) {
  //     //       layer.bindPopup(
  //     //         Object.keys(feature.properties)
  //     //           .map(function (k) {
  //     //             return k + ": " + feature.properties[k];
  //     //           })
  //     //           .join("<br />"),
  //     //         {
  //     //           maxHeight: 200,
  //     //         }
  //     //       );
  //     //     }
  //     //   },
  //     // });
  //     // shpfile.addTo(mapRef.current);
  //     // layerRef.current = shpfile;
  //     // try {
  //     //   mapRef.current.flyToBounds(shpfile.getBounds());
  //     // } catch (e) {
  //     //   console.warn("Could not fit bounds", e);
  //     // }
  //   }
  // }, []);

  return (
    <MapContainer
      center={[50.505, -0.09]}
      ref={setMap}
      zoom={9}
      scrollWheelZoom={false}
      style={{ height: "80%", width: "80%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ShapeLayer shapefile={shapefile} map={map}></ShapeLayer>
    </MapContainer>
  );
}
