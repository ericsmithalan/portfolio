
import React, { Component } from 'react'
import styles from './styles.less';
import imageStyles from '../../../common/styles/images.less';
import classNames from 'classnames';

export default class Skill extends Component {
    static propTypes = {
        size: React.PropTypes.string.isRequired,
        data: React.PropTypes.object,
    }

    constructor(props) {
        super(props);
    }

    _setContainerClassName() {
        let styleName = {}
        switch (this.props.data.level){
            case 1:
                styleName = styles.one;
                break;
            case 2:
                styleName = styles.two;
                break;  
            case 3:
                styleName = styles.three;
                break;
        }
        return classNames(styles.container, styleName);
    }

    _getImageClass() {
        let iconStyle = null
            
        JSON.parse(JSON.stringify(imageStyles), (key, value) => { 
            if (key.toString() === this.props.data.id) {
                 
                iconStyle = value;
                return;
            }
        });
        return classNames(styles.image, iconStyle);
    }

    render() {
        if (this.props.size === 'icon') {
            return (
                <a title={this.props.data.title} href={this.props.data.url} target='_blank' className={classNames(styles.container, styles.iconSize)}>
                    <div className={styles.background}></div>
                    <div className={this._getImageClass()} />
                </a>
            )
        }
        else if (this.props.size === 'small') {
            return (
                <a title={this.props.data.title} href={this.props.data.url} target='_blank' className={classNames(styles.container, styles.smallSize)}>
                    <div className={styles.background}></div>
                    <div className={this._getImageClass()} />
                    <div className={styles.title}>{this.props.data.title}</div>
                </a>
            )    
        }
        else {
            return (
                <a href={this.props.data.url} target='_blank' className={this._setContainerClassName()}>
                    <div className={styles.background}></div>
                    <div className={styles.bar}>
                        <div className={this._getImageClass()} />
                        <div className={styles.contentContainer}>
                            <div className={styles.title}>{this.props.data.title}</div>
                        </div>
                    </div>
                </a>
            )
        }
    }
}