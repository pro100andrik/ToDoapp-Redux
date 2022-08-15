import React from 'react';

import PropTypes from 'prop-types'

class InputArea extends React.Component{
  constructor(props){
    super(props);
    this.inputRef = React.createRef();
  }

  handleChange = e => {
    if(e.code === 'Enter') return;
    this.props.changeInputText(e.target.value)
  }

  handleKeyDown = e => {
    if(e.code !== 'Enter') return;
    if(e.target.value === '') {
      alert('enter something')
      return;
    }
    this.props.addNewTask(this.props.text)
    this.props.changeInputText('')
  }


  handleAdd = () => {
    if(this.props.text === "") {
      alert ("enter something")
      return
    }
    this.props.addNewTask(this.props.text)
    this.props.changeInputText('')
  }

  render(){
    const { text } = this.props
    return(
      <span className='input-span'>
      <input type='text'
        ref={this.inputRef}
        className='input-text'
        placeholder='Input you task here'
        onKeyDown={this.handleKeyDown}
        onChange={this.handleChange}
        value={text}/>
        <button className="add-button" onClick={this.handleAdd}> Add </button>
      </span>
    )
  }
}

export default InputArea

InputArea.propTypes = {
  text: PropTypes.string.isRequired,
}
