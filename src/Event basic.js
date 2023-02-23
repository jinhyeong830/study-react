import React, { Component } from "react";

class Event extends Component {
	//state 사용시에는 초깃값 설정
	state = {
		message: "",
	};
	render() {
		return (
			<>
				<h1>리액트의 이벤트</h1>
				<input
					type="text"
					name="message"
					placeholder="입력창"
					value={this.state.message}
					onChange={(e) => {
						/* 이벤트 핸들링 함수 내부에서 this.setState 실행*/
						/* state에 현재값 저장하는 것? */
						this.setState({ message: e.target.value });
					}}
				/>

				<button
					onClick={() => {
						//버튼 누르면 현재 input창에 있는 텍스트가 알림창으로 뜨고
						//message 공백으로 초기화
						alert(this.state.message);
						this.setState({
							message: "",
						});
					}}
				>
					버튼
				</button>
			</>
		);
	}
}

export default Event;
