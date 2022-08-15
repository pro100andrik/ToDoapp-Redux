export const ADD_TASK = 'ADD_TASK'
export const REMOVE_TASK_BY_ID = 'REMOVE_TASK_BY_ID'
export const MARK_COMPLETED = 'MARK_COMPLETED'
export const REMOVE_COMPLETED = 'REMOVE_COMPLETED'

export function addNewTask(text) {
  return {
    type: ADD_TASK,
    payload: text,
    text
  }
}

export function removeTaskById(id) {
  return {
    type: REMOVE_TASK_BY_ID,
    payload: id,
    id
  }
}

export function markCompleted(id) {
  return {
    type: MARK_COMPLETED,
    payload: id,
    id
  }
}

export function removeCompleted() {
  return {
    type: REMOVE_COMPLETED,
  }
}
