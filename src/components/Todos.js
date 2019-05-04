import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getTodos } from '../actions/todoAction';
import Todo from './Todo';
import List from './List';

const TodosWrapper = styled.div`
	display: flex;
	flex-direction: column;
	border: 3px solid #f0f0f0;
	border-radius: 10px;
	margin: 0px 20px;
	padding: 20px;
	grid: todos;
`;

class Todos extends Component {
	filterTasks = todo => {
		return (
			new Date(todo.dateStarted) <= new Date(this.props.date) &&
			!todo.isHabit &&
			todo.isCompleted === false
		);
	};

	filterHabits = todo => {
		return (
			new Date(todo.dateStarted) <= new Date(this.props.date) &&
			new Date(todo.dateFinished) >= new Date(this.props.date) &&
			todo.isHabit &&
			todo.isCompleted === false
		);
	};

	filterCompleted = todo => {
		return todo.isCompleted === true;
	};

	render() {
		return (
			<TodosWrapper>
				<List name={'Tasks'} filter={this.filterTasks} date={this.props.date} />
				<List
					name={'Habits'}
					filter={this.filterHabits}
					date={this.props.date}
				/>
				<List
					name={'Completed'}
					filter={this.filterCompleted}
					date={this.props.date}
				/>
			</TodosWrapper>
		);
	}
}

export default Todos;
