import React, { useReducer } from "react";
// 훅3: useReducer
// reducer 함수 정의
function reducer(state, action) {
	switch (action.type) {
		case "INCREMENT":
			return { value: state.value + 1 };
		case "DECREMENT":
			return { value: state.value - 1 };
		default:
			return state;
	}
}

const CounterReducer = () => {
	// useReducer의 첫번째 인자 reducer
	// useReducer의 두번째 인자 : 해당 reducer의 기본값

	const [state, dispatch] = useReducer(reducer, { value: 0 });
	// state: 현재 상태
	// dispatch : 액션 발생 함수> dispatch(action)
	//      - 함수 안 parameter로 액션값을 넣어주면 리듀서 함수가 호출되는 구조
	return (
		<>
			<h1>{state.value}</h1>

			<button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
			<button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
		</>
	);
};

export default CounterReducer;
