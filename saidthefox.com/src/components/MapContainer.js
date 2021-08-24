import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

class MapContainer extends React.Component {
    render(){

        const containerStyle = {
            width: '25vw',
            height: '25vh',
            'margin-top': '25vh',
            'margin-left': '70vw',
        }

        return (
                    <Map 
                        google={this.props.google} 
                        initialCenter={{
                            lat: 29.347253036612877, 
                            lng: -98.41895602491822
                        }}
                        containerStyle={containerStyle}
                    />
    )
}
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyCiZItERseO8Op4gz2rvQCJIUNtib6KKfA')
   })(MapContainer);