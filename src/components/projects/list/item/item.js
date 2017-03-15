
import React, { Component } from 'react'
import styles from './styles.less';
import Scroll from 'react-scroll';
import classNames from 'classnames';
let scroller = Scroll.animateScroll;

export default class ProjectsListItem extends Component {
    static propTypes = {
        selectedProjectElementId: React.PropTypes.string,
        setSelectedProjectElementId: React.PropTypes.func.isRequired,
        setSelectedProjectItem: React.PropTypes.func.isRequired,
        data: React.PropTypes.object.isRequired,
        elementId: React.PropTypes.string.isRequired,
        location: React.PropTypes.object.isRequired
    }
   
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false,
            h: {
                height: '300px'
            } 
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.isExpanded) {
            if (nextProps.selectedProjectElementId !== this.props.elementId) {
                this.setState({ isExpanded: false });
            }
        }

        if (this.props.location.pathname !== nextProps.location.pathname) {
            this.props.setSelectedProjectElementId(null);
            this.props.setSelectedProjectItem(null);
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.state.isExpanded !== nextState.isExpanded) {
            if (nextState.isExpanded) {
                this.setState({
                    h: { height: '850px' }
                });
            }
            else {
                this.setState({
                    h: { height: '300px' }
                });
            }
        }
    }

    _handleClick() {
        this.props.setSelectedProjectElementId(null);
        this.props.setSelectedProjectItem(null);
        this.setState({
            isExpanded: false,
            h: { height: '300px' }
        });
        
        if (!this.state.isExpanded) {
            this.props.setSelectedProjectElementId(this.props.elementId);
            this.props.setSelectedProjectItem(this.props.data);
            this.setState({
                isExpanded: true,
                h: { height: '850px' }
            });

        }
   
        this.timer = setTimeout(() => {
            let scrollY = window.scrollY || document.documentElement.scrollTop;
            let element = document.getElementById(this.props.elementId);
            let elementTop = Math.round(element.children[0].getBoundingClientRect().bottom + scrollY);
            
            scroller.scrollTo(elementTop - 115, {
                smooth: true,
                duration: 450,
                delay: 0
            });
        }, 0);
    }

    componentDidUnMount() {
        clearTimeout(this.timer);
    }

    _setContainerClassName() {
        return classNames(styles.container, { [styles.active]: this.state.isExpanded });
    }

    render() {
        return (
            <div id={this.props.elementId} style={this.state.h} className={this._setContainerClassName()} >
                <a onClick={(event) => this._handleClick(event)} className={styles.link}>
                    <div className={styles.imageContainer}>
                        <img className={styles.image} src={this.props.data.smallImage} />
                    </div>    
                    <div className={styles.content}>
                        <div className={styles.title}>{this.props.data.title}</div>
                    </div>
                    <div className={styles.background}></div>
                </a>
            </div>
        )
    }
}