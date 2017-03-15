
import React, { Component } from 'react'
import styles from './styles.less';
import NavLink from './link/link';

export default class TopNav extends Component {
    static propTypes = {
        data: React.PropTypes.array.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        }
    }

    render() {
        return (
            <div ref="navContainer" className={styles.container}> 
                <div className={styles.navLinks}>
                    {
                        this.state.data.map((link, index) => {
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
}