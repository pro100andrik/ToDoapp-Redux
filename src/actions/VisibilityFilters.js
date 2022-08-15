export const CHANGE_VISIBILITY = 'CHANGE_VISIBILITY';

export function changeVisibility(filterType) {
  return {
    type: CHANGE_VISIBILITY,
    payload: filterType,
    filterType
  }
}
