// import gmapskey from '../gmapskey.js'
import GoogleMapReact from 'google-map-react';
import MapMarker from './mapMarker';

const GMaps = (props) => {
    let planePoints = [];
    let id = 0;
    for(const stateVector of props.planes){
        planePoints.push((
            <MapMarker
                icao = {stateVector[0]}
                key = {id}
                lat={stateVector[6]}
                lng={stateVector[5]}
                name={stateVector[1]}
                type="plane"
          />
        ))
        id += 1;
    }
    return (
      <div style={{ height: '60vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: props.gmapskey }}
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