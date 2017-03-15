
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { leftNavAction, projectAction } from '../../../../redux/actions';
import { LeftNavToggleButton } from '../../../../components';

const stateToProps = state => ({
  isLeftNavVisible: state.getIn(['leftNav', 'isLeftNavVisible']),
});
const dispatchToProps = dispatch => bindActionCreators({
  setSelectedProjectElementId: projectAction.setSelectedProjectElementId,
  setIsLeftNavVisibility: leftNavAction.setIsLeftNavVisibility,
}, dispatch);

export default connect(stateToProps, dispatchToProps)(LeftNavToggleButton);
