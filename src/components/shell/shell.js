import React, { Component } from 'react'
import styles from './styles.less';
import { 
    LeftNavContainer,
    LeftNavToggleButtonContainer,
    SmallProjectViewerContainer,
    LargeProjectViewerContainer
} from '../../containers';

export default class Shell extends Component {
    static propTypes = {
        setIsMobile: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this._setIsMobile();
        window.addEventListener("resize", this._setIsMobile); 
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this._setIsMobile);
    }

    _setIsMobile = () => {
        if (window.innerWidth <= 1024) {
            this.props.setIsMobile(true);
        }
        else {
            this.props.setIsMobile(false);
        }
    }

    render() {
        return (
            <div className={styles.shell}>
                <LeftNavToggleButtonContainer />
                <LeftNavContainer />
                <div className={styles.container}>
                    {this.props.children}
                    <SmallProjectViewerContainer />
                    <LargeProjectViewerContainer/>
                </div> 
            </div>
        )
    }
}