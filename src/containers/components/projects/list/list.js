
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { projectAction } from '../../../../redux/actions';
import { ProjectsList } from '../../../../components';

const stateToProps = state => ({
  selectedProjectElementId: state.getIn(['project', 'selectedProjectElementId']),
});

const dispatchToProps = dispatch => bindActionCreators({
  setSelectedProjectElementId: projectAction.setSelectedProjectElementId,
  setSelectedProjectItem: projectAction.setSelectedProjectItem,
}, dispatch);

export default connect(stateToProps, dispatchToProps)(ProjectsList);

