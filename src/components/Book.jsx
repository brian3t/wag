import React, {Component} from 'react'

import PropTypes from 'prop-types'

class FirstComponent extends Component {
  state = {
    toggle: true
  }

  constructor(props){
    super(props);
    this.state = {toggle: true}
  }

  toggle(){
    this.setState({toggle: ! this.state.toggle})
  }

  render(){
    return (
      <div onClick={this.toggle} role="button">
        Hello I am first component, my name is {this.props.name}
        My toggle state is {this.state.toggle ? 'on' : 'off'}
      </div>)
  }
}

FirstComponent.propTypes = {
  name: PropTypes.string.isRequired
}

export default FirstComponent
