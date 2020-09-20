import {Grid} from '@material-ui/core';
import PlaneDataCard from './planeData'

const PlanesGrid = ({planes}) => {
    let cardList = [];
    let id = 0;
    for(const stateVector of planes){
        cardList.push((
            <Grid item xs={12} sm={4} md={3} xl={2} key={id}>
                <PlaneDataCard stateVector={stateVector} isVerbose={false}></PlaneDataCard>
            </Grid>
        ));
        id += 1;
    }
    return (
        <Grid container spacing={3}>
            {cardList}
        </Grid>
    );
}

export default PlanesGrid