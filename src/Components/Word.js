import React from "react";

import "../index.css";

const Word = props => {
	let splitCorrect = props.selectedWord.split("");
	const row = splitCorrect.map(inp => (
		<div className="colC">
			<h1>{props.correctLetters.includes(inp) ? inp : ""}</h1>
		</div>
	));
	<div className="rowC">{row}</div>;
	return <div>{row}</div>;
};

export default Word;
