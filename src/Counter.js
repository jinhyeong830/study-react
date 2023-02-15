import React, { Component } from "react";
// state? 컴포넌트 내부에서 바뀔 수 있는 값
class Counter extends Component {
	//컴포넌트에 state 설정시 constructor 메소드 사용해서 설정
	constructor(props) {
		super(props);

		this.state = {
			number: 0,
		};
	}

	render() {
		const { number } = this.state;
		return (
			<div>
				<h1>{number}</h1>
				<button
					onClick={() => {
						this.setState({ number: number + 1 });
					}}
				>
					{" "}
					+ 1
				</button>
			</div>
		);
	}
}

export default Counter;
