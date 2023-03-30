import React, { useEffect, useState } from "react";

const Info = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	//useEffect
	useEffect(() => {
		console.log("렌더링이 완료되었습니다!");
		console.log({
			name,
			email,
		});
	});

	// 두번째 인자로 빈배열 넣기> 처음 렌더링될 때만 실행
	useEffect(() => {
		console.log("처음 렌더링될때만 실행됨");
	}, []);

	// props 안에 들어있는 value 값이 바뀔때마다 특정 작업을 수행
	// 검사하고 싶은 해당 value를 두번째 인자로 넣어두면 됨
	useEffect(() => {
		console.log("검사하고 싶은 value" + name);
	}, [name]);

	/* 컴포넌트가 언마운트되기 전이나 업데이트 되기 전에 어떤 작업을 수행하고 싶다면
    useEffect에서 cleanup 함수 반환 */
	console.log("dsdsdsd check!");
	useEffect(() => {
		console.log("effect");
		console.log(name);

		return () => {
			console.log("cleanup");
			console.log(name);
		};
	});

	const onChangeName = (e) => {
		setName(e.target.value);
	};

	const onChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	return (
		<>
			<div>
				<input value={name} onChange={onChangeName} />
				<input value={email} onChange={onChangeEmail} />
			</div>

			<div>
				<h2>이름 : {name}</h2>
				<h2>이메일 : {email}</h2>
			</div>
		</>
	);
};
// useEffect를 사용해여 컴포넌트가 랜더링되면 콘솔에
// 렌더링 되었다는 메세지가 뜨도록
export default Info;
