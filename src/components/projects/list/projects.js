import React from 'react'
import styles from './styles.less';
import ProjectsListItem from './item/item';

const ProjectsList = (props) => {
    return (
        <div className={styles.container}>
            {
                props.data.projects.map((project, index) => {
                    var elementId = props.data.title.replace(/\s/g, '').toLowerCase() + '_' + index;
                    return (
                        <ProjectsListItem
                            key={'project_' + index}
                            elementId={elementId}
                            location={props.location}
                            selectedProjectElementId={props.selectedProjectElementId}
                            setSelectedProjectItem={props.setSelectedProjectItem}
                            setSelectedProjectElementId={props.setSelectedProjectElementId}
                            data={project}
                        />
                    )
                })
            }
        </div>
    )
}

ProjectsList.propTypes = {
    selectedProjectElementId: React.PropTypes.string,
    setSelectedProjectElementId: React.PropTypes.func.isRequired,
    setSelectedProjectItem: React.PropTypes.func.isRequired,
    data: React.PropTypes.object.isRequired,
    location: React.PropTypes.object.isRequired,
}

export default ProjectsList;