import React from 'react'
import {Button, Form, FormControl, FormGroup} from 'react-bootstrap'
import reactCreateClass from 'create-react-class'


const Comment = reactCreateClass({
  getInitialState: function (){
    return {show: false, newTitle: ''}
  },
  handleTitleSubmit: function (){
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
          <FormControl type="text" onChange={this.handleTitleChange} />
        </FormGroup>
      </Form>
    } else {
      clickableTitle = <div>
        <Button onClick={this.changeComponent}>
          <h3>Default Text</h3>
        </Button>
      </div>
    }
    return (
      <div className="comment">
        {clickableTitle}
      </div>
    )
  }
})

export default Comment
