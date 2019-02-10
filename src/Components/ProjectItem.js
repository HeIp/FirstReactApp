import React, { Component } from 'react';


class Projectitem extends Component 
{
  render() 
  {
      console.log(this.props);
    return (
      <li className="Projects">
        <b>{this.props.project.title}</b> - {this.props.project.category}
      </li>
    );
  }
}

export default Projectitem;
