import Head from 'next/head'
import {Typography} from '@material-ui/core';

export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      coords: [0,0],
      planes: [],
      radius: 10,
    }
  }
  render(){
    return (
      <div>
        <Head>
          <title>AeroSeeker</title>
        </Head>
        <Typography variant="h1">Hello World</Typography>
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