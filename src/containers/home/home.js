import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Home } from '../../components';
import { projectAction, leftNavAction } from '../../redux/actions';

const dispatchToProps = dispatch => bindActionCreators({
  setIsLeftNavVisibility: leftNavAction.setIsLeftNavVisibility,
  setSelectedProjectElementId: projectAction.setSelectedProjectElementId,
  setSelectedProjectItem: projectAction.setSelectedProjectItem,
  setSelectedProjectSubItem: projectAction.setSelectedProjectSubItem,
}, dispatch);

export default connect(null, dispatchToProps)(Home);
