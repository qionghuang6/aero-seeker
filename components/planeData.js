import {Card, CardContent, Typography, List, ListItem, ListItemText, Divider} from '@material-ui/core';

const PlaneDataCard = ({stateVector}) =>{
    return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Callsign: {stateVector[1]}
        </Typography>
        <List>
            <ListItem>
                <ListItemText secondary="ICAO24" primary={stateVector[0]}/>
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemText secondary="Origin" primary={stateVector[2]}/>
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemText secondary="Longitude" primary={stateVector[5]}/>
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemText secondary="Latitude" primary={stateVector[6]}/>
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemText secondary="Speed" primary={(stateVector[9] * 2.23694).toFixed(2) + " mph"}/>
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemText secondary="Vertical Speed" primary={stateVector[11] + " m/s"}/>
            </ListItem>
        </List>
      </CardContent>
    </Card>
    )
}

export default PlaneDataCard