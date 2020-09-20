import Head from 'next/head'
import PlanesGrid from '../components/planesGrid'
import {Typography} from '@material-ui/core';

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
      radius: 25,
    }
    this.setParams = this.setParams.bind(this);
  }

  setParams(lat,long,radius){
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
        <Head>
          <title>AeroSeeker</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Head>
        <Typography variant="h1">Hello World</Typography>
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
    },
  }
}