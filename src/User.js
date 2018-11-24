import React, { Component } from 'react';


class User extends Component {
  render() {
    
    return (
    <p> {this.props.data.name} </p>
    )
    
  }
}

export default User;