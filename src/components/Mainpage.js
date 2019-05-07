import React, { Component } from 'react';
import styled from 'styled-components';
import Todos from './Todos';
import CurrentDate from './CurrentDate';

const MainpageWrapper = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr;
	grid-template-rows: max-content max-content;
	/* grid-template-areas: 'todos datepicker' 'todos events'; */
`;

export default class Mainpage extends Component {
	state = {
		date: new Date('2019-05-07')
	};

	handleOnDateChange = e => {
		const date = e.target.value;
		this.setState({ date: date });
	};

	render() {
		return (
			<div>
				<CurrentDate onChange={this.handleOnDateChange} />
				<Todos date={this.state.date} />
			</div>
		);
	}
}
