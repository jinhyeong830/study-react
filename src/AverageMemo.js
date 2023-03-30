import React, { useState, useMemo } from "react";

// 매개변수로 들어오는건 배열이엇군..
const getAverage = (numbers) => {
	console.log("평균값 계산!");
	if (numbers.length === 0) return 0;
	const sum = numbers.reduce((a, b) => a + b);
	return sum / numbers.length;
};

const AverageMemo = () => {
	const [list, setList] = useState([]);
	const [number, setNumber] = useState("");

	const onChange = (e) => {
		setNumber(e.target.value);
	};

	// 숫자 추가.. concat?
	const onInsert = (e) => {
		const nextList = list.concat(parseInt(number));
		setList(nextList);
		setNumber("");
	};

	/* useMemo!! 추가!!*/
	const avg = useMemo(() => getAverage(list), [list]);
	return (
		<>
			<input value={number} onChange={onChange} />
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

export default AverageMemo;
