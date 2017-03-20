import React from 'react'
import styles from './styles.less';
import { Resume } from '../../../../data';
import { Skills } from '../../../../components';

const Job = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.company}>
                { props.data.company }, { props.data.location }
            </div>

            <div className={styles.title}>
                { props.data.title }
            </div>

            <div className={styles.dates}>
                { props.data.start } to { props.data.end }
            </div>
            
            <p className={styles.summary}>
                { props.data.summary }
            </p>

            <ul className={styles.accomplishments}>
            { 
                props.data.accomplishments.map((accomplishment, index) => {
                    return (
                        <li key={index}>{accomplishment}</li>
                    )
                })
            }
            </ul>
        </div>
    )
}

Job.propTypes = {
    data: React.PropTypes.object
}

export default Job;