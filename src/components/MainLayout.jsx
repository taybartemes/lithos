import React, { useState, useEffect } from 'react';
import Map from './Map';

import FileDropZone from './DropZone';
import Sidebar from './Sidebar';

export default function MainLayout() {
    const [shapefile, setShapefile] = useState();
    const handleShapefileChange = (newShapefile) => {
        setShapefile(newShapefile);
    };

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <Map shapefile={shapefile} />
            <Sidebar>
                <FileDropZone
                    shapefile={shapefile}
                    onShapefileChange={handleShapefileChange}
                />
            </Sidebar>
        </div>
    );
}
