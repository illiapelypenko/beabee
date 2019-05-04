import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDate } from '../actions/dateAction';
import styled from 'styled-components';

const CurrentDateWrapper = styled.input`
	padding: 10px;
	font-size: 20px;
	outline: none;
	position: absolute;
	right: 20px;
	top: 90px;
`;

export class CurrentDate extends Component {
	render() {
		return (
			<CurrentDateWrapper
				type='date'
				id='date'
				name='date'
				onChange={this.props.onChange}
			/>
		);
	}
}

// const mapStateToProps = state => ({
// 	date: state.date
// });

// export default connect(
// 	mapStateToProps,
// 	{ setDate }
// )(CurrentDate);

export default CurrentDate;
