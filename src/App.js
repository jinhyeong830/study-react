import MyComponent from "./MyComponent";
import MyComponentClass from "./MyComponentClass";
import Test from "./Test";
import Test2 from "./Test2";
import Counter from "./Counter";
import Say from "./Say";
import Event from "./Event";

const App = () => {
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
		</>
	);
};

export default App;
