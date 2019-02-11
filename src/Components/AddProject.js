import React, { Component } from 'react';

class AddProject extends Component 
{

  render()
  {

    return
    (
        <div>
            <h3>Add Project</h3>
            <form>
                <div>
                    <label>Title</label>
                    <input type="text" ref="" />
                </div>
            </form>
        </div>
    );
  }
}

export default AddProject;
