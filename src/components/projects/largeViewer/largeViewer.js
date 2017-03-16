import React, { Component } from 'react'
import styles from './styles.less';
import Button from './button/button';

export default class ProjectLargeViewer extends Component {
    static propTypes = {
        selectedProjectSubItem: React.PropTypes.object,
        selectedProjectItem: React.PropTypes.object,
        setSelectedProjectSubItem: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            selectedImage: null,
            style: {
                height: 0,
                width: 0,
                top: 0,
                display: 'none'
            }
        }
   }

    componentWillReceiveProps(nextProps) { 
        if (nextProps.selectedProjectSubItem !== null) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }

        if (nextProps.selectedProjectSubItem !== this.selectedProjectSubItem) {
            let scrollY = window.scrollY || document.documentElement.scrollTop;
            this.setState({
                style: Object.assign({},
                    {
                        display: 'block',
                        height: Math.round(window.innerHeight),
                        maxHeight: Math.round(window.innerHeight),
                        minHeight: Math.round(window.innerHeight),
                        width: Math.round(window.innerWidth),
                        top: scrollY
                    })
            })

            if (nextProps.selectedProjectSubItem) {
                this.setState({
                    selectedImage: nextProps.selectedProjectSubItem.image
                });    
            }
        }
    }

    _handleSubItemClick(item) {
        this.props.setSelectedProjectSubItem(item);
    }

    render() {
        
        if (this.props.selectedProjectSubItem !== null) {
            return (
                <div className={styles.container} style={this.state.style}>
                    <Button setSelectedProjectSubItem={this.props.setSelectedProjectSubItem}/>    
                    <div className={styles.content}>
                        <img src={this.state.selectedImage} />
                    </div>
                    <div className={styles.thumbsContainer}>
                        {
                            this.props.selectedProjectItem.previewImages.map((item, index) => {
                                return <a href="javascript:void(0)" key={index} className={styles.imageContainer}><img onClick={() => { this._handleSubItemClick(item) }} className={styles.smallImage} src={item.image} /></a>
                            })
                        }
                    </div>
                    <div className={styles.background}></div>
                </div> 
            )
        }
        else {
            return (<div></div>)
        }
    }
}