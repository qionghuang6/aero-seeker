import PlaneDataCard from '../../components/planeData'
import Header from '../../components/layout'
import GMaps from '../../components/gmaps'
import { useRouter } from 'next/router'
import {Typography, Grid, Breadcrumbs, Link, Box} from '@material-ui/core'

const PlanePage = (props) =>{
    const router = useRouter()
    const { icao } = router.query;

    const planeVector = props.data.states.filter(stateVector => {
        return(stateVector[0] === icao ? true : false)
    });

    return (
        <div>
            <Header></Header>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4} md={3}>
                    <Box m={2}>
                        <br></br>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link href="/">
                                All Planes
                            </Link>
                            <Typography>
                                {icao}
                            </Typography>
                        </Breadcrumbs>
                        <br></br>
                    </Box>
                    <PlaneDataCard stateVector={planeVector[0]} isVerbose={true} ></PlaneDataCard>
                </Grid>
                <Grid item xs = {12} sm={8} md ={9}>
                    <GMaps gmapskey={props.gmapskey} center={{lat: planeVector[0][6], lng: planeVector[0][5]}} zoom={9} planes={planeVector}></GMaps>
                </Grid>
            </Grid>   
        </div>
    
    )
}

export async function getServerSideProps(context){
    const { icao } = context.query;
    const res = await fetch('https://opensky-network.org/api/states/all?icao24='+icao);
    const data = await res.json();
    return {
      props: {
        data,
        gmapskey: process.env.GMAPSKEY
      },
    }
  }

  export default PlanePage;