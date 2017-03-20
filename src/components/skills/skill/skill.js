import React from 'react'
import styles from './styles.less';
import imageStyles from '../../../common/styles/images.less';
import classNames from 'classnames';

const Skill = (props) => {
    const setContainerClassName = () => {
        let styleName = {}
        switch (props.data.level) {
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

    const getImageClass = () => {
        let iconStyle = null

        JSON.parse(JSON.stringify(imageStyles), (key, value) => {
            if (key.toString() === props.data.id) {

                iconStyle = value;
                return;
            }
        });
        return classNames(styles.image, iconStyle);
    }

    if (props.size === 'icon') {
        return (
            <a
                title={props.data.title}
                href={props.data.url}
                target='_blank'
                className={classNames(styles.container, styles.iconSize)}>
                <div className={styles.background}></div>
                <div className={getImageClass()}/>
            </a>
        )
    } else if (props.size === 'small') {
        return (
            <a
                title={props.data.title}
                href={props.data.url}
                target='_blank'
                className={classNames(styles.container, styles.smallSize)}>
                <div className={styles.background}></div>
                <div className={getImageClass()}/>
                <div className={styles.title}>{props.data.title}</div>
            </a>
        )
    } else {
        return (
            <a
                href={props.data.url}
                target='_blank'
                className={setContainerClassName()}>
                <div className={styles.background}></div>
                <div className={styles.bar}>
                    <div className={getImageClass()}/>
                    <div className={styles.contentContainer}>
                        <div className={styles.title}>{props.data.title}</div>
                    </div>
                </div>
            </a>
        )
    }
}

Skill.propTypes = {
    size: React.PropTypes.string.isRequired,
    data: React.PropTypes.object
}

export default Skill;