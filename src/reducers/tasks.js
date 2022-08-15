import { ADD_TASK, REMOVE_TASK_BY_ID, MARK_COMPLETED, REMOVE_COMPLETED } from '../actions/ToDoActions';

const initialState =[
  {task: 'clean home',completed: false},
  {task: 'go clean myself in the bathroom',completed: false},
  {task: 'play on guitar',completed: true},
  {task: 'learn react',completed: false},
  {task: 'go to store',completed: false},
]

export function tasksReduser(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return [ ...state, {
        task: action.text,
        completed: false
      }]
    case REMOVE_TASK_BY_ID:
      return state.filter((_, index) => index !== action.id)
    case MARK_COMPLETED:
      return state.map((element, index) => {
        if (index === action.id) {
          element.completed = !element.completed
        }
        return element
      })
    case REMOVE_COMPLETED:
      return state.filter((element) => !element.completed)
    default:
      return state
  }
}
