import { CHANGE_VISIBILITY } from '../actions/VisibilityFilters';

export const visibilityFilterReduser = (state = 'all', action) => {
  switch (action.type) {
    case CHANGE_VISIBILITY:
      return action.filterType
    default:
      return state
  }
}
