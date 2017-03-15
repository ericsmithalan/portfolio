
import React, { Component } from 'react'
import styles from './styles.less';
import Button from './button/button';

export default class ProjectViewer extends Component {
    static propTypes = {
        selectedProjectElementId: React.PropTypes.string,
        selectedProjectItem: React.PropTypes.object,
        setSelectedProjectSubItem: React.PropTypes.func.isRequired,
        isLeftNavVisible: React.PropTypes.bool.isRequired,
        setSelectedProjectItem: React.PropTypes.func.isRequired,
        setSelectedProjectElementId: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            isLargeViewerVisible: false,
            styles: {
                left: 0,
                right: 0,
                top: 0,
                height: 850
           }
        }
    }

    componentDidUnMount() {
        clearTimeout(this.timer);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.selectedProjectElementId !== nextProps.selectedProjectElementId) {
            let self = this;
            self.setState({ styles: { display: 'none' } });
            
            this.timer = setTimeout(() => { 
                let scrollY = window.scrollY || document.documentElement.scrollTop;
                let element = document.getElementById(nextProps.selectedProjectElementId);
                if (element) {
                    let bottom = Math.round(element.children[0].getBoundingClientRect().bottom + scrollY);
                    if (nextProps.isLeftNavVisible) {
                        self.setState({
                            styles: {
                            left: 280,
                            right: 0,
                            top: bottom + 5,
                            height: (850 -  element.children[0].offsetHeight) - 20
                            }
                        })
                    }
                    else {
                        self.setState({
                            styles: {
                            left: 0,
                            right: 0,
                            top: bottom + 5,
                            height: (850 -  element.children[0].offsetHeight) - 20
                            }
                        })
                    }
                }
            },500)
        }
    }

    componentDidUpdate() { 
        if (this.props.selectedProjectElementId !== null && this.props.selectedProjectItem !== null) {
            if (document.getElementById(this.props.selectedProjectElementId)) {
                let element = document.getElementById(this.props.selectedProjectElementId).children[0];
                if (this.props.isLeftNavVisible) { 
                    this.refs.arrowIcon.style.left =
                    element.getBoundingClientRect().left + (element.offsetWidth / 2 - 280) + 'px';
                }
                else {
                    this.refs.arrowIcon.style.left =
                    element.getBoundingClientRect().left + (element.offsetWidth / 2 - 30) + 'px';
                }
            }
        }
    }

    _handleItemClick(image) {
        this.props.setSelectedProjectSubItem(image);
    }
    
    render() {
        if (this.props.selectedProjectItem === null || this.props.selectedProjectElementId == null) {
            return (<div></div>)
        }

        return (
            <div className={styles.container} style={this.state.styles}>
                <Button
                    setSelectedProjectItem={this.props.setSelectedProjectItem}
                    setSelectedProjectElementId={this.props.setSelectedProjectElementId}
                />
                <img ref="arrowIcon" className={styles.arrowIcon} src={require('images/projectdetail-arrow.png')} />
                <div className={styles.content}>
                    {
                        this.props.selectedProjectItem.previewImages.map((image, index) => {
                            return (
                                <a href='javascript:void(0)' key={index} onClick={() => {this._handleItemClick(image)}} className={styles.imageContainer}>
                                    <img className={styles.image} src={image.image} />
                                    <div className={styles.imageBackground}/>
                                </a>
                            )
                        })
                    }
                    <div className={styles.background}></div>
                </div>
                
            </div> 
        )
    }
}
