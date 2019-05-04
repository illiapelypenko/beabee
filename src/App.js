import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Todos from './components/Todos';
import Tabs from './components/Tabs';
import Mainpage from './components/Mainpage';

const AppWrapper = styled.div`
	a {
		text-decoration: none;
	}
	a:visited {
		color: initial;
	}

	.fas,
	.far {
		cursor: pointer;
	}
`;

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<AppWrapper>
						<Header />
						<Tabs />
						<Switch>
							<Route exact path='/' component={Mainpage} />
							<Route exact path='/add' component={Form} />
						</Switch>
						<Footer />
					</AppWrapper>
				</Router>
			</Provider>
		);
	}
}
export default App;
