import React from 'react'
import styles from './styles.less';
import {Link} from 'react-router';
import imageStyles from '../../../common/styles/images.less';
import classNames from 'classnames';

const DetailNavLink = (props) => {
    const setIcon = () => {
        if (typeof props.data.icon === 'function') {
            var Icon = props.data.icon;
            return <Icon className={styles.mdIcon}/>
        } else {
            return <div className={getImageClass()}/>
        }
    }

    const getImageClass = () => {
        let iconStyle = null

        JSON.parse(JSON.stringify(imageStyles), (key, value) => {
            if (key.toString() === 'icon_' + props.data.id) {

                iconStyle = value;
                return;
            }
        });

        return classNames(styles.icon, iconStyle);
    }

    const getLinkClass = () => {
        if (!props.data.isReady) {
            return classNames(styles.container, styles.notReady);
        }

        return styles.container;
    }

    return (
        <Link activeClassName={styles.active} to={props.to} className={getLinkClass()}>
            <div className={styles.background}/> {setIcon()}
            <div className={styles.text}>
                <div className={styles.title}>{props.data.title}</div>
                <div className={styles.year}>{props.data.end}</div>
            </div>
        </Link>
    )
}

DetailNavLink.propTypes = {
    data: React.PropTypes.object.isRequired,
    to: React.PropTypes.string.isRequired
}

export default DetailNavLink;