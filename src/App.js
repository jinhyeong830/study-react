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

function getRandomColor() {
	return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
const App = () => {
	const [color, setColor] = useState("#000");

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
			diq
		</>
	);
};

export default App;
