import React, { useState, useMemo, useCallback, useRef } from "react";

// 매개변수로 들어오는건 배열이엇군..
const getAverage = (numbers) => {
	console.log("평균값 계산!");
	if (numbers.length === 0) return 0;
	const sum = numbers.reduce((a, b) => a + b);
	return sum / numbers.length;
};

const AverageCallback = () => {
	const [list, setList] = useState([]);
	const [number, setNumber] = useState("");
	const input = useRef(null); // ref 추가

	/* 기존 함수 선언 */
	// const onChange = (e) => {
	// 	setNumber(e.target.value);
	// };

	// 숫자 추가.. concat?
	// const onInsert = (e) => {
	// 	const nextList = list.concat(parseInt(number));
	// 	setList(nextList);
	// 	setNumber("");
	// };

	/* useCallback 사용해서 함수 선언 */
	// 두번째인자의 배열은 해당 값이 바뀌었을 때 함수 새로 생성하도록하는 값들을 넣으면 됨
	// 컴포넌트가 처음 렌더링될 때만 함수 생성> 빈배열
	const onChange = useCallback((e) => {
		setNumber(e.target.value);
		console.log("빈배열은 한 번만 실행됨?");
	}, []); // 두번째 인자로 빈 배열

	const onInsert = useCallback(() => {
		const nextList = list.concat(parseInt(number));
		setList(nextList);
		setNumber("");
		input.current.focus(); //useref 추가
		/*current값이 ref 를 달게 되는 태그를직접 가리키게 돼서
		input 에 ref를 달거니까
		클릭을 이용해서 등록을 마치고 나서
		포커스가 인풋에 가게 하도록..?
		*/
		console.log("얍");
	}, [number, list]);
	//number 나 list가 바뀌었을 때만 함수 생성

	const avg = useMemo(() => getAverage(list), [list]);
	return (
		<>
			{/* input 태그에 ref 추가 */}
			<input value={number} onChange={onChange} ref={input} />
			<button onClick={onInsert}>등록</button>
			<ul>
				{list.map((value, index) => {
					return <li key={index}>{value}</li>;
				})}
			</ul>

			<div>
				{/* <b>평균값 : {getAverage(list)}</b> usememo 쓰기 전!!*/}
				<b>평균값 : {avg}</b>
			</div>
		</>
	);
};

export default AverageCallback;
