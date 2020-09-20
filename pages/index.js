import Header from '../components/layout'
import PlanesGrid from '../components/planesGrid'
import {Grid, Typography} from '@material-ui/core';
import SeekInputs from '../components/seekInput'
import GMaps from '../components/gmaps'

const calcDistanceMiles = (lat1,lat2,long1,long2) => {
  // Formula from https://www.geeksforgeeks.org/program-distance-two-points-earth
  lat1 /= 57.29577951;
  lat2 /= 57.29577951;
  long1 /= 57.29577951;
  long2 /= 57.29577951;
  const latDif = lat1-lat2;
  const longDif = long1-long2;
  const a = Math.sin(latDif / 2)**2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(longDif / 2)**2;
  const c = 2 * Math.asin(Math.sqrt(a));
  const earthRadius = 3956;  
  return(c*earthRadius)
}

export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      lat: 40.627642, 
      long: -74.003822,
      planes: [],
      radius: 125,
    }
    this.setSeekParams = this.setSeekParams.bind(this);
  }

  setSeekParams(lat,long,radius){
    this.setState({
      lat,long,radius
    })
  }

  static getDerivedStateFromProps(nextProps, prevState){
    let nearbyPlanes = nextProps.data.states.filter((stateVector) => {
      if(stateVector[5] && stateVector[6]){ //5: long, 6: lat
        return calcDistanceMiles(stateVector[6], prevState.lat, stateVector[5], prevState.long) < prevState.radius
      }
      return false;
    });
    return {planes: nearbyPlanes}
  }

  render(){
    return (
      <div>
        <Header></Header>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={3}>
            <SeekInputs setSeekParams={this.setSeekParams}></SeekInputs>
          </Grid>
          <Grid item xs = {12} sm={8} md ={9}>
            <GMaps gmapskey={this.props.gmapskey} center={{lat: this.state.lat, lng: this.state.long}} zoom={9} planes={this.state.planes}></GMaps>
          </Grid>
        </Grid>
        <Typography variant="h3">{this.state.planes.length} Planes Found!</Typography>
        <PlanesGrid planes={this.state.planes}></PlanesGrid>
      </div>
    )
  }
}

export async function getStaticProps(){
  const res = await fetch('https://opensky-network.org/api/states/all');
  const data = await res.json();
  return {
    props: {
      data,
      gmapskey: process.env.GMAPSKEY
    },
  }
}