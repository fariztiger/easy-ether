import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.scss';
import { balanceSelector } from './redux/selectors';
import Account from './Account';
import Login from './Login';
import { Container, Row, Col, Image, Navbar } from 'react-bootstrap';
import {SocialIcon} from 'react-social-icons';
import FadeIn from 'react-fade-in';
import logo from './img/logo-white.png';

class App extends Component {

	render() {

		const {loadedBalance} = this.props;

		return (
		<div className="app h-100">
			<Navbar fixed="top">
				<FadeIn>
					<Navbar.Brand>
						<Image
							src={logo}
							width="35"
							height="35"
							className="d-inline-block align-top"
							alt="logo"
						/>
						{' '}
						<span>Easy Ether</span>
					</Navbar.Brand>
				</FadeIn>
			</Navbar>
			{ loadedBalance != null ? <Account /> : <Login /> }
			<footer>
				<Container>
					<Row>
						<Col className="text-center pt-4 pb-2">
							<FadeIn>
								<span><a href="https://alexroan.co.uk">Alex Roan</a></span>
							</FadeIn>
						</Col>
					</Row>
					<FadeIn>
						<Row>
							<Col className="text-center pb-4">
								<SocialIcon className="mx-1" url="https://twitter.com/alexroan" />
								<SocialIcon className="mx-1" url="https://github.com/alexroan" />
								<SocialIcon className="mx-1" url="https://medium.com/@alexroan" />
								<SocialIcon className="mx-1" network="email" url="mailto:alex.roan@hotmail.com" />
							</Col>
						</Row>
					</FadeIn>
				</Container>
			</footer>
		</div>
		);
	}
}

function mapStateToProps(state){
	return {
		loadedBalance: balanceSelector(state),
	}
}

export default connect(mapStateToProps)(App);
