import React from 'react'
import styles from './styles.less';
import { MdClose, MdMenu } from 'react-icons/md';
import classNames from 'classnames';

const LeftNavToggleButton = (props) => {
    const handleClick = () => {
        props.setSelectedProjectElementId(null);

        if (props.isLeftNavVisible) {
            props.setIsLeftNavVisibility(false);
        }
        else {
            props.setIsLeftNavVisibility(true);
        }
    }

    const setClassNames = () =>{
        return classNames(styles.container, { [styles.active]: props.isLeftNavVisible });
    }

    return (
        <a href="javascript:void(0)" onClick={() => handleClick()} className={setClassNames()}>
            <MdClose className={styles.closeIcon}/>
            <MdMenu className={styles.menuIcon} />
            <div className={styles.linkText}>menu</div>
            <div className={styles.background}></div>
        </a>
    )
}

LeftNavToggleButton.propTypes = {
    isLeftNavVisible: React.PropTypes.bool.isRequired,
    setSelectedProjectElementId: React.PropTypes.func.isRequired,
    setIsLeftNavVisibility: React.PropTypes.func.isRequired
}

export default LeftNavToggleButton;