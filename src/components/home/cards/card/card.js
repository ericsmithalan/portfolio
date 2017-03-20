import React from 'react';
import styles from './styles.less';
import { Link } from 'react-router'
import imageStyles from '../../../../common/styles/images.less';
import classNames from 'classnames';

const Card = (props) => {
    const getImageClass = () => {
        let iconStyle = null
        JSON.parse(JSON.stringify(imageStyles), (key, value) => { 
            if (key.toString() === props.data.id + '_sm') {
                iconStyle = value;
                return;
            }
        });

        return classNames(styles.image, iconStyle);
    }

    const getContainerClass = () => {
        if (!props.data.isReady) {
            return classNames(styles.container, styles.notReady);
        }

        return styles.container;
    }

    return (
        <div className={getContainerClass()}>
            <Link to={props.data.url} className={styles.content}>
                <div className={styles.date}>{props.data.start} - {props.data.end}</div>
                <div className={styles.imageContainer}>
                    <div className={getImageClass()} />
                </div>
                <div className={styles.title}>
                    {props.data.roll}
                </div>
                <div className={styles.description}>
                    {props.data.companyInfo}
                </div>
                <div className={styles.background}></div>    
            </Link>
        </div>
    )
}

Card.propTypes = {
    data: React.PropTypes.object.isRequired
}

export default Card;