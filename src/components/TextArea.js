import React from 'react';

class TextArea extends React.Component{
  constructor(props){
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = ({
      text: ""
    })
    this.inputRef = React.createRef();
  }

  handleChange = e => {
    if(e.code === 'Enter') return;
      this.setState ({
        text: e.target.value
      })
  }

  handleKeyDown(e){
    if(e.code !== 'Enter') return;
    if(e.target.value === '') {
      alert('enter something')
      return;
   }
   this.setState ({
     text: e.target.value
   })
   this.handleAdd();
    e.target.value = '' ;
  }


  handleAdd = () => {
    if(this.state.text === "") {
      alert ("enter something")
      return
    }
    this.props.handleAddItem(this.state.text);
    this.setState ({
      text: ""
    })
    this.inputRef.current.value = "";
  }

  render(){
    return(
      <span className='input-span'>
      <input type='text'
        ref={this.inputRef}
        className='input-text'
        placeholder='Input you task here'
        onKeyDown={this.handleKeyDown}
        onChange={this.handleChange}/>
        <button className="add-button" onClick={this.handleAdd}> Add </button>
      </span>
    )
  }
}

export default TextArea
