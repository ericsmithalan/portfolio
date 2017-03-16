import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Resume } from '../../components';
import { leftNavAction } from '../../redux/actions';

const dispatchToProps = dispatch => bindActionCreators({
  setIsLeftNavVisibility: leftNavAction.setIsLeftNavVisibility,
}, dispatch);

export default connect(null, dispatchToProps)(Resume);
