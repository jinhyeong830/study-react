import React, { useState } from "react";
// 컴포넌트 이용해서 <li></li>내용 추가!
// 반복되는 코드를 효율적으로 작성하는 법! 요소 추가와 삭제
// 그런데 와중에 map 함수를 쓰는거고,
// key를 하나씩 부여하는거고
// 초기값을 두고 useState이용해서 값을 부여하는 것
// 키값은 유일해야 함! 키값 중복되면 렌더링 하는 과정에서 오류 발생
const Sample = () => {
	// const fashion = ["청바지", "패딩", "반팔", "운동화"];
	// const fashionList = fashion.map((fashion, index) => <li key={index}>{fashion}</li>);
	const [names, setNames] = useState([
		{ id: 1, text: "청바지" },
		{ id: 2, text: "패딩" },
		{ id: 3, text: "반팔" },
		{ id: 4, text: "운동화" },
	]);

	const [inputText, setInputText] = useState("");
	const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용하는 id

	const onChange = (e) => setInputText(e.target.value);
	// input에 값이 들어오면(onChange)
	// inputText를 그 값(e.target.value)으로 넣겠다는 의미.
	const onClick = () => {
		// 누르면
		const nextNames = names.concat({
			id: nextId,
			text: inputText,
		}); //concat? 그냥 배열에 내용추가하는것?!
		// 배열 내장함수인 concat을 사용하여 새로운 항목을 추가한 배열을 만들고
		// setNames를 통해 상태를 업데이트 해줬어요
		setNextId(nextId + 1); //nextID와 nextNmaes를 설정하는 useState 함수
		setNames(nextNames);
		setInputText("");
	};
	const onRemove = (id) => {
		const nextNames = names.filter((name) => name.id !== id);
		// names 배열에서 id가 들어오는 아이디와 같지 않다면
		// (더블클릭했을 때의 아이디와 같지 않다면)
		// 배열에 남겨(?)두기.. 남긴다기 보다는 해당 아이디 뺴고 재렌더링(?), 업데이트?
		setNames(nextNames);
	};

	const namesList = names.map((name) => (
		<li key={name.id} onDoubleClick={() => onRemove(name.id)}>
			{/* key와 더블클릭 속성 달려있음  */}
			{name.text}
		</li>
	));
	return (
		<>
			<input value={inputText} onChange={onChange} />
			<button onClick={onClick}>추가</button>
			<ul>
				{namesList}
				{/* li 태그가 네개 반복되고 있음 */}
			</ul>
		</>
	);
};

export default Sample;
