import React, { Component } from 'react';
import MapContainer from './MapContainer';

class LocationBody extends Component {
    render(){
        return (
            <div className = "content_boxes">
                <MapContainer></MapContainer>
            </div>
    )
}
}
export default LocationBody;