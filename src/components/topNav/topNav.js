import React, { Component } from 'react'
import styles from './styles.less';
import NavLink from './link/link';

const TopNav = (props) => {
    return (
        <div className={styles.container}> 
            <div className={styles.navLinks}>
                {
                    props.data.map((link, index) => {
                        return (
                            <NavLink key={index} data={link} index={index} />
                        )
                    })
                }
            </div>
            <div className={styles.background}></div>
        </div>
    )
}

TopNav.propTypes = {
    data: React.PropTypes.array.isRequired,
}

export default TopNav;