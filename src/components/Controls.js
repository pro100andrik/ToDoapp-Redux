import React from 'react';

class Controls extends React.Component{
  constructor(props){
    super(props);
    this.handleVisibility = this.handleVisibility.bind(this);
    this.handleRemoveCompleted = this.handleRemoveCompleted.bind(this);
  }

  countLeftItems(array) {
    let count = 0;
    for (let item of array){
      if (!item.isChecked) count++;
    }
    return count;
  }

  handleVisibility(type){
    this.props.handleItemsVisibility(type);
  }

  handleRemoveCompleted(){
    this.props.handleRemoveCompleted();
  }

  render(){
    return(
      <div className='controls'>
        <span className='items-counter'> {this.countLeftItems(this.props.taskList)} items left</span>
        <span className='visibility-buttons'>
          <button onClick={() => this.handleVisibility('showAll')}>Show all</button>
          <button onClick={() => this.handleVisibility('showActive')}>Active</button>
          <button onClick={() => this.handleVisibility('showCompleted')}>Completed</button>
        </span>
        <span className='remove-button'><button onClick={this.handleRemoveCompleted} className={this.props.showRemoveButton ? '' : 'hiden'}>Remove Completed</button></span>
      </div>
    )
  }
}

export default Controls
