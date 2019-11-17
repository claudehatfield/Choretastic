import React, { Component } from 'react';


var todos = [

]

class ChoreForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleRemoveTodo(index) {
    this.setState({
      todos: this.state.todos.filter(function(e, i) {
        return i !== index;
      })
    })
  }

  handleAddTodo(todo) {
  this.setState({todos: [...this.state.todos, todo]});
}


  render() {
    return (
      <div className="column">

        
          
          <h1 className="title is-1">
            Chores Left To Do:  <span className="badge badge-pill badge-primary">{this.state.todos.length}</span>
          </h1>
        

          <div className="row mt-5 box">
            <br/>
            <TodoInput onAddTodo={this.handleAddTodo}/>
            <hr/>
          </div>

          <div className="column">
            <div className="content">
              <ul type ="1">
                { this.state.todos.map((todo, index) =>
                    <li className="list-group-item" key={index}>
                      <h4 className="list-group-item-heading">{todo.todoTitle}</h4> 
                      <p><span className="badge badge-secondary">{todo.todoValue}</span></p>
                      <p className="text-justify">{todo.todoDescription}</p>
                      <button className="button is-primary" onClick={this.handleRemoveTodo.bind(this, index)}><span><i className="fa fa-trash-o" aria-hidden="true"></i></span>&nbsp;&nbsp; Finished</button>
                    </li>
                )}
              </ul>
            </div>
            {/* col */}
        </div>
        {/* row */}
      </div>
    );
  }

 }

 class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoTitle: '',
      todoDescription: '',
      todoValue: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleInputChange(event) {
     const target = event.target;
     const value = target.value;
     const name = target.name;

     this.setState({
       [name]: value
     })
   }

   handleSubmit(event) {
    event.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      todoTitle: '',
      todoDescription: '',
      todoValue: ''
    });
  }

  render() {
    return (
      <div className="column">
        <br/><br/><br/>
        <h4>Add New Todo</h4><br/>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <input  name="todoTitle"
                    type="text"
                    className="input"
                    id="inputTodoTitle"
                    value={this.state.todoTitle}
                    onChange={this.handleInputChange}
                    aria-describedby="Todo Title"
                    placeholder="Enter Title"></input>
            </div>

            <div className="field">
            <input  name="todoValue"
                    type="text"
                    className="input"
                    id="inputTodoValue"
                    value={this.state.todoValue}
                    onChange={this.handleInputChange}
                    aria-describedby="Todo Value"
                    placeholder="Enter Value"></input>
            </div>
           
            <div className="control">
              <label htmlFor="inputTodoDescription" className="control-label text-muted"><small>Description</small></label>
              <textarea   name="todoDescription"
                          type="text"
                          className="textarea"
                          id="inputTodoDescription"
                          value={this.state.todoDescription}
                          onChange={this.handleInputChange}
                          aria-describedby="Todo Description"></textarea>
            </div>
          
            <div className="control">
              <button type="submit" className="button is-primary float-right">Add Todo</button>
            </div>
        </form>
      </div>
    )
  }
}

 export default ChoreForm;