import React from 'react'
import {Button, Form, FormControl, FormGroup} from 'react-bootstrap'
import reactCreateClass from 'create-react-class'


const Comment = reactCreateClass({
  getInitialState: () => {
    return {show: false, newTitle: 'default title'}
  },
  handleTitleSubmit: function (e){
    e.stopImmediatePropagation()
    e.stopPropagation()
    return e.preventDefault()

    //code to handle input box submit
  },
  handleTitleChange: function (e){
    this.setState({newTitle: e.target.value})
  },
  changeComponent: function (){
    //this toggles the show var which is used for dynamic ui
    this.setState({show: ! this.state.show})
  },
  render: function (){
    let clickableTitle = ''
    if (this.state.show) {
      clickableTitle = <Form inline onSubmit={this.handleTitleSubmit}>
        <FormGroup controlId="formInlineTitle">
          <FormControl type="text" onChange={this.handleTitleChange} value={this.state.newTitle} />
        </FormGroup>
      </Form>
    } else {
      clickableTitle = <div>
        <h3>{this.state.newTitle}</h3>
      </div>
    }
    return (
      <div className="comment">
        {clickableTitle}
        <Button onClick={this.changeComponent}>Change mode</Button>
      </div>
    )
  }
})

export default Comment
