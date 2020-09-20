import {Typography} from '@material-ui/core';
const MapMarker = (props) => {
    let color;
    if(props.type === "plane"){
        color = "yellow"
    }else{
        color = "green"
    }
    return (
        <div>
            <a href={`/planes/${encodeURIComponent(props.icao)}`}>
                <svg height="22" width="22">
                    <circle cx="11" cy="11" r="7" fill={color} stroke="black" strokeWidth="2" />
                </svg>
            </a>
            <Typography variant="body1">{props.name}</Typography>
        </div>
    )
}
export default MapMarker;