
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { appAction } from '../../../redux/actions';
import { Alert } from '../../../components';

const stateToProps = state => ({
  isAlertVisible: state.getIn(['app', 'isAlertVisible']),
});

const dispatchToProps = dispatch => bindActionCreators({
  setIsAlertVisible: appAction.setIsAlertVisible,
}, dispatch);

export default connect(stateToProps, dispatchToProps)(Alert);

