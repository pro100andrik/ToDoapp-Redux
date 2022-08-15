import React from 'react';

class Controls extends React.Component{


  render(){
    const { changeVisibility, tasksLeft, allTasksCount, removeCompleted } = this.props
    return(
      <div className='controls'>
        <span className='items-counter'> items left {tasksLeft}</span>
        <span className='visibility-buttons'>
          <button onClick={() => changeVisibility('all')}>Show all</button>
          <button onClick={() => changeVisibility('active')}>Active</button>
          <button onClick={() => changeVisibility('completed')}>Completed</button>
        </span>
        <span className='remove-button'><button onClick={removeCompleted} className={allTasksCount - tasksLeft === 0 ? 'hiden' : ''}>Remove Completed</button></span>
      </div>
    )
  }
}

export default Controls
