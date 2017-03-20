import React  from 'react'
import styles from './styles.less';
import { MdClose } from 'react-icons/md';

const DetailNavButton = (props) => {
    const handleClick = () => {
        props.setSelectedProjectSubItem(null);
    }

    return (
        <a href="javascript:void(0)" onClick={() => handleClick()} className={styles.container}>
            <MdClose className={styles.closeIcon}/>
            <div className={styles.background}></div>
        </a>
    )
}

DetailNavButton.propTypes = {
    setSelectedProjectSubItem: React.PropTypes.func.isRequired
}

export default DetailNavButton;