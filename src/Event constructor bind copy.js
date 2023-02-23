import React, { Component } from "react";
// 이벤트에 전달할 함수 딸 빼서 작성 ver.
class Event extends Component {
	//state 사용시에는 초깃값 설정
	state = {
		message: "",
	};
	constructor(props) {
		super(props);
		//bind : this가 현재 컴포넌트
		//==>컴포넌트 자신을 제대로 가리키기 위해서 사용
		/* 함수가 호출될 때 this는 호출부에 따라 결정되는데,
        임의 메소드가 특정 html 요소의 이벤트로 등록되면서 메소드와 this의 관계가 끊어지게 됨
         따라서 임의 메소드가 이벤트로 등록되어도 this가 컴포넌트 자신을 가리키게 하기 위해서
         메소드를 this와 바인딩하는 작업이 필요
         
         바인딩을 하지 않으면, this는 undefined 를 가리킴.
         ==> constructor에서 함수를 바인딩하는 작업을 하는 것.*/
		// 생성자 함수 constructor에 바인딩 하는 것.
		this.eventChange = this.eventChange.bind(this);
		this.eventClick = this.eventClick.bind(this);
	}

	eventChange(e) {
		this.setState({
			message: e.target.value,
		});
		console.log(e.target.value);
	}

	eventClick() {
		alert(this.state.message);
		this.setState({
			message: "",
		});
	}

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
