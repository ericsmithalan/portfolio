
import React, { Component } from 'react'
import styles from './styles.less';
import { MdClose ,MdInfoOutline} from 'react-icons/md';
import classNames from 'classnames';

export default class Alert extends Component {

    static propTypes = {
        setIsAlertVisible: React.PropTypes.func.isRequired,
        isAlertVisible: React.PropTypes.bool.isRequired
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let self = this;
        this.timer = setTimeout(() => { 
            self.props.setIsAlertVisible(true);
        }, 4000)
    }

    componentDidUnMount() {
        clearTimeout(this.timer);
    }

    _setContainerClass() {
        return classNames(styles.container, { [styles.active]: this.props.isAlertVisible });
    }

    _handleCloseClick() {
        this.props.setIsAlertVisible(false);
    }

    render() {
        return (
            <div className={this._setContainerClass()}>
                <div className={styles.info}>
                    <MdInfoOutline/>
                </div>    
                <div className={styles.text}>    
                    Please note that this site is under construction so you will notice a lot of placeholder content. e.g. Lorem ipsum dolor...
                </div>
                <a onClick={() => {this._handleCloseClick()}} href='javascript:void(0)' className={styles.close}>
                    <MdClose/>
                </a>
                <div className={styles.background}></div>
            </div>
        )
    }
}