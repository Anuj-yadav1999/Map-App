import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactMapGL from 'react-map-gl';

class MapBox extends Component {

    state = {
        viewport: {
            width: "100vw",
            height: "100vh",
            latitude: 42.430472,
            longitude: -123.334102,
            zoom: 16
        }
    }

    setUserLocation = () => {
        navigator.geolocation.getCurrentPosition(position => {
            let newViewport = {
                height: "100vh",
                width: "100vw",
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                zoom: 12
            }
            this.setState({
                viewport: newViewport
            })
        })
    }

    render(){
        return( 
            <div>
                <div style={{display:'flex', flexDirection: 'column'}}>
                    <Link to={{pathname: `/`}}>LogOut</Link>
                    <button onClick={this.setUserLocation} >My Location: Click Here</button>
                </div>
                <div>
                    <ReactMapGL {...this.state.viewport} mapStyle='mapbox://styles/mapbox/outdoors-v11'
                        onViewportChange={(viewport => this.setState(viewport))}
                        mapboxApiAccessToken='Your MapBox Key Here!!'>
                    </ReactMapGL>
                </div>
            </div>
        )
    }
}

export default MapBox;