
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { projectAction } from '../../../../redux/actions';
import { ProjectViewer } from '../../../../components';

const stateToProps = state => ({
  isLeftNavVisible: state.getIn(['leftNav', 'isLeftNavVisible']),
  selectedProjectElementId: state.getIn(['project', 'selectedProjectElementId']),
  selectedProjectItem: state.getIn(['project', 'selectedProjectItem']),
});

const dispatchToProps = dispatch => bindActionCreators({
  setSelectedProjectSubItem: projectAction.setSelectedProjectSubItem,
  setSelectedProjectItem: projectAction.setSelectedProjectItem,
  setSelectedProjectElementId: projectAction.setSelectedProjectElementId,
}, dispatch);

export default connect(stateToProps, dispatchToProps)(ProjectViewer);

