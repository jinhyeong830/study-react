import React, { Component } from "react";

// const LifeCycle = () => {
// 	state = {
// 		number: 0,
// 		color: "purple",
// 	};

//     myRef = null;

//     constructor(props) {
//         super
//     }
// };
// 함수형 컴포넌트로 만들고 싶은데..

class LifeCycle extends Component {
	state = {
		number: 0,
		color: "purple",
	};
	//함수형 컴포넌트에서 초기 스테이트 설정 어떻게 할지 찾아보기

	myRef = null;

	constructor(props) {
		super(props);
		console.log("constructor");
	}

	// props로 받아온 값을 state로 동기화 시키는 용도
	// 컴포넌트가 마운트될 때와 업데이트될 때 호출됨
	static getDerivedStateFromProps(nextProps, prevState) {
		console.log("get Derived State From Props");
		// 조건에 따라 특정값 동기화
		if (nextProps.color !== prevState.color) {
			return { color: nextProps.color };
		}
		// 변경할 필요가 없다면 null 반환
		return null;
	}

	// 컴포넌트를 만들고 첫 렌더링을 다 마친 후 실행
	// 자바스크립트 라이브러리나 프레임워크의 함수 호출
	// 이벤트 등록 등 '비동기 작업' 처리
	componentDidMount() {
		console.log("component Did Mount");
	}

	//props 또는 state 를 변경했을 때 리렌더링 시작할지 여부
	// true false 반환,
	// 따로 메소드 생성하지 않으면 기본적으로 true반환
	shouldComponentUpdate(nextProps, nextState) {
		/* 
        - 현재 props와 state는 this.props, this.state로 접근
        - 새로 설정된 props와 state는 nextProps와 nextState로 접근
        */
		console.log("should Component Update", nextProps, nextState);

		return nextState.number % 10 !== 4;
		// 숫자의 마지막 자리가 4면 리렌더링 하지 않음?
	}

	// 컴포넌트를 DOM에서 제거할 때 실행
	// componentDidMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM
	// 이곳에서 제거 작업
	componentWillUnmount() {
		console.log("component Will Unmount");
	}

	handleClick = () => {
		this.setState({
			number: this.state.number + 1,
		});
	};

	// render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출
	// 함수의 반환값은 componentDidUpdate에서
	// 세번째 파라미터인 'snapshot'값으로 전달받을 수 있음

	// 주로 업데이트 하기 직저의 값을 참고할 일이 있을 떄 활용
	// ex>> 스크롤바 위치 유지하고 싶을 때?
	getSnapshotBeforeUpdate(prevProps, nextProps) {
		console.log("get Snap Shot before update");

		if (prevProps.color !== this.props.color) {
			return this.myRef.style.color;
		}
		return null;
	}

	// 리렌더링 완료한 후 실행
	// prevProps나 prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근!
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log("componentDidUpdate", prevProps, prevState);

		if (snapshot) {
			console.log("업데이트되기 직전 색상 : ", snapshot);
		}
	}

	render() {
		console.log("render");
		const style = {
			color: this.props.color,
		};

		return (
			<>
				{/* 아직 hook을 몰라서... ref있는 코드는 변경할 수가 없넹 */}
				<h1 style={style} ref={(ref) => (this.myRef = ref)}>
					{this.state.number}
				</h1>

				<p>color:{this.state.color}</p>

				<button onClick={this.handleClick}> 더하기</button>
			</>
		);
	}
}

export default LifeCycle;
