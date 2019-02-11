import React, { Component } from 'react';

class AddProject extends Component 
{

  render()
  {

    return(
        <div>
            <h3>Add Project</h3>
            <form>
                <div>
                    <label>Title</label><br />
                    <input type="text" ref="title" />
                </div>
            </form>
        </div>
    );
  }
}

export default AddProject;
