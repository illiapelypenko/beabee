import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TabsWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin: 20px 0px;

	i {
		border: 3px solid #f0f0f0;
		padding: 20px;
	}

	.fa-home {
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
		border-right: none;
	}

	.fa-plus {
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
		border-left: none;
	}

	i:hover {
		color: #f3c622;
	}
`;

export class Tabs extends Component {
	render() {
		return (
			<TabsWrapper>
				<Link to='/'>
					<i className='fas fa-home fa-lg' />
				</Link>
				<Link to='/add'>
					<i className='fas fa-plus fa-lg' />
				</Link>
			</TabsWrapper>
		);
	}
}

export default Tabs;
