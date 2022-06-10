import React from 'react';
import TextArea from './TextArea';
import ListOfItems from './ListOfItems';
import Controls from './Controls';

class ListContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tasks: this.props.taskList,
      buttonIsVisible: new Array(this.props.taskList.length).fill(false),
      showType: 'showAll',
      showRemoveButton: this.props.taskList.map(el => el.isChecked).includes(true)
    }
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleIsChecked = this.handleIsChecked.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleButtonVisibility = this.handleButtonVisibility.bind(this);
    this.handleItemsVisibility = this.handleItemsVisibility.bind(this);
    this.handleRemoveCompleted = this.handleRemoveCompleted.bind(this);
  }
  handleButtonVisibility(index){
    this.setState(prevState => ({
      buttonIsVisible: prevState.buttonIsVisible.map((el, i) => i !== index ? el : !el)
    }))
  }

  handleAddItem(taskName){
    this.setState(({
       tasks: [...this.state.tasks, {task:taskName, isChecked: false, index: this.state.tasks[this.state.tasks.length - 1].index + +1}],
       buttonIsVisible: [...this.state.buttonIsVisible, false]
    }))
  }

  handleIsChecked(target){
    this.setState({
      tasks: this.state.tasks.map((el, index) => {
          if (el.index === +target) el.isChecked = !el.isChecked
        return el;
      }),
      showRemoveButton: this.state.tasks.map(el => el.isChecked).includes(true)
      });
  }

  handleDeleteItem(target){
    this.setState(prevState => ({
      tasks: prevState.tasks.filter((el, i) => target !== i),
      buttonIsVisible: prevState.buttonIsVisible.filter((el, index) => index < prevState.buttonIsVisible.length - 1),
      showRemoveButton: prevState.tasks.filter((el, i) => target !== i).map(el => el.isChecked).includes(true)
    }))
  }

  handleRemoveCompleted(){
    this.setState(prevState => ({
      tasks: prevState.tasks.filter((el, i) => !el.isChecked),
      buttonIsVisible: prevState.buttonIsVisible.filter((el, index) => index < prevState.buttonIsVisible.length - 1),
      showRemoveButton: false
    }))
  }

  handleItemsVisibility(type){
    this.setState({
      showType: type
    })
  }

  render(){
      return(
      <div><ul>
      <TextArea handleAddItem={this.handleAddItem} />
      <ListOfItems
        taskList={this.state.tasks}
        handleCheck={this.handleIsChecked}
        buttonIsVisible={this.state.buttonIsVisible}
        handleDeleteItem={this.handleDeleteItem}
        handleButtonVisibility={this.handleButtonVisibility}
        showType={this.state.showType}
      /></ul>
      <Controls
        taskList={this.state.tasks}
        handleItemsVisibility={this.handleItemsVisibility}
        handleRemoveCompleted={this.handleRemoveCompleted}
        showRemoveButton={this.state.showRemoveButton}
      />
      </div>
    )
  }
}

export default ListContainer
