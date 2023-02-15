import React, { Component } from "react";
// 1. state1 - 클래스형 컴포넌트에서의 state
// state? 컴포넌트 내부에서 바뀔 수 있는 값
class Counter extends Component {
	//컴포넌트에 state 설정시 constructor 메소드 사용해서 설정

	//constructor 함수의 내부가 아니어도 초깃값 설정 가능
	state = {
		number: 0,
		fixedNumber: 0,
	};

	//render 에서 현재 state 조회시 this.state 사용
	render() {
		const { number, fixedNumber } = this.state;
		return (
			<div>
				<h1>{number}</h1>
				<h2>바뀌지 않는 값 :{fixedNumber}</h2>
				{/*button내부에 onClick을 props로 넣은 것.*/}
				{/*이벤트 설정시 화살표 함수 사용*/}
				<button
					// onClick={() => {
					// 	this.setState({ number: number + 1 });
					// 	this.setState({ number: this.state.number + 1 });
					// }} -> 두개의setState를 써도 1씩 늘어남. 비동기라서? 바로 state가 반영되는게 아니라서?

					// 위의 코드와 같은 기능을함.
					// function을 인자로 전달한다는 것만 다름
					onClick={() => {
						this.setState((prevState) => ({
							number: prevState.number + 1,
						}));
						this.setState((prevState) => {
							return {
								number: prevState.number + 1,
							};
						});
					}}
				>
					{" "}
					+ 1
				</button>
				{/*setState 함수에 인자로 fixedNumber를 전달해주지 않아서 변화x*/}
				{/*this.setState 를 사용해서 state 값 업데이트시 비동기적으로 업데이트*/}
			</div>
		);
	}
}

export default Counter;

// this.setState((prevState, props) => {
// prevState는 기존의 상태, prop는 현재 지니고있는 props
// props 생략 가능
//     return {
//       // 업데이트 하고 싶은 내용
//     }
// })
//setState로 객체를 전달(onclick처럼)하는게 아니고 setState의 인자로 함수를 넣어줌.
