import React from 'react';
import { connect } from 'react-redux'
import { addNewTask, removeCompleted } from '../actions/ToDoActions';
import { changeInputText } from '../actions/inputFieldActions';
import { changeVisibility } from '../actions/VisibilityFilters';


import Caption from '../components/Caption';
import InputArea from '../components/InputArea';
import ToDoList from '../components/ToDoList';
import Controls from '../components/Controls';

import './App.css';



class App extends React.Component {
  render(){
    const { inputField, tasks, addNewTaskAction, changeInputTextAction, visibility, changeVisibilityAction, removeCompletedAction } =  this.props
    return(
      <div className="mainContainer">
      <Caption />
      <InputArea text={inputField.text} addNewTask={addNewTaskAction} changeInputText={changeInputTextAction} />
      <ToDoList taskList={tasks} visibility={visibility}/>
      <Controls
        changeVisibility={changeVisibilityAction}
        tasksLeft={tasks.reduce((i, e) => !e.completed ? i+1 : i , 0)}
        allTasksCount={tasks.reduce((i, e) => e ? i+1 : i , 0)}
        removeCompleted={removeCompletedAction}/>
      </div>
    )
  }
}


const mapStateToProps = store => {
  return {
    tasks: store.tasks,
    inputField: store.inputField,
    visibility: store.visibility,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewTaskAction: text => dispatch(addNewTask(text)),
    changeInputTextAction: text => dispatch(changeInputText(text)),
    changeVisibilityAction: visibilityType => dispatch(changeVisibility(visibilityType)),
    removeCompletedAction: () => dispatch(removeCompleted())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
