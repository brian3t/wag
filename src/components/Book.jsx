import React, {Component} from 'react'

export default class Book extends Component {

  constructor(){
    super();
    this.togRef = React.createRef()
  }

  handleToggle = () => {
    const el = this.togRef.current

  }

  render = () => {
    return (
      <div className="long-desc">
        <ul className="profile-info">
          <li>
            <span className="info-title">User Name : </span> Shuvo Habib
          </li>
        </ul>

        <ul className="profile-info additional-profile-info-list" ref={this.togRef}>
          <li>
            <span className="info-email">Office Email</span>
            me@shuvohabib.com
          </li>
        </ul>
        <div className="ellipsis-click" onClick={this.handleToggle}>elip click here
          <i className="fa-ellipsis-h" />
        </div>
      </div>
    )
  }

}
