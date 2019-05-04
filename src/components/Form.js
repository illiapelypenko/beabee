import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoAction';
import styled from 'styled-components';
import FormItem from './FormItem';

const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 800px;
	margin: auto;
	border: 3px solid #f0f0f0;
	border-radius: 10px;
`;

const DescriptionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 20px;
`;

const DescriptionLabelWrapper = styled.label`
	font-weight: bold;
	font-size: 30px;
`;

const DescriptionTextareaWrapper = styled.textarea`
	padding: 10px;
	font-size: 20px;
	outline: none;
`;

const SubmitWrapper = styled.button`
	padding: 10px;
	font-weight: bold;
	font-size: 30px;
	outline: none;
	background: #f3c622;
	margin: 20px;
`;

class Form extends Component {
	state = {
		values: {
			name: '',
			description: '',
			dateStarted: null,
			dateFinished: null,
			isHabit: false
		},
		errors: {
			name: '',
			dateStarted: '',
			dateFinished: ''
		}
	};

	componentDidMount() {
		console.log(this.props.location.state);
		if (this.props.location.state) {
			const {
				name,
				description,
				dateStarted,
				dateFinished,
				isHabit
			} = this.props.location.state.todo;
			this.setState({ name, description, dateStarted, dateFinished, isHabit });
		}
	}

	handleOnChange = e => {
		const { id, value } = e.target;
		this.setState(state => ({
			values: { ...state.values, [id]: value }
		}));
	};

	handleCheckboxOnChange = e => {
		this.setState(state => ({
			values: { ...state.values, isHabit: !this.state.values.isHabit }
		}));
	};

	handleSubmit = e => {
		e.preventDefault();

		const { name, dateStarted, dateFinished, isHabit } = this.state.values;
		const errors = { ...this.state.errors };

		errors.name = name ? '' : 'is required';
		errors.dateStarted = dateStarted ? '' : 'is required';
		errors.dateFinished =
			(isHabit && dateFinished) || !isHabit ? '' : 'is required';

		this.setState({ errors });

		if (!errors.name && !errors.dateStarted && !errors.dateFinished) {
			this.props.addTodo({ ...this.state.values });
			this.props.history.push('/');
			this.setState({
				values: {
					name: '',
					description: '',
					dateStarted: null,
					dateFinished: null,
					isHabit: false
				}
			});
		}
	};

	render() {
		return (
			<FormWrapper onSubmit={this.handleSubmit}>
				<FormItem
					type='text'
					name='name'
					id='name'
					label='*Name:'
					placeholder="Enter task's name"
					value={this.state.values.name}
					handleOnChange={this.handleOnChange}
					error={this.state.errors.name}
				/>
				<DescriptionWrapper>
					<DescriptionLabelWrapper htmlFor='description'>
						Description:
					</DescriptionLabelWrapper>
					<DescriptionTextareaWrapper
						id='description'
						placeholder={"Enter task's description"}
						value={this.state.values.description}
						onChange={this.handleOnChange}
					/>
				</DescriptionWrapper>

				<FormItem
					type='date'
					name='dateStarted'
					id='dateStarted'
					label='*Day'
					placeholder='Enter date to start the habit:'
					value={this.state.values.dateStarted}
					handleOnChange={this.handleOnChange}
					error={this.state.errors.dateStarted}
				/>
				<FormItem
					type='checkbox'
					name='isHabit'
					id='isHabit'
					label='Is habit:'
					checked={this.state.values.isHabit}
					handleOnChange={this.handleCheckboxOnChange}
				/>
				{this.state.values.isHabit ? (
					<FormItem
						type='date'
						name='dateFinished'
						id='dateFinished'
						label='*Completion day:'
						placeholder='Enter date to finish the habit:'
						value={this.state.values.dateFinished}
						handleOnChange={this.handleOnChange}
						error={this.state.errors.dateFinished}
					/>
				) : null}
				<SubmitWrapper type='submit' value='Submit'>
					Submit
				</SubmitWrapper>
			</FormWrapper>
		);
	}
}

export default connect(
	null,
	{ addTodo }
)(Form);
