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
            <svg height="26" width="26">
                <circle cx="13" cy="13" r="10" fill={color} stroke="black" strokeWidth="3" />
            </svg>
            <Typography variant="body1">{props.name}</Typography>
        </div>
    )
}
export default MapMarker;