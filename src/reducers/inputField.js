import { CHANGE_TEXT } from '../actions/inputFieldActions';
const initialState = {
  text: '',
}
export function inputFieldReduser(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TEXT:
      return  {...state, text: action.text}
    default:
      return state
  }
}
