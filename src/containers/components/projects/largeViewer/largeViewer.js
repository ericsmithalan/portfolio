import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { projectAction } from '../../../../redux/actions';
import { ProjectViewerLarge } from '../../../../components';

const stateToProps = state => ({
  selectedProjectSubItem: state.getIn(['project', 'selectedProjectSubItem']),
  selectedProjectItem: state.getIn(['project', 'selectedProjectItem']),
});

const dispatchToProps = dispatch => bindActionCreators({
  setSelectedProjectSubItem: projectAction.setSelectedProjectSubItem,
}, dispatch);

export default connect(stateToProps, dispatchToProps)(ProjectViewerLarge);

