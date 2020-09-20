import Head from 'next/head'
import {Typography} from '@material-ui/core';

export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      lat: 40.627642, 
      long: -74.003822,
      planes: [],
      radius: 10,
    }
  }
  calcDistanceMiles(lat1,lat2,long1,long2){
    // Formula from https://www.geeksforgeeks.org/program-distance-two-points-earth
    lat1 /= 57.29577951;
    lat2 /= 57.29577951;
    long1 /= 57.29577951;
    long2 /= 57.29577951;
    let latDif = lat1-lat2;
    let longDif = long1-long2;
    let a = Math.sin(latDif / 2)**2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(longDif / 2)**2;
    let c = 2 * Math.asin(Math.sqrt(a));
    let earthRadius = 3956;  
    return(c*earthRadius)
  }
  render(){
    return (
      <div>
        <Head>
          <title>AeroSeeker</title>
        </Head>
        <Typography variant="h1">Hello World</Typography>
        <Typography variant="h2">{this.calcDistanceMiles(53.32055555555556,53.31861111111111,-1.7297222222222221,-1.6997222222222223)}</Typography>
        <Typography>{JSON.stringify(this.props.data)}</Typography>
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