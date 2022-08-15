import React from 'react';

import { connect } from 'react-redux'
import { removeTaskById, markCompleted } from '../actions/ToDoActions';

import ToDo from './ToDo';

import PropTypes from 'prop-types'

class ToDoList extends React.Component{
  render(){
    const { taskList, removeTaskByIdAction, markCompletedAction, visibility } = this.props
      return(
      <div>
        <ul>
          {taskList.map((todo, index) => {
            return <ToDo
              key={index}
              id={index}
              removeTaskById={removeTaskByIdAction}
              markCompleted={markCompletedAction}
              visibility={visibility}
              todo={todo}
            />
          })}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeTaskByIdAction: id => dispatch(removeTaskById(id)),
    markCompletedAction: id => dispatch(markCompleted(id))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ToDoList);

// export default ToDoList

ToDoList.propTypes = {
  taskList: PropTypes.array.isRequired,
}
