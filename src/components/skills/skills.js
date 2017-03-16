import React, { Component } from 'react'
import styles from './styles.less';
import Skill from './skill/skill';
import Legend from './legend/legend';
import { SkillData } from '../../data';

export default class Skills extends Component {
    static propTypes = {
        size: React.PropTypes.string.isRequired,
        data: React.PropTypes.object,
        legend: React.PropTypes.bool,
        category: React.PropTypes.string,
        ids: React.PropTypes.array
    }

    constructor(props) {
        super(props);
        this.state = {
            skills: []
        }
    }

    componentWillMount() {
        this._setSkillsData(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this._setSkillsData(nextProps)
    }
    
    _setSkillsData(props) {
        let sortedData = SkillData.sort(function (a, b) { 
             return b.level - a.level;
        });
        
        if (props.data) {
             let arr = sortedData.filter((skill) => {
                if (props.data.skills.indexOf(skill.id) !== -1) {
                    return 1;
                }
                return 0
            })

            this.setState({
                skills: arr
            })
        }
         else {
            this.setState({
                skills: SkillData
            })
        }
    }

    _renderLegend() {
        if (this.props.legend) {
            return <Legend />
        }
    }

    _render() {
        if (typeof this.props.ids !== 'undefined') {
            return this.state.skills.filter(skill => this.props.ids.indexOf(skill.id) !== -1).map((skill, index) => {
                return <Skill size={this.props.size} key={index} index={index} data={skill} />
            })
        }
        else {
            if (this.props.category !== 'all') {
                return this.state.skills.filter(skill => skill.category === this.props.category).map((skill, index) => {
                    return <Skill size={this.props.size} key={index} index={index} data={skill} />
                })
            }
            else{
                return this.state.skills.map((skill, index) => {
                    return <Skill size={this.props.size} key={index} index={index} data={skill} />
                })
            }
        }
    }

    render() {
        return (
            <div className={styles.container}>
                {this._renderLegend()}
                <div className={styles.flexContainer}>  
                    {this._render()}
                </div>
            </div>
        )
    }
}