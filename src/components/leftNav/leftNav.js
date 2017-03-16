import React, { Component } from 'react'
import styles from './styles.less';
import DetailNavLink from './link/link';
import { MdHome, MdLibraryBooks } from 'react-icons/md';
import classNames from 'classnames';
import { ProjectsData } from '../../data';

export default class LeftNav extends Component {
    static propTypes = {
        isLeftNavVisible: React.PropTypes.bool.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    _handleMenuClick(link, index) { 
        if (this.props.isLeftNavVisible) {
            this._closeMenu();
        }
        else {
            this._openMenu()
        }
    }

    _setMainClass() {
        if (this.props.isLeftNavVisible) {
           return classNames(styles.container, { [styles.active]: true });
        }
        else {
            return styles.container;
        }
    }

    render() {
        let self = this;
        return (
            <div ref='main' className={this._setMainClass()} >
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
                                    {...self.props}
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
}

