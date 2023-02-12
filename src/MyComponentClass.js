//똑같은데, 클래스형 컴포넌트로 사용
import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponentClass extends Component {
	render() {
		const { name, children, favoriteNumber } = this.props;
		return (
			<div>
				내 이름은 {name} <br />
				children 값은 {children}
				<br />
				like number is {favoriteNumber}
			</div>
		);
	}
}

// App.js에서 Default설정 안했을 때를 대비해서.
// defalut 값선언
MyComponentClass.defaultProps = {
	name: "default name",
};

MyComponentClass.propTypes = {
	name: PropTypes.string,
	favoriteNumber: PropTypes.number.isRequired,
};
export default MyComponentClass;
//import 시킬 수 있도록 내보내는 것
