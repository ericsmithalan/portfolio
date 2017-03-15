

import { actionTypeConstants } from '../../common/constants/';
import { Record } from 'immutable';

const App = Record({
  isAlertVisible: false,
  isMobile: false,
});

const initialState = new App();

export default function update(state = initialState, action) {
  if (!(state instanceof App)) {
    return initialState.merge(state);
  }

  switch (action.type) {
    case actionTypeConstants.IS_ALERT_VISIBLE:
      return state.set('isAlertVisible', action.payload);
    case actionTypeConstants.IS_MOBILE:
      return state.set('isMobile', action.payload);
  }

  return state;
}
