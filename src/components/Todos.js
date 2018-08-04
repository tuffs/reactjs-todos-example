import React, { Component } from 'react';
import { Card, Input, Button, Checkbox, Icon, Tooltip } from 'antd';

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
		this.setState({ todo: e.target.value });
	};
	handleFormSubmit = (e) => {
		e.preventDefault();
		if (this.state.todo !== '') {
			const { todos, todo } = this.state;
			const newTodo = {
				value: todo,
				completed: false
			};
			this.setState({ todos: todos.concat(newTodo), todo: '' });
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

		}
		this.setState(
			newState
		);
	};
	handleDeleteTodo = (index) => {
		const newTodosArray = this.state.todos.filter((x, i) => i !== index);
	  this.setState({todos: newTodosArray});
	};
	componentDidmount() {
		this.nameInput.focus();
	}
	render() {
		return (
			<div
      	style={{marginLeft: '4px'}}
      >
        <h1>Todos List</h1>
        <hr/>
        <div>
        	{this.state.todos.map((todo, i) => (
        			<Card key={i}
        				style={{
        					listStyle: 'none',
        					marginBottom: '10px',
        					width: '520px'
        				}}
        			>
        				<Tooltip title="Mark todo as complete">
	      					<Checkbox
	      						name="toggleComplete"
	      						type="checkbox"
	      						onChange={() => this.handleToggleTodo(i)}
	      						checked={todo.completed}
	      						style={{marginRight: '5px'}}
	      					/>
	      					<span
	      						style={todo.completed ? { textDecoration: 'line-through' } : null }
	      						onClick={() => this.handleToggleTodo(i)}
	      					><strong>{todo.value}</strong></span>
      					</Tooltip>
      					<div style={{float: 'right'}}>
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
      					</div>
        			</Card>
        	))}
        </div>
        <div style={{ margin: '5px' }}>
        	<form onSubmit={this.handleFormSubmit}>
        	<Input
        		type="text"
        		value={this.state.todo}
        		onChange={this.handleInputChange}
        		ref={(input) => { this.nameInput = input; }}
        		style={{
        			width: '400px'
        		}}
        	/>
        	<Button	
        		type="primary"
        		onClick={this.handleFormSubmit}
        		style={{ 
        			margin: '5px'
        		}}
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