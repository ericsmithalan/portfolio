
import React, { Component } from 'react'
import styles from './styles.less';
import { MdClose, MdMenu } from 'react-icons/md';
import classNames from 'classnames';

export default class LeftNavToggleButton extends Component {
    static propTypes = {
        isLeftNavVisible: React.PropTypes.bool.isRequired,
        setSelectedProjectElementId: React.PropTypes.func.isRequired,
        setIsLeftNavVisibility: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }

    _handleClick() {
        this.props.setSelectedProjectElementId(null);

        if (this.props.isLeftNavVisible) {
            this.props.setIsLeftNavVisibility(false);
        }
        else {
            this.props.setIsLeftNavVisibility(true);
        }
    }

    _setClassNames(){
        return classNames(styles.container, { [styles.active]: this.props.isLeftNavVisible });
    }

    render() {
        return (
            <a href="javascript:void(0)" onClick={() => this._handleClick()} className={this._setClassNames()}>
                <MdClose className={styles.closeIcon}/>
                <MdMenu className={styles.menuIcon} />
                <div className={styles.linkText}>menu</div>
                <div className={styles.background}></div>
            </a>
        )
    }
}