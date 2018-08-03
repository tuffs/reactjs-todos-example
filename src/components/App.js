import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [{
				value: 'Example 1',
				completed: false,
			}],
			todo: ''
		}
	}
	handleInputChange = (e) => {
		this.setState({
			todo: e.target.value
		});
	};
	handleFormSubmit = (e) => {
		e.preventDefault();
		const { todos, todo } = this.state;
		const newTodo = {
			value: todo,
			completed: false
		};
		this.setState({
			todos: todos.concat(newTodo),
			todo: ''
		});
	};
	handleTodoToggle = (index) => {
		const completed = !this.state.todos[index].completed;
		const newState = {
			todo: '',
			todos: Object.assign(
				[...this.state.todos],
				{[index]: Object.assign({}, index, { value: this.state.todos[index].value, completed })}
			)
		}
		this.setState(
			newState
		);
	};
	handleDeleteTodo = (i) => {
		var newTodosArray = [...this.state.todos];
	  var index = newTodosArray[i];
	  newTodosArray.splice(index, 1);
	  this.setState({todos: newTodosArray});
	};
  render() {
    return (
      <div
      	style={{marginLeft: '4px'}}
      >
        <h3>Todos</h3>
        <div>
        	{this.state.todos.map((todo, i) => (
        			<li key={i}
        				style={{listStyle: 'none', paddingBottom: '25px'}}
        			>
      					<input
      						name="toggleComplete"
      						type="checkbox"
      						onChange={() => this.handleTodoToggle(i)}
      						checked={todo.completed ? true : false}
      						style={{marginRight: '5px'}}
      					/>
      					<span
      						style={todo.completed ? { textDecoration: 'line-through' } : null }
      						onClick={() => this.handleTodoToggle(i)}
      					><strong>{todo.value}</strong></span>
      					<button
      						onClick={() => this.handleDeleteTodo(todo[i])}
      					>
      						x
      					</button>
        			</li>
        	))}
        </div>
        <div>
        	<form onSubmit={this.handleFormSubmit}>
        	<input
        		type="text"
        		value={this.state.todo}
        		onChange={this.handleInputChange}
        	/>
        	<input
        		type="submit"
        		value="Add Todo Item"
        	/>
        	</form>
        </div>
      </div>
    );
  }
}

export default App;
