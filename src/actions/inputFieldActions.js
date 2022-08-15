export const CHANGE_TEXT = 'CHANGE_TEXT'

export function changeInputText(text) {
  return {
    type: CHANGE_TEXT,
    payload: text,
    text
  }
}
