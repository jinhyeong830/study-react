import React, { Component } from "react";
// 1. state1 - 클래스형 컴포넌트에서의 state
// state? 컴포넌트 내부에서 바뀔 수 있는 값
class Counter extends Component {
	//컴포넌트에 state 설정시 constructor 메소드 사용해서 설정
	constructor(props) {
		//클래스형 컴포넌트에서 constructor를 작성할 떄는 반드시 super(props) 호출해야 함
		//super 호출시 현재 클래스형 컴포넌트가 상속하고 있는 Component 클래스가 생성자 함수 호출
		// 한마디로 super를 쓰면 생성자 함수 호출
		super(props); //constructor와 super는 짝꿍

		// this.state로 초기값 설정
		this.state = {
			number: 0,
		};
	}

	//render 에서 현재 state 조회시 this.state 사용
	render() {
		const { number } = this.state;
		return (
			<div>
				<h1>{number}</h1>
				{/*button내부에 onClick을 props로 넣은 것.*/}
				{/*이벤트 설정시 화살표 함수 사용*/}
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
