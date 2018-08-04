import React, { Component } from 'react';
import { Input, Button, Checkbox, Icon, Tooltip } from 'antd';
import './Todos.less';

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
	handleToggleTodo = (index) => {
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
	handleDeleteTodo = (index) => {
		const removedTodoArray = this.state.todos.filter((x, i) => i != index);
	  this.setState({todos: removedTodoArray});
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
	      						onChange={() => this.handleToggleTodo(i)}
	      						checked={todo.completed ? true : false}
	      						style={{marginRight: '5px'}}
	      					/>
	      					<span
	      						style={todo.completed ? { textDecoration: 'line-through' } : null }
	      						onClick={() => this.handleToggleTodo(i)}
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
        		style={{margin: '5px', backgroundColor: 'lightgreen'}}
        		className="addTodoButton"
        	>
        		<Icon type="plus-circle" />
        		Add Todo
        	</Button>
        	</form>
        </div>
      </div>
		);
	}
}

export default Todos;