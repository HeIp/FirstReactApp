import React, { Component } from 'react';


class Projectitem extends Component 
{
  deleteProject(id)
  {
    this.props.onDelete(id);
  }

  render() 
  {
      console.log(this.props);
    return (
      <li className="Projects">
        <b>{this.props.project.id}</b> - {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}

//generate warnings of not specified type
ProjectItem.propTypes = {
  projects: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default Projectitem;
