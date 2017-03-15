import React, { Component } from 'react'
import styles from './styles.less';
import { Resume } from '../../../../data';
import { Skills } from '../../../../components';

export default class Job extends Component {
    static propTypes = {
        data: React.PropTypes.object
    }

    render(){
        return (
            <div className={styles.container}>
                <div className={styles.company}>
                    { this.props.data.company }, { this.props.data.location }
                </div>
                <div className={styles.title}>
                    { this.props.data.title }
                </div>
                <div className={styles.dates}>
                    { this.props.data.start } to { this.props.data.end }
                </div>
               
                <p className={styles.summary}>
                     { this.props.data.summary }
                </p>
                <ul className={styles.accomplishments}>
                { 
                    this.props.data.accomplishments.map((accomplishment, index) => {
                        return (
                            <li key={index}>{accomplishment}</li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}

// company: '',
// location: '',
// start: '',
// end: '',
// title: '',
// summary: '',
// accomplishments: [
// ''
// ]