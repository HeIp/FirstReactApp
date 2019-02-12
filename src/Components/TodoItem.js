import React, { Component } from 'react';


class TodoItem extends Component 
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
        <b>{this.props.project.id}</b>
      </li>
    );
  }
}

//generate warnings of not specified type
TodoItem.propTypes = {
  todo: React.PropTypes.object
}

export default TodoItem;
