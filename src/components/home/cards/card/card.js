
import React, { Component } from 'react';
import styles from './styles.less';
import { Link } from 'react-router'
import imageStyles from '../../../../common/styles/images.less';
import classNames from 'classnames';

export default class Card extends Component {
    static propTypes = {
        data: React.PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
    }

    _getImageClass() {
        let iconStyle = null
        JSON.parse(JSON.stringify(imageStyles), (key, value) => { 
            if (key.toString() === this.props.data.id + '_sm') {
                iconStyle = value;
                return;
            }
        });

        return classNames(styles.image, iconStyle);
    }

    _getContainerClass() {
        if (!this.props.data.isReady) {
            return classNames(styles.container, styles.notReady);
        }

        return styles.container;
    }

    render() {
        return (
            <div className={this._getContainerClass()}>
                <Link to={this.props.data.url} className={styles.content}>
                    <div className={styles.date}>{this.props.data.start} - {this.props.data.end}</div>
                    <div className={styles.imageContainer}>
                        <div className={this._getImageClass()} />
                    </div>
                    <div className={styles.title}>
                        {this.props.data.roll}
                    </div>
                    <div className={styles.description}>
                        {this.props.data.companyInfo}
                    </div>
                    <div className={styles.background}></div>    
                </Link>
            </div>
        )
    }
}