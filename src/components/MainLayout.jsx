import React, { useState } from 'react';

import FileDropZone from './DropZone';
import Map from './Map';
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
