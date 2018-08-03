import React, { Component } from 'react';
import { Input, Button, Checkbox, Icon, Tooltip } from 'antd';

class Todos extends Component {
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
		if (this.state.todo !== '') {
			const { todos, todo } = this.state;
			const newTodo = {
				value: todo,
				completed: false
			};
			this.setState({
				todos: todos.concat(newTodo),
				todo: ''
			});
		}
	};
	handleTodoToggle = (index) => {
		const completed = !this.state.todos[index].completed;
		const newState = {
			todo: this.state.todo,
			todos: Object.assign(
				[...this.state.todos],
				{[index]: Object.assign({}, index, { value: this.state.todos[index].value, completed })}
			),
			error: this.state.error
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
        <h2>Todos List</h2>
        {this.state.error}
        <div>
        	{this.state.todos.map((todo, i) => (
        			<li key={i}
        				style={{listStyle: 'none', paddingBottom: '25px'}}
        			>
        				<Tooltip title="Mark todo as complete">
	      					<Checkbox
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
      					</Tooltip>
      					<Tooltip title="Delete Todo">
	      					<Button
	      					 	ghost
	      						type="danger"
	      						size="small"
	      						onClick={() => this.handleDeleteTodo(i)}
	      					>
	      						<Icon type="delete" />
	      					</Button>
      					</Tooltip>
        			</li>
        	))}
        </div>
        <div style={{margin: '5px'}}>
        	<form onSubmit={this.handleFormSubmit}>
        	<Input
        		type="text"
        		value={this.state.todo}
        		onChange={this.handleInputChange}
        		style={{
        			width: '300px'
        		}}
        	/>
        	<Button	
        		type="primary"
        		onClick={this.handleFormSubmit}
        		style={{margin: '5px'}}
        	>
        		Add Item
        	</Button>
        	</form>
        </div>
      </div>
		);
	}
}

export default Todos;