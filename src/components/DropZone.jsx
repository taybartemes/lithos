import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import shp from 'shpjs';

export default function FileDropZone({ shapefile, onShapefileChange }) {
    const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            acceptedFiles[0].arrayBuffer().then((buffer) => {
                shp(buffer).then((_shapefile) => {
                    onShapefileChange(_shapefile);
                });
            });
        }
    });
    const onError = useCallback((errors) => {
        console.error(errors);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        onError,
    });

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the files here ...</p>
            ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
            )}
        </div>
    );
}
