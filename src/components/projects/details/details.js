import React, {Component} from 'react'
import styles from './styles.less';
import Audiencescience from './audiencescience';
import Bcentral from './bcentral';
import Funstuff from './funstuff';
import Healthvault from './healthvault';
import Moonlighting from './moonlighting';
import Officelive from './officelive';
import Tools from './tools';
import Urbanearth from './urbanearth';
import Valueappeal from './valueappeal';
import Navy from './navy';

const ProjectDetails = (props) => {
    switch (props.data.id) {
        case 'audiencescience':
            return <Audiencescience/>
            break;
        case 'bcentral':
            return <Bcentral/>
            break;
        case 'funstuff':
            return <Funstuff/>
            break;
        case 'officelive':
            return <Officelive/>
            break;
        case 'healthvault':
            return <Healthvault/>
            break;
        case 'moonlighting':
            return <Moonlighting/>
            break;
        case 'audiencescience':
            return <Officelive/>
            break;
        case 'tools':
            return <Tools/>
            break;
        case 'urbanearth':
            return <Urbanearth/>
            break;
        case 'valueappeal':
            return <Valueappeal/>
            break;
        case 'navy':
            return <Navy/>
            break;
    }
}

ProjectDetails.propTypes = {
    data: React.PropTypes.object.isRequired
}

export default ProjectDetails;