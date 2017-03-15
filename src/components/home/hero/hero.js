
import React, { Component, Animated } from 'react'
import styles from './styles.less';

export default class Hero extends Component {
    static propTypes = {
        id: React.PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            height: {
                minHeight: props.height
            }
        };
    }

    componentWillMount() {
        this._updateHeight();
        window.removeEventListener("resize", this._updateHeight);
    }

    componentDidMount() {
        window.addEventListener("resize", this._updateHeight);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this._updateHeight);
    }

    _updateHeight = () => {
        this.setState(
            {
                height: {
                    minHeight: window.innerHeight
                }
            }
        );
    }

    render() {
        return (
            <div id={this.props.id} className={styles.container} style={this.state.height}>
                <h1 className={styles.title}>
                    ERIC SMITH
                </h1>
                <h4 className={styles.subTitle}>
                    designer/coder
                </h4>
                <div className={styles.experience}>
                   passionate about user experience design and ui development.
                </div>
            </div>
        )
    }
}