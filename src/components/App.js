import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			para: false,
			display: null
		};
	};
	componentDidMount() {
		this.setState({
			display: () => {
				this.showPara()
			}
		})
	}

	showPara() {
		this.setState({
			para: true,
		})
	}


	render() {
		return (
			<div id="main">
				<button id='click' onClick={this.state.display}>Click Me</button>
				{this.state.para ? (<p id='para'>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>) : null}
				{ /* Do not remove this main div!! */}
			</div>
		);
	}
}


export default App;

