import React from 'react';

class ToDo extends React.Component{

  handleClick = (e, id) => {
    e.stopPropagation()
    this.props.removeTaskById(id)
  }

  render(){
    const { todo, id, visibility } = this.props
    return(
      <>
      {visibility === 'all'
        ?
      <li
        onClick={() => this.props.markCompleted(id)}
        className={todo.completed ? 'checked-element' : ''}
      >
      {todo.task}
      <button className='close-button' onClick={(e) => this.handleClick(e, id)}>x</button>
      </li>
        :
      visibility === 'completed' && todo.completed
        ?
      <li
        onClick={() => this.props.markCompleted(id)}
        className={todo.completed ? 'checked-element' : ''}
      >
      {todo.task}
      <button className='close-button' onClick={(e) => this.handleClick(e, id)}>x</button>
      </li>
        :
      visibility === 'active' && !todo.completed
        ?
      <li
        onClick={() => this.props.markCompleted(id)}
        className={todo.completed ? 'checked-element' : ''}
      >
      {todo.task}
      <button className='close-button' onClick={(e) => this.handleClick(e, id)}>x</button>
      </li>
        :
      null
      }
      </>

    )
  }
}

export default ToDo
