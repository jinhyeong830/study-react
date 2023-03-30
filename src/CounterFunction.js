import React, { useState } from "react";

const CounterFunction = () => {
	//1.useState 이용해서 초기값 세팅 -> 0으로
	const [number, setNumber] = useState(0);
	// 함수호출시 배열 반환~!
	// 첫번째 원소는 상태 값 두번째 원소를 설정하는 Setter 함수
	// 하나의 useState는 하나의 상태값만 관리할 수 있는데 여러개의 상태를 관리하려면 어떻게 ?
	// 여러 개라면 useState 를 여러번 사용
	return (
		<>
			<h1>{number}</h1>
			<button onClick={() => setNumber(number - 1)}> -1 </button>
			<button onClick={() => setNumber(number + 1)}> +1 </button>
		</>
	);
};

export default CounterFunction;
