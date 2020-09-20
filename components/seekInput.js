import {Card, CardContent, Typography, TextField, Button, Input, Slider} from '@material-ui/core';

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

    const handleSubmit = () => {
        setSeekParams(lat,long,range);
    }
    return (
    <Card>
      <CardContent>
      <form>
        <Typography>Default Location is Qiong's Middle School</Typography>
        <Typography variant="h6">Longitude</Typography>
        <TextField id="outlined-basic" value={long} onChange={handleLongChange} label="e.g. 40.627" variant="outlined" />
        <Typography variant="h6">Latitude</Typography>
        <TextField id="outlined-basic" value={lat} onChange={handleLatChange} label="e.g. -74.003" variant="outlined" />
        <Typography variant="h6">Radius (miles) </Typography>
        <Slider
            min ={10}
            max = {300}
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
                max: 300,
                type: 'number',
                'aria-labelledby': 'input-slider',
            }}
        />
        <br></br>
        <Button variant="contained" color="primary" onClick = {handleSubmit}>
             Seek Planes in {range} mile radius!
        </Button>
        </form>
      </CardContent>
    </Card>
    )
}

export default SeekInputs