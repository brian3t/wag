import React, {Component} from 'react'
import {Button, Link, List, ListItem, Navbar, NavRight, NavTitle, Page} from "framework7-react"

export default class HomePage extends Component {
  state = {
    tasks: [{name: 'a'}, {name: 'task b'}, {name: 'task c'}]
  }

  componentDidMount(){
    this.$f7ready((f7) => {
      this.$f7 = f7
      f7.dialog.alert('Component mounted');
      window.F7G = f7
    });
  }

  asdf = () => {
    this.$f7.dialog.prompt('Task Name:', 'Add Task', (name) => {
      }
    )
  }

  render = () => (
    <Page>
      <Navbar>
        <NavTitle>To Do List</NavTitle>
        <NavRight>
          <Link iconOnly iconF7="add_round_fill" onClick={this.asdf}/>
        </NavRight>
      </Navbar>

      <List simple-list>
        {this.state.tasks.map((task, i) => (
          <ListItem title={task.name} key={i}>
            <Button click={this.asdf()}>asdf</Button>
          </ListItem>
        ))}
      </List>
    </Page>
  );
}
