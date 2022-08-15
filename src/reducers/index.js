import { combineReducers } from 'redux'
import { inputFieldReduser } from './inputField'
import { tasksReduser } from './tasks'
import { visibilityFilterReduser } from './visibilityFilter'


export const rootReducer = combineReducers({
  inputField: inputFieldReduser,
  tasks: tasksReduser,
  visibility: visibilityFilterReduser,
})
