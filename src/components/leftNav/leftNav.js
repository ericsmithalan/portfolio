import React from 'react'
import styles from './styles.less';
import DetailNavLink from './link/link';
import { MdHome, MdLibraryBooks } from 'react-icons/md';
import classNames from 'classnames';
import { ProjectsData } from '../../data';

const LeftNav = (props) => {
    const handleMenuClick = (link, index) => { 
        if (props.isLeftNavVisible) {
            closeMenu();
        }
        else {
            openMenu()
        }
    }

    const setMainClass = () => {
        if (props.isLeftNavVisible) {
           return classNames(styles.container, { [styles.active]: true });
        }
        else {
            return styles.container;
        }
    }

    return (
        <div className={setMainClass()} >
            <div className={styles.widthContainer}></div>
            <div className={styles.navigation}>
                <DetailNavLink
                    to={'/home'}
                    key={1000}
                    data={{
                        title: 'Home',
                        icon: MdHome,
                        isReady: true
                    }} />
                    <DetailNavLink
                    to={'/resume'}
                    key={1978}
                    data={{
                        title: 'Resume',
                        icon: MdLibraryBooks,
                        isReady: true
                    }} />
                <div className={styles.spacer}></div>
                {
                    ProjectsData.filter(function(item) { 
                        return item.type === 'work';
                    }).sort(function(a, b) { 
                        return b.start - a.start
                    }).map(function (item, index) {
                        return (
                            <DetailNavLink
                                to={item.url}
                                key={index}
                                data={item} />
                        )
                    })
                }
                <div className={styles.spacer}></div>
                {
                    ProjectsData.filter(function(item) { 
                        return item.type === 'other';
                    }).map(function (item, index) {
                        return (
                            <DetailNavLink
                                {...props}
                                to={item.url}
                                key={index}
                                data={item} />
                        )
                    })
                }
            </div>
            <div className={styles.background}></div>
        </div>
    )
}

LeftNav.propTypes = {
    isLeftNavVisible: React.PropTypes.bool.isRequired,
}
export default LeftNav;
