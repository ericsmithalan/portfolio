
import React, { Component } from 'react'
import styles from './styles.less';
import { Link } from 'react-router';
import imageStyles from '../../../common/styles/images.less';
import classNames from 'classnames';

export default class DetailNavLink extends Component {
    static propTypes = {
        data: React.PropTypes.object.isRequired,
        to: React.PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props);
    }

    _setIcon() {
        if (typeof this.props.data.icon === 'function') {
            var Icon = this.props.data.icon;
            return <Icon className={styles.mdIcon} />
        }
        else {
            return <div className={this._getImageClass()} />
        }
    }

     _getImageClass() {
        let iconStyle = null
            
        JSON.parse(JSON.stringify(imageStyles), (key, value) => { 
            if (key.toString() === 'icon_' + this.props.data.id) {
                 
                iconStyle = value;
                return;
            }
        });
       
        return classNames(styles.icon, iconStyle);
    }

     _getLinkClass() {
        if (!this.props.data.isReady){
            return classNames(styles.container, styles.notReady);
        }

        return styles.container;
    }    
    render() {
        return (
            <Link
                activeClassName={styles.active}
                to={this.props.to}
                className={this._getLinkClass()}>
                    <div className={styles.background} />
                    {this._setIcon()}
                    <div className={styles.text}>
                        <div className={styles.title}>{this.props.data.title}</div>    
                        <div className={styles.year}>{this.props.data.end}</div>
                    </div>
            </Link>
        )
    }
}
