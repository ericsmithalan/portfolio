import { actionTypeConstants } from '../../common/constants/';

function setIsLeftNavVisibility(value) {
  return {
    type: actionTypeConstants.IS_LEFT_NAV_VISIBLE,
    payload: value,
  };
}

export default {
  setIsLeftNavVisibility,
};
