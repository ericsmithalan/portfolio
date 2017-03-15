import React, { Component } from 'react'
import styles from './styles.less';
import { Resume } from '../../../data';
import { Skills } from '../../../components';
import Job from './job/job';

export default class Jobs extends Component {
    static propTypes = {
        setIsMobile: React.PropTypes.func
    }

    render(){
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
}