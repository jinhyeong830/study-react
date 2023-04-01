import React, { useState } from "react";
import MyComponent from "./MyComponent";
import MyComponentClass from "./MyComponentClass";
import Test from "./Test";
import Test2 from "./Test2";
import Counter from "./Counter";
import Say from "./Say";
import Event from "./Event";
import Sample from "./Sample";
import Validation from "./Validation";
import LifeCycle from "./LifeCycle";
import CounterFunction from "./CounterFunction";
import Info from "./Info";
import CounterReducer from "./CounterReducer";
import AverageMemo from "./AverageMemo";
import AverageCallback from "./AverageCallback";

function getRandomColor() {
	return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
const App = () => {
	const [color, setColor] = useState("#000");
	const [visible, setVisible] = useState(false);

	const handleClick = () => {
		setColor(getRandomColor());
		console.log("nn");
	};
	return (
		<>
			{/* <MyComponent name="hi" favoriteNumber={5}>
				리액트
			</MyComponent>
			<Test />
			<Test2 />
			<MyComponentClass favoriteNumber={77}>클래스의 child</MyComponentClass> */}
			{/* <Counter /> */}
			<Say />
			<Event />
			<Sample />
			<Validation />
			<button onClick={handleClick}>랜덤 색상</button>ff
			<LifeCycle color={color} />
			<CounterFunction />
			{/* Hooks : useEffect */}
			<div>
				<button
					onClick={() => {
						setVisible(!visible);
						//setVisible 이용해서 visible 값을 true/false 로 왔다갔다하게 만듦
					}}
				>
					{visible ? "숨기기" : "보이기"}
				</button>
				<hr />
				{visible && <Info />}
				{/* true && <Info /> */}
				{/* false && <Info /> */}
			</div>
			{/* Hooks : useReducer = 컴포넌트 업데이트 로직을 컴포넌트 밖으로 뺄 수 있음*/}
			<CounterReducer />
			<AverageMemo />
			<AverageCallback />
		</>
	);
};

export default App;
