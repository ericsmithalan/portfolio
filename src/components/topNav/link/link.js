
import React, { Component } from 'react'
import styles from './styles.less';
import Scroll from 'react-scroll';
import { Link } from 'react-router';

let scroller = Scroll.animateScroll;

export default class NavLink extends Component {
    static propTypes = {
        data: React.PropTypes.object.isRequired,
        index: React.PropTypes.number.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            isSelected: false,
            className: styles.navLink,
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this._updateScroll);
        let scrollY = window.scrollY || document.documentElement.scrollTop;
        
        if (this.props.data.to === null) { 
            if (scrollY === 0 && this.props.index === 0) {
                this.setState({
                    className: styles.navLinkSelected,
                    isSelected: true
                });
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this._updateScroll);
    }

    _updateScroll = () => {
        let scrollY = window.scrollY || document.documentElement.scrollTop;
        let element = document.getElementById(this.props.data.scrollTo);
        let elementTop = Math.round(element.getBoundingClientRect().top + scrollY);
        let elementBottom = Math.round(element.getBoundingClientRect().bottom + scrollY);

        if ((scrollY >= (elementTop - 400)) && scrollY <= (elementBottom - 400)) {
            this.setState({
                className: styles.navLinkSelected,
                isSelected: true
            })
        }
        else {
            this.setState({
                className: styles.navLink,
                isSelected: false
            })
        }
    }

    _handleClick(link, index) { 
        let scrollY = window.scrollY || document.documentElement.scrollTop;
        let element = document.getElementById(this.props.data.scrollTo);
        let elementTop = Math.round(element.getBoundingClientRect().top + scrollY);

        scroller.scrollTo(elementTop, {
            smooth:true,
            duration:350,
            delay: 0
        });
    }

    render() {
        let Icon = this.props.data.image

        if (this.props.data.to !== null) {
            return (
                <Link to={this.props.data.to} className={ styles.navLink }>
                    <Icon className={styles.image}  />
                    <div className={styles.title}>{this.props.data.title}</div>
                    <div className={styles.background}></div>
                </Link>
            )
        }
        else {
            return (
                <a onClick={() => this._handleClick() } href={this.props.data.href} className={ this.state.className }>
                    <Icon className={styles.image} />
                    <div className={styles.title}>{this.props.data.title}</div>
                    <div className={styles.background}></div>
                </a>
            )
        }
    }
}