import React, { Component } from 'react'
import styles from './styles.less';
import { TopNav, Skills, ProjectIntro, ContentSection, ProjectDetails } from '../';
import { ProjectsListContainer } from '../../containers';
import { NavData, ProjectsData } from '../../data';
import Scroll from 'react-scroll';

let scroller = Scroll.animateScroll;

export default class Project extends Component {
    static propTypes = {
        setSelectedProjectElementId: React.PropTypes.func.isRequired,
        setSelectedProjectItem: React.PropTypes.func.isRequired,
        setIsLeftNavVisibility: React.PropTypes.func.isRequired,
        isMobile: React.PropTypes.bool.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            item: {},
        }
    }

    componentWillReceiveProps(nextProps) {
        this._setItem(nextProps);
        if (this.props.location.pathname !== nextProps.location.pathname) {
            this.props.setSelectedProjectElementId(null);
            this.props.setSelectedProjectItem(null);

            scroller.scrollTo(0, {
                smooth: true,
                duration: 300,
                delay: 0
            });

            if (nextProps.isMobile) {
                this.props.setIsLeftNavVisibility(false);
            }
        }
    }

    _setItem(props) {
        let item = ProjectsData.filter(card => {
            return card.id === props.params.projectId;
        })

        this.setState({
            item: item[0]
        });
    }

    componentWillMount() {
        this._setItem(this.props);

        if (!this.props.isMobile) {
            this.props.setIsLeftNavVisibility(true);
        }
        else {
            this.props.setIsLeftNavVisibility(false);
        }
        
        scroller.scrollTo(0, {
            smooth: true,
            duration:0,
            delay: 0
        });
    }

    render() {
        return (
            <div id="projectContainer" className={styles.container}> 
                <div id='containerOne'>
                    <ProjectIntro data={this.state.item} />
                </div>
                <div id='containerTwo'>
                    <ContentSection
                        title='Job Details'
                        paragraph=''
                    />
                    <ProjectDetails data={this.state.item} />
                </div>

                <div id='containerThree'>
                    <ContentSection
                        title='Examples'
                        paragraph=''
                    />
                    <ProjectsListContainer location={this.props.location} data={this.state.item} />
                </div>

                <div id='containerFour'>
                    <ContentSection
                        title='Skills &amp; Tools'
                        paragraph=''
                    />
                    <Skills category='all' legend={false} size='small' data={this.state.item} />
                </div>    
                <TopNav data={NavData.project} />
            </div>  
        )
    }
}
