import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import HeatMapLayer from 'react-leaflet-heatmap-layer';
import './style.css';

const HeatMap = ({
    center,
    points,
    getPosition,
}) => {

    const gradient = {
        0.1: '#89BDE0', 0.2: '#96E3E6', 0.4: '#82CEB6',
        0.6: '#FAF3A5', 0.8: '#F5D98B', 1.0: '#DE9A96',
    };

    return (
        <Map
            onClick={e => getPosition(e.latlng)}
            className='leaflet-container'
            center={center}
        >
            <HeatMapLayer
                fitBoundsOnLoad
                fitBoundsOnUpdate
                points={points}
                longitudeExtractor={m => m[1]}
                latitudeExtractor={m => m[0]}
                intensityExtractor={m => parseFloat(m[2])}
                gradient={gradient}
                radius={30}
                max={10}
                blur={10}
            />
            <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={center} >
                <Popup>Latitude: {center[0]}<br />Logitude: {center[1]}</Popup>
            </Marker>
        </Map>
    )
}

export default HeatMap;
