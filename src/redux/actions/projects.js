

import { actionTypeConstants } from '../../common/constants/';

function setSelectedProjectElementId(value) {
  return {
    type: actionTypeConstants.PROJECTS_SELECTED_ELEMENT_ID,
    payload: value,
  };
}

function setSelectedProjectItem(value) {
  return {
    type: actionTypeConstants.PROJECTS_SELECTED_ITEM,
    payload: value,
  };
}

function setSelectedProjectSubItem(value) {
  return {
    type: actionTypeConstants.PROJECTS_SELECTED_SUB_ITEM,
    payload: value,
  };
}

export default {
  setSelectedProjectElementId,
  setSelectedProjectItem,
  setSelectedProjectSubItem,
};
