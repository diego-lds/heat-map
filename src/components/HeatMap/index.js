import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import HeatMapLayer from 'react-leaflet-heatmap-layer';
import './style.css';


const HeatMap = ({
    points,
}) => {
    return (
        <Map
            className='leaflet-container'
            center={[-27.5976, -48.5252]}
            zoom={16}
        >
            <HeatMapLayer
                fitBoundsOnLoad
                fitBoundsOnUpdate
                points={points}
                longitudeExtractor={m => m[1]}
                latitudeExtractor={m => m[0]}
                intensityExtractor={m => m[2]}
                radius={30}
                max={20}
                blur={10}
            />
            <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
        </Map>
    )
}

export default HeatMap;
