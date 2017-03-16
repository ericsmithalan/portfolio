import React, {Component} from 'react';
import styles from './styles.less';
import {Skills} from '../../../components';

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
                        <p>
                            I've been asked to share my source code for this website a few times, so here it is. 
                        </p>
                        <div className={styles.linkContainer}>
                            <img className={styles.githubIcon} src={require('images/GitHub.png')}/>
                            <a target="blank" href="https://github.com/heathornhawk/portfolio">View Project</a>
                        </div>
                        <Skills
                            legend={false}
                            ategory='all'
                            size='small'
                            ids={[
                            'react',
                            'npm',
                            'redux',
                            'es6',
                            'webpack',
                            'babel',
                            'html',
                            'css',
                            'javascript',
                            'less',
                            'photoshop',
                            'affinitydesigner',
                            'git'
                        ]}/>
                    </div>
                    <div className={styles.item}>
                        <h4>Weather App - Angular 1</h4>
                        <p>
                            I was asked by a company to build a QUICK weather app as a part of my interview
                            process. Here it is...
                        </p>
                        <div className={styles.linkContainer}>
                            <img className={styles.githubIcon} src={require('images/GitHub.png')}/>
                            <a target="blank" href="https://github.com/heathornhawk/weather-app">View Project</a>
                        </div>
                        <Skills
                            legend={false}
                            ategory='all'
                            size='small'
                            ids={[
                            'angular',
                            'npm',
                            'grunt',
                            'html',
                            'css',
                            'javascript',
                            'sass',
                            'bower',
                            'sketch',
                            'git'
                        ]}/>
                    </div>

                    <div className={styles.item}>
                        <h4>Ghost - WPF</h4>
                        <p>
                            This was an application I built because I hated redlining my designs! 
                            I still use this app when I'm working on a windows machine.
                        </p>
                        <div className={styles.linkContainer}>
                            <a target="blank" href={require('downloads/Ghost.zip')}>Download Application (Windows Only)</a>
                        </div>
                        <Skills
                            legend={false}
                            ategory='all'
                            size='small'
                            ids={['wpf', 'csharp', 'xaml', 'photoshop', 'windows']}/>
                    </div>

                    <div className={styles.item}>
                        <h4>HVCC - WPF Prototype</h4>
                        <p>
                            This was my attempt at extending Ghost in a way that could be used with a
                            prototype. Developers installed this application and used it to guide them
                            through the UI. They also used it to verify their work to make sure it matched
                            the design EXACTLY! 
                        </p>
                        <p>
                            Prototypes with this level of realism were unheard of back
                            in the day. I had built a few of these that were used in usability studies. This is just one example.
                        </p>
                        <div className={styles.linkContainer}>
                            <a target="blank" href={require('downloads/HVCC.zip')}>Download Application (Windows Only)</a>
                        </div>
                        <Skills
                            legend={false}
                            ategory='all'
                            size='small'
                            ids={['wpf', 'csharp', 'xaml', 'photoshop', 'windows']}/>
                    </div>

                    <br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
            </div>
        );
    }
}
