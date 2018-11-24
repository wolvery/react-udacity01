import React, { Component } from 'react';


class Movie extends Component {
 render () {
   return (
   <p> {this.props.data.name}</p>
   )
 
 }
  
}

export default Movie;