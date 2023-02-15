/* 원래 함수형 컴포넌트에선 state 사용이 안됐었지만
useState의 등장으로 가능해짐 */
import React, { useState } from "react";

const Say = () => {
	//배열 비구조화 할당
	const [message, setMessage] = useState("");
	/* useState
    - useState 의 인자에는 상태의 초기값 넣어줌
    - 초깃값은 숫자, 문자열, 배열.. 등등 자유롭게 가능
    - 함수 호출시 배열이 반환. 
        - 배열의 첫번째 원소는 현재 상태(message)
        - 두번째 원소는 상태를 바꿔주는 함수(setMessage)
    - Setter function
    - message, setMessage 등의 이름은 자유롭게 짓는 것..
    - 하나의 컴포넌트에서 여러번 사용해도 상관 없음.
    - state 값을 바꿀 떄는 
      setState(class Component)나 useState(functional Component)를 통해
      전달받은 Setter 함수 사용해야 함

      vs. props와 비교해서 생각해보기
      * props는 부모 컴포넌트가 설정
      * state는 컴포넌트 자체적으로 지닌 값으로 컴포넌트 내부에서 값을 업데이트.ㄴ
    */
	const onClickEnter = () => setMessage("안녕하세요!");
	const onClickLeave = () => setMessage("안녕히 가세요.!");

	// useState 두번째 사용
	const [color, setColor] = useState("black");

	return (
		<div>
			<button onClick={onClickEnter}>입장</button>
			<button onClick={onClickLeave}>퇴장</button>
			<h1 style={{ color }}>{message}</h1>

			<button style={{ color: "red" }} onClick={() => setColor("red")}>
				빨간색
			</button>

			<button style={{ color: "blue" }} onClick={() => setColor("blue")}>
				{" "}
				파란색
			</button>

			<button style={{ color: "yellowgreen" }} onClick={() => setColor("yellowgreen")}>
				연두색
			</button>
		</div>
	);
};

export default Say;
