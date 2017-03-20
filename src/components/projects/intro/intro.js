import React from 'react'
import styles from './styles.less';
import imageStyles from '../../../common/styles/images.less';
import classNames from 'classnames';

const Intro = (props) => {
    const getImageClass = () => {
        let iconStyle = null
        JSON.parse(JSON.stringify(imageStyles), (key, value) => { 
            if (key.toString() === props.data.id) {
                iconStyle = value;
                return;
            }
        });
       
        return classNames(styles.logo, iconStyle);
    }

    return (
        <div id='containerOne' className={styles.container}>
            <div className={styles.headerContent}>
                <div className={getImageClass()} /> 
                <div className={styles.roll}>
                    {props.data.roll}
                </div>
                <div className={styles.dates}>
                    {props.data.start} - {props.data.end}
                </div>
                <div className={styles.description}>
                    {props.data.companyInfo}
                </div>  
            </div>
            <div className={styles.containerMainImage}>
                <img className={styles.mainImage} src={props.data.mainImage} />
            </div>
        </div>
    )
}

Intro.propTypes = {
    data: React.PropTypes.object.isRequired
}

export default Intro;