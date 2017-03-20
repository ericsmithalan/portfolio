import React, { Component } from 'react'
import styles from './styles.less';
import { MdClose } from 'react-icons/md';

const ViewerCloseButton = (props) => {
    const handleClick = () => {
        props.setSelectedProjectElementId(null);
        props.setSelectedProjectItem(null);
    }

    return (
        <a href="javascript:void(0)" onClick={handleClick} className={styles.container}>
            <MdClose className={styles.closeIcon}/>
            <div className={styles.background}></div>
        </a>
    )
}

ViewerCloseButton.propTypes = {
    setSelectedProjectElementId: React.PropTypes.func.isRequired,
    setSelectedProjectItem: React.PropTypes.func.isRequired,
}

export default ViewerCloseButton;