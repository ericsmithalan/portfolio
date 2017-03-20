import React from 'react'
import styles from './styles.less';

const ContentSection = (props) => {

    const renderParagraph = () => {
        if (props.paragraph !== null && props.paragraph !== '') {
            return <p className={styles.paragraph}>{props.paragraph}</p>
        }
        else {
            return <div className={styles.spacer}></div>;
        }
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{props.title}</h2>
            {renderParagraph()}
        </div>
    )
}

ContentSection.propTypes = {
    paragraph: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
}

export default ContentSection;