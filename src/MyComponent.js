import React from "react";
import PropTypes from "prop-types";

/* const MyComponent = (props) => {
	const { name, children } = props;
	return (
		<>
			<div>use props : {name}</div>
			<div>children : {children}</div>
		</>
	);
}; */

const MyComponent = ({ name, children, favoriteNumber }) => {
	return (
		<>
			<div>use props : {name}</div>
			<div>children : {children}</div>
			<div>가장 좋아하는 숫자 : {favoriteNumber}</div>
		</>
	);
};

// App.js에서 Default설정 안했을 때를 대비해서.
// defalut 값선언
MyComponent.defaultProps = {
	name: "default name",
};

MyComponent.propTypes = {
	name: PropTypes.string,
	favoriteNumber: PropTypes.number.isRequired,
};
export default MyComponent;
//import 시킬 수 있도록 내보내는 것
