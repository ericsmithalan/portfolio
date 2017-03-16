import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LeftNav } from '../../../components';

const stateToProps = state => ({
  isLeftNavVisible: state.getIn(['leftNav', 'isLeftNavVisible']),
});

export default connect(stateToProps)(LeftNav);

