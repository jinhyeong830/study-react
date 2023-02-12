import React from "react";
import coding from "./mincho.jpeg";

const Test2 = () => {
	const style = {
		color: "red",
		fontSize: "20px",
		marginTop: "2rem",
	};
	return (
		<div style={style}>
			<h2>안녕하세요</h2>
			<img src="{coding}" alt="몰라" />
		</div>
	);
};

export default Test2;
