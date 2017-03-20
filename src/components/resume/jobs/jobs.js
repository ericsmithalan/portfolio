import React from 'react'
import styles from './styles.less';
import { Resume } from '../../../data';
import { Skills } from '../../../components';
import Job from './job/job';

const Jobs = (props) => {
    return (
        <div className={styles.container}>
            <h3>Work Experience</h3>
            {
                Resume.jobs.map((job, index) => {
                    return (
                        <Job data={job} key={index} />
                    )
                })
            }
        </div>
    )
}

Jobs.propTypes = {
    setIsMobile: React.PropTypes.func
}

export default Jobs;