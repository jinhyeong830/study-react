import React, { Component } from "react";
import "./Validation.css";
// ref 사용!!
// 1. 콜백 함수 사용
// - input ref 라는 콜백함수를 props로 전달
// <input ref={(ref)=>{this.input = ref}}>
// 인자로 들어가는 ref는 마음대로 지어줘도 됨?
// 2. createRef 함수 사용

class Validation extends Component {
	// state 초기값- 검사전?
	state = {
		password: "",
		clicked: false,
		validated: false,
	};

	// input 에 onChange 이벤트 발생시 호출할 함수
	// state의 password를 e.target.value로 업데이트
	handleChange = (e) => {
		this.setState({
			password: e.target.value,
		});
	};

	// button에서 onclick 이벤트 발생하면 발동할 함수
	// 마찬가지로 스테이트 지정
	// 버튼 클릭시 clicked 요소 f-> t && validated 값 (TF로 나옴)
	handleButtonClick = () => {
		this.setState({
			clicked: true,
			validated: this.state.password === "0000",
		});
	};
	render() {
		return (
			<>
				<input
					type="password"
					value={this.state.password}
					onChange={this.handleChange}
					className={this.state.clicked ? (this.state.validated ? "success" : "failure") : ""}
				/>

				<button onClick={this.handleButtonClick}>검증</button>
			</>
		);
	}
}

export default Validation;
