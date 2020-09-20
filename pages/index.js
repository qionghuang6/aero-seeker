import Head from 'next/head'
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
    })
    return {planes: nearbyPlanes}
  }

  render(){
    return (
      <div>
        <Head>
          <title>AeroSeeker</title>
        </Head>
        <Typography variant="h1">Hello World</Typography>
        <Typography variant="h2">{calcDistanceMiles(53.32055555555556,53.31861111111111,-1.7297222222222221,-1.6997222222222223)}</Typography>
        <Typography>{this.state.planes}</Typography>
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