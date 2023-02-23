import React, { useState } from "react";
// 열받아..
const Event = () => {
	//useState로 초기값 설정?
	const [form, setForm] = useState({
		username: "",
		message: "",
	});
	const { username, message } = form;
	const onChange = (e) => {
		const nextForm = {
			...form, // 기존의 form 내용을 복사한다는 뜻? 전개구문?
			// 그리고 아래 줄로 원하는 값을 덮어씌우는 것?
			[e.target.name]: e.target.value,

			// onChange함수를 하나로 만들어서 일일이 onChangeUsername, onChangMessage
			//이렇게 안써줘도 됨
		};

		setForm(nextForm);
	};

	const onClick = () => {
		alert(username + ": " + message);
		//setForm으로
		setForm({
			username: "",
			message: "",
		});
	};
	const onKeyPress = (e) => {
		if (e.key === "Enter") {
			onClick();
		}
	};

	return (
		<div>
			<h1>리액트의 이벤트!!</h1>

			<input type="text" name="username" placeholder="사용자 이름" value={username} onChange={onChange} />

			<input type="text" name="message" placeholder="이곳에 입력해보세요." value={message} onChange={onChange} onKeyPress={onKeyPress} />

			<button onClick={onClick}>클릭</button>
		</div>
	);
};

export default Event;
