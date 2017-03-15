
import React, { Component } from 'react'
import styles from './styles.less';
import imageStyles from '../../../common/styles/images.less';
import classNames from 'classnames';

export default class Intro extends Component {
    static propTypes = {
        data: React.PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
    }

    _getImageClass() {
        let iconStyle = null
        JSON.parse(JSON.stringify(imageStyles), (key, value) => { 
            if (key.toString() === this.props.data.id) {
                iconStyle = value;
                return;
            }
        });
       
        return classNames(styles.logo, iconStyle);
    }

    render() {
        return (
            <div id='containerOne' className={styles.container}>
                <div className={styles.headerContent}>
                    <div className={this._getImageClass()} /> 
                    <div className={styles.roll}>
                        {this.props.data.roll}
                    </div>
                    <div className={styles.dates}>
                        {this.props.data.start} - {this.props.data.end}
                    </div>
                    <div className={styles.description}>
                        {this.props.data.companyInfo}
                    </div>  
                </div>
                <div className={styles.containerMainImage}>
                    <img className={styles.mainImage} src={this.props.data.mainImage} />
                </div>
            </div>
        )
    }
}