import React, {Component} from 'react'

export default class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'John'
    }
  }

  onChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  render(){
    return (
      <div>
        <label htmlFor="name-input">Name: </label>
        <input id="name-input"
               onChange={this.onChange}
               value={this.state.name.toUpperCase()} />
      </div>
    )
  }

}
