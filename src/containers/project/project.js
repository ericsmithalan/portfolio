import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Project } from '../../components';
import { projectAction, leftNavAction } from '../../redux/actions';

const stateToProps = state => ({
  isMobile: state.getIn(['app', 'isMobile']),
  selectedProjectElementId: state.getIn(['project', 'selectedProjectElementId']),
});

const dispatchToProps = dispatch => bindActionCreators({
  setSelectedProjectElementId: projectAction.setSelectedProjectElementId,
  setSelectedProjectItem: projectAction.setSelectedProjectItem,
  setIsLeftNavVisibility: leftNavAction.setIsLeftNavVisibility,
}, dispatch);

export default connect(stateToProps, dispatchToProps)(Project);
