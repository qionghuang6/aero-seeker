import {Card, CardContent, Typography, TextField, Button, Input, Slider} from '@material-ui/core';

const LOCATIONS = {
    mit: [42.360092, -71.094162],
    london: [51.507351, -0.127758],
    tokyo: [35.689487, 139.691711],
    newyork: [40.646632, -73.785686],
    hongkong: [22.392666, 114.147605],
}

const SeekInputs = ({setSeekParams}) =>{
    const [range, setRange] = React.useState(50);
    const [long, setLong] = React.useState(-74.003);
    const [lat, setLat] = React.useState(40.627);

    const handleLongChange = (event) =>{
        if(!isNaN(event.target.value)){
            setLong(event.target.value)
        }
    }

    const handleLatChange = (event) =>{
        if(!isNaN(event.target.value)){
            setLat(event.target.value)
        }
    }

    const handleSliderChange = (event, newValue) => {
        setRange(newValue);
    };

    const handleRangeInputChange = (event) => {
        setRange(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleSubmit = (event) => {
        let params = LOCATIONS[(event.currentTarget.value)];
        if(event.target.value === "inputs"){
            setSeekParams(lat,long,range);
        } else{
            setLat(params[0]);
            setLong(params[1]);
            setSeekParams(...params, range);
        }
    }
    return (
    <Card>
      <CardContent>
      <form>
        <Typography>Default Location is Qiong's Middle School</Typography>
        <Typography variant="h6">Longitude</Typography>
        <TextField id="outlined-basic" value={long} onChange={handleLongChange} label="e.g. -74.003" variant="outlined" />
        <Typography variant="h6">Latitude</Typography>
        <TextField id="outlined-basic" value={lat} onChange={handleLatChange} label="e.g. 40.627" variant="outlined" />
        <Typography variant="h6">Radius (miles) </Typography>
        <Slider
            min ={10}
            max = {500}
            value={typeof range === 'number' ? range : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        <Input
            value={range}
            margin="dense"
            onChange={handleRangeInputChange}
            // onBlur={handleBlur}
            inputProps={{
                step: 10,
                min: 10,
                max: 500,
                type: 'number',
                'aria-labelledby': 'input-slider',
            }}
        />
        <br></br>
        <Button variant="contained" color="primary" value="inputs" onClick = {handleSubmit}>
             Seek Planes in {range} mile radius!
        </Button>
        </form>
        <Typography variant="h5">Try these other locations!</Typography>
        <Button variant="contained" color="primary" value="mit" onClick = {handleSubmit}>
             MIT
        </Button>
        <Button variant="contained" color="primary" value="london" onClick = {handleSubmit}>
             London
        </Button>
        <Button variant="contained" color="primary" value="tokyo" onClick = {handleSubmit}>
             Tokyo
        </Button>
        <Button variant="contained" color="primary" value="newyork" onClick = {handleSubmit}>
             JFK Airport (New York)
        </Button>
        <Button variant="contained" color="primary" value="hongkong" onClick = {handleSubmit}>
             Hong Kong
        </Button>
      </CardContent>
    </Card>
    )
}

export default SeekInputs