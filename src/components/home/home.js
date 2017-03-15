import React, { Component } from 'react'
import styles from './styles.less';
import { Hero, Skills, TopNav, Cards, Code, ContentSection, About } from '../../components';
import { NavData } from '../../data';

export default class Home extends Component {
    static propTypes = {
        setIsLeftNavVisibility: React.PropTypes.func.isRequired,
        setSelectedProjectElementId: React.PropTypes.func.isRequired,
        setSelectedProjectItem: React.PropTypes.func.isRequired,
        setSelectedProjectSubItem: React.PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.setIsLeftNavVisibility(false);
        this.props.setSelectedProjectElementId(null);
        this.props.setSelectedProjectItem(null);
        this.props.setSelectedProjectSubItem(null);
    }

    render() {
        return (
            <div className={styles.container}>
                <Hero id='heroContainer' />
                <div id='cardsContainer'>
                    <ContentSection
                        title='My Work'
                        paragraph='Most of my work has been in startups that were at the very beginning stages of the product development cycle. Fast pace environments with a strong focus on shipping quality.'
                    />
                    <Cards />
                </div>
                <div id='skillsContainer'>
                    <ContentSection
                        title='Skills &amp; Tools'
                        paragraph=''
                    />
                    <Skills category='all' legend={false} size='small' />
                </div>
                <div id='aboutContainer'>
                    <ContentSection
                        title='About Me'
                        paragraph=''
                    />
                    <About/>
                </div>
                <div id='codeContainer'>
                    <ContentSection
                        title='Code'
                        paragraph='These are some projects that I am putting out there for the world to see. Please feel free to provide any feedback!.'
                    />
                    <Code />
                </div>
                <TopNav data={ NavData.home } />
            </div>
        )
    }
}