import React, { Component } from 'react'
import styles from './styles.less';

export default class ContentSection extends Component {
    static propTypes = {
        paragraph: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
    }

    _renderParagraph() {
        if (this.props.paragraph !== null && this.props.paragraph !== '') {
            return <p className={styles.paragraph}>{this.props.paragraph}</p>
        }
        else {
            return <div className={styles.spacer}></div>;
        }
    }

    render() {
        return (
            <div className={styles.container}>
                <h2 className={styles.title}>{this.props.title}</h2>
                {this._renderParagraph()}
            </div>
        )
    }
}