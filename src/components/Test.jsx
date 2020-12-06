import React, {Component} from 'react'
import {Link, List, ListItem, Navbar, NavRight, NavTitle, Page, Toggle} from "framework7-react"

export default class HomePage extends Component {
  asdf = () => {
    this.$f7.dialog.prompt('Task Name:', 'Add Task', (name) => {
    })
  }

  render = () => (
    <Page>
      <Navbar>
        <NavTitle>To Do List</NavTitle>
        <NavRight>
          <Link iconOnly iconF7="add_round_fill" onClick={this.asdf} />
        </NavRight>
      </Navbar>

      <List simple-list>
        {this.state.tasks.map((task, i) => (
          <ListItem title={task.name} key={i}>
            <Toggle slot="after" />
          </ListItem>
        ))}
      </List>
    </Page>
  );
}
