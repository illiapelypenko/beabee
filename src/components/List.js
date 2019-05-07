import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getTodos } from '../actions/todoAction';
import Todo from './Todo';

const ListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	border: 3px solid #f0f0f0;
	border-radius: 10px;
`;

const LineWrapper = styled.div`
	background-color: #f3c622;
	font-weight: bold;
	margin: 10px 0px 5px 0px;
	padding: 5px 10px;
	border-radius: 10px;
	width: max-content;
	cursor: pointer;
`;

class List extends Component {
	state = {
		isExpanded: true
	};

	componentDidMount() {
		this.props.getTodos();
	}

	handleOnExpandClick = () => {
		this.setState(state => ({ isExpanded: !state.isExpanded }));
	};

	render() {
		const { todos, name, date } = this.props;
		return (
			<>
				<LineWrapper onClick={this.handleOnExpandClick}>{name}</LineWrapper>
				<ListWrapper>
					{this.state.isExpanded
						? todos
								.filter(this.props.filter)
								.map(todo => <Todo key={todo._id} todo={todo} date={date} />)
						: null}
				</ListWrapper>
			</>
		);
	}
}

const mapStateToProps = state => ({
	todos: state.todo.todos
});

export default connect(
	mapStateToProps,
	{ getTodos }
)(List);
