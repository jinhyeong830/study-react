import React, { Component } from "react";
// input 여러개일때! & key press event ver.
// 메소드 여러개? -> 도 되지만 event 객체의 활용
class Event extends Component {
	state = {
		username: "",
		message: "",
	};

	eventChange = (e) => {
		//핵심!⭐
		/*
		const name = "key";
		const obj = {
			[name] : "value",
		};
		*/
		this.setState({
			// key를 []로 감싸면 그 안에 넣은 실제 값이 key값으로 사용됨.
			[e.target.name]: e.target.value,
		});
	};

	eventClick = () => {
		alert(this.state.username + ": " + this.state.message);
		this.setState({
			username: "",
			message: "",
		});
	};

	// enter치면 이벤트 클릭함수 발동(?) 되는 것과 똑같이 되도록 하는 것
	eventKeyPress = (e) => {
		if (e.key === "Enter") {
			this.eventClick();
		}
	};

	render() {
		return (
			<>
				<h1>리액트의 이벤트</h1>
				<input type="text" name="username" placeholder="사용자 이름" value={this.state.username} onChange={this.eventChange} />
				<input type="text" name="message" placeholder="메세지 입력" value={this.state.message} onChange={this.eventChange} onKeyPress={this.eventKeyPress} />
				<button onClick={this.eventClick}>click!</button>
			</>
		);
	}
}

export default Event;
