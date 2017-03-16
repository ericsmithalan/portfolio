import React, { Component } from 'react'
import styles from './styles.less';
import { MdClose } from 'react-icons/md';

export default class DetailNavButton extends Component {
    static propTypes = {
        setSelectedProjectSubItem: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }

    _handleClick() {
        this.props.setSelectedProjectSubItem(null);
    }

    render() {
        return (
            <a href="javascript:void(0)" onClick={() => this._handleClick()} className={styles.container}>
                <MdClose className={styles.closeIcon}/>
                <div className={styles.background}></div>
            </a>
        )
    }
}