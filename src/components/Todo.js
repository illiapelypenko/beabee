import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTodo, updateTodo } from '../actions/todoAction';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const TodoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px #f4f4f4 solid;
	padding: 20px;
`;

const TaskWrapper = styled.div`
	display: flex;
	justify-content: space-between;

	.name {
		font-weight: bold;
	}

	.name:hover {
		color: #f3c622;
		cursor: pointer;
	}

	.icons {
		display: flex;
		align-items: center;
	}

	.fas:hover,
	.far:hover {
		color: #f3c622;
	}

	.fa-check-square {
		margin-right: 12px;
	}
`;

const DescriptionWrapper = styled.div`
	margin-top: 10px;
`;

class Todo extends Component {
	state = {
		showDescription: false
	};

	handleOnExpandCick = () => {
		this.setState(prevState => ({
			showDescription: !prevState.showDescription
		}));
	};

	handleOnCompleteClick = () => {
		this.props.updateTodo({
			...this.props.todo,
			isCompleted: !this.props.todo.isCompleted
		});
	};

	handleOnDeleteClick = () => {
		this.props.deleteTodo(this.props.todo._id);
	};

	render() {
		const { name, description, isCompleted } = this.props.todo;
		return (
			<TodoWrapper>
				<TaskWrapper>
					<span className='name' onClick={this.handleOnExpandCick}>
						{name}
					</span>
					<div className='icons'>
						<i
							className='fas fa-check-square fa-lg'
							onClick={this.handleOnCompleteClick}
						/>
						<i
							className='fas fa-times fa-lg'
							onClick={this.handleOnDeleteClick}
						/>
					</div>
				</TaskWrapper>
				{this.state.showDescription ? (
					<DescriptionWrapper>{description}</DescriptionWrapper>
				) : null}
			</TodoWrapper>
		);
	}
}

export default connect(
	null,
	{ deleteTodo, updateTodo }
)(Todo);
