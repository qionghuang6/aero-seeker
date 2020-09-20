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
            <svg height="20" width="20">
                <circle cx="10" cy="10" r="6" fill={color} stroke="black" strokeWidth="2" />
            </svg>
            <Typography variant="body1">{props.name}</Typography>
        </div>
    )
}
export default MapMarker;