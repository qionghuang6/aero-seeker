import gmapskey from '../gmapskey.js'
import GoogleMapReact from 'google-map-react';
import MapMarker from './mapMarker';
 
const GMaps = (props) => {
    let planePoints = [];
    for(const stateVector of props.planes){
        planePoints.push((
            <MapMarker
                lat={stateVector[6]}
                lng={stateVector[5]}
                name={stateVector[1]}
                type="plane"
          />
        ))
    }
    return (
      <div style={{ height: '60vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: gmapskey }}
          center={props.center}
          defaultZoom={props.zoom}
        >
          <MapMarker
            lat={props.center.lat}
            lng={props.center.lng}
            name=""
            type="center"
          />
          {planePoints}
        </GoogleMapReact>
      </div>
    );
  }
export default GMaps;