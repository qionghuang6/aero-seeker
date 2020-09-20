import {Card, CardContent, Typography} from '@material-ui/core';

const PlaneDataCard = ({stateVector}) =>{
    return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Plane Name
        </Typography>
        <Typography variant="body2" component="p">
          Plane information: {stateVector}
          <br />
        </Typography>
      </CardContent>
    </Card>
    )
}

export default PlaneDataCard