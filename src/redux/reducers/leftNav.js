import { actionTypeConstants } from '../../common/constants/';
import { Record } from 'immutable';

const LeftNav = Record({
  isLeftNavVisible: false,
});

const initialState = new LeftNav();

export default function update(state = initialState, action) {
  switch (action.type) {
    case actionTypeConstants.IS_LEFT_NAV_VISIBLE: {
      return state.set('isLeftNavVisible', action.payload);
    }
  }
  return state;
}
