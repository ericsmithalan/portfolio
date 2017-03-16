import React, { Component } from 'react'
import styles from './styles.less';
import { MdFileDownload } from 'react-icons/md';
import { Resume } from '../../data';
import { Skills } from '../../components';
import Jobs from './jobs/jobs';

export default class Shell extends Component {
    static propTypes = {
        setIsLeftNavVisibility: React.PropTypes.func
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.setIsLeftNavVisibility(false)
    }

    render(){
        return (
            <div className={styles.container}>
                <div className={styles.spacer}></div>
                <a className={styles.button} href={require('downloads/Resume.zip')}>
                    <MdFileDownload className={styles.icon}/>
                    <div className={styles.text}>Download Resume</div>
                    <div className={styles.background}></div>
                </a>
                <div className={styles.section}>
                    <Jobs />
                </div>
            </div>
        )
    }
}