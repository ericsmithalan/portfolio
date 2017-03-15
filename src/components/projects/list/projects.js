
import React, { Component } from 'react'
import styles from './styles.less';
import ProjectsListItem from './item/item';

export default class ProjectsList extends Component {
    static propTypes = {
        selectedProjectElementId: React.PropTypes.string,
        setSelectedProjectElementId: React.PropTypes.func.isRequired,
        setSelectedProjectItem: React.PropTypes.func.isRequired,
        data: React.PropTypes.object.isRequired,
        location: React.PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.container}>
               {
                    this.props.data.projects.map((project, index) => {
                        var elementId = this.props.data.title.replace(/\s/g, '').toLowerCase() + '_' + index;
                        return (
                            <ProjectsListItem
                                key={'project_' + index}
                                elementId={elementId}
                                location={this.props.location}
                                selectedProjectElementId={this.props.selectedProjectElementId}
                                setSelectedProjectItem={this.props.setSelectedProjectItem}
                                setSelectedProjectElementId={this.props.setSelectedProjectElementId}
                                data={project}
                            />
                        )
                    })
                }
            </div>
        )
    }
}