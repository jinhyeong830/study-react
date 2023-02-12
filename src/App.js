import MyComponent from "./MyComponent";
import MyComponentClass from "./MyComponentClass";
import Test from "./Test";
import Test2 from "./Test2";
const App = () => {
	return (
		<>
			<MyComponent name="hi" favoriteNumber={5}>
				리액트
			</MyComponent>
			<Test />
			<Test2 />
			<MyComponentClass favoriteNumber={77}>클래스의 child</MyComponentClass>
		</>
	);
};

export default App;
