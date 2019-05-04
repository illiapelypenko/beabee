import React, { Component } from 'react';
import styled from 'styled-components';

const FormItemWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 20px;

	label {
		font-weight: bold;
		font-size: 30px;
	}

	input {
		padding: 10px;
		font-size: 20px;
		outline: none;
	}
`;

const ErrorWrapper = styled.div`
	color: red;
`;

export default class FormItem extends Component {
	render() {
		const {
			type,
			name,
			id,
			label,
			placeholder,
			value,
			checked,
			error
		} = this.props;

		return (
			<FormItemWrapper>
				<label htmlFor={name}>{label}</label>
				<input
					type={type}
					name={name}
					id={id}
					placeholder={placeholder}
					value={value ? value : ''}
					checked={checked}
					onChange={this.props.handleOnChange}
				/>
				{error ? <ErrorWrapper>{error}</ErrorWrapper> : null}
			</FormItemWrapper>
		);
	}
}
