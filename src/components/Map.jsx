import React, { useState } from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import ShapeLayer from './ShapeLayer';

export default function Map({ shapefile }) {
    const [map, setMap] = useState(null);

    return (
        <MapContainer
            center={[50.505, -0.09]}
            ref={setMap}
            zoom={9}
            zoomControl={false}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%', zIndex: 2 }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ZoomControl position="bottomright" />
            <ShapeLayer shapefile={shapefile} map={map}></ShapeLayer>
        </MapContainer>
    );
}
