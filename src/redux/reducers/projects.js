

import { actionTypeConstants } from '../../common/constants/';
import { Record } from 'immutable';

const Project = Record({
  selectedProjectElementId: null,
  selectedProjectItem: null,
  selectedProjectSubItem: null,
});

const initialState = new Project();

export default function update(state = initialState, action) {
  if (!(state instanceof Project)) {
    return initialState.merge(state);
  }

  switch (action.type) {
    case actionTypeConstants.PROJECTS_SELECTED_ELEMENT_ID:
      return state.set('selectedProjectElementId', action.payload);
    case actionTypeConstants.PROJECTS_SELECTED_ITEM:
      return state.set('selectedProjectItem', action.payload);
    case actionTypeConstants.PROJECTS_SELECTED_SUB_ITEM:
      return state.set('selectedProjectSubItem', action.payload);
  }

  return state;
}
