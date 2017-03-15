import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Shell } from '../../components';
import { appAction } from '../../redux/actions';

const dispatchToProps = dispatch => bindActionCreators({
  setIsMobile: appAction.setIsMobile,
}, dispatch);

export default connect(null, dispatchToProps)(Shell);
