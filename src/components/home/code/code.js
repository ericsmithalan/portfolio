import React, {Component} from 'react';
import styles from './styles.less';
import { Skills } from '../../../components';


export default class Code extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.flexContainer}>
                    <div className={styles.item}>
                        <h4>Portfolio - React</h4>
                        <p>You can see all the source files for this website. </p>
                        <div className={styles.linkContainer}>
                            <img className={styles.githubIcon} src={require('images/GitHub.png')} />
                            <a target="blank" href="https://github.com/heathornhawk/portfolio">View Project</a>
                        </div>
                        <Skills
                            legend={false}
                            ategory='all'
                            size='small'
                            ids={['react','npm', 'redux', 'es6', 'webpack', 'babel', 'html', 'css', 'javascript', 'less', 'photoshop', 'affinitydesigner', 'git']} />
                    </div>
                    <div className={styles.item}>
                        <h4>Weather App - Angular 1</h4>
                        <p>
                            I was asked by a company to build a weather app as a part of my interview process. Here it is...
                        </p>
                        <div className={styles.linkContainer}>
                            <img className={styles.githubIcon} src={require('images/GitHub.png')} />
                            <a target="blank" href="https://github.com/heathornhawk/weather-app">View Project</a>
                        </div>
                        <Skills
                            legend={false}
                            ategory='all'
                            size='small'
                            ids={['angular', 'npm','grunt', 'html', 'css', 'javascript', 'sass', 'bower', 'sketch', 'git']} />
                    </div>

                    <br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
            </div>
        );
    }
}
