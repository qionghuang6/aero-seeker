import {Card, CardContent, Typography, List, ListItem, ListItemText, Divider, Button, Link} from '@material-ui/core';

const PlaneDataCard = ({stateVector, isVerbose}) =>{
    let moreItems = [];
    if(isVerbose){
        moreItems.push((
            <div key="extras">
                <ListItem key="vert">
                    <ListItemText secondary="Vertical Speed" primary={stateVector[11] + " m/s"}/>
                </ListItem>
                <Divider />
                <ListItem key="icao">
                    <ListItemText secondary="ICAO24" primary={stateVector[0]}/>
                </ListItem>
            </div>
            ))
    } else{
        moreItems.push((
            <div key="details">
                <br/>
                <Button>
                    <Link href={`/planes/${encodeURIComponent(stateVector[0])}`}>
                        See Details
                    </Link>
                </Button>
            </div>
        ))
    }
    return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Callsign: {stateVector[1]}
        </Typography>
        <List>
            <ListItem key="origin">
                <ListItemText secondary="Origin" primary={stateVector[2]}/>
            </ListItem>
            <Divider />
            <ListItem key="long">
                <ListItemText secondary="Longitude" primary={stateVector[5]}/>
            </ListItem>
            <Divider />
            <ListItem key="lat">
                <ListItemText secondary="Latitude" primary={stateVector[6]}/>
            </ListItem>
            <Divider />
            <ListItem key="speed">
                <ListItemText secondary="Speed" primary={(stateVector[9] * 2.23694).toFixed(2) + " mph"}/>
            </ListItem>
            <Divider />
            {moreItems}
        </List>
      </CardContent>
    </Card>
    )
}

export default PlaneDataCard