import React, { Component } from "react";
// 이벤트에 전달할 함수 딸 빼서 작성 ver. -> 화살표 함수
class Event extends Component {
	//state 사용시에는 초깃값 설정
	state = {
		message: "",
	};
	/*생성자함수 constructor 만들지 않고
	화살표 함수로 해결하는 방법
	*/

	eventChange = (e) => {
		this.setState({
			message: e.target.value,
		});
		console.log(e.target.value);
	};

	eventClick = () => {
		alert(this.state.message);
		this.setState({
			message: "",
		});
	};

	render() {
		return (
			<>
				<h1>리액트의 이벤트</h1>
				<input type="text" name="message" placeholder="이곳에 입력해보세요." value={this.state.message} onChange={this.eventChange} />
				<button onClick={this.eventClick}>click!</button>
			</>
		);
	}
}

export default Event;
