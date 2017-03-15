

import { actionTypeConstants } from '../../common/constants/';

function setIsAlertVisible(value) {
  return {
    type: actionTypeConstants.IS_ALERT_VISIBLE,
    payload: value,
  };
}

function setIsMobile(value) {
  return {
    type: actionTypeConstants.IS_MOBILE,
    payload: value,
  };
}

export default {
  setIsAlertVisible,
  setIsMobile,
};
