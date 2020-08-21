import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import HeatMapLayer from 'react-leaflet-heatmap-layer';
import './style.css';

const HeatMap = ({
    center,
    points,
    onClick,
}) => {

    return (
        <Map
            onClick={e => onClick(e)}
            className='leaflet-container'
            center={center}
        >
            <HeatMapLayer
                fitBoundsOnLoad
                fitBoundsOnUpdate
                points={points}
                longitudeExtractor={m => m[1]}
                latitudeExtractor={m => m[0]}
                intensityExtractor={m => m[2]}
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
