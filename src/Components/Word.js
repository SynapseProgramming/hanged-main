import React from "react";

import "../index.css";

const Word = props => {
	console.log("selected word " + props.selectedWord);
	console.log(props.correctLetters);
	let splitCorrect = props.selectedWord.split("");
	console.log(splitCorrect.length);
	const wow = splitCorrect.map(inp => (
		<div className="colC">
			<div className="word">
				<h1>{props.correctLetters.includes(inp) ? inp : ""}</h1>
			</div>
		</div>
	));

	<div className="rowC">{wow}</div>;
	return <div>{wow}</div>;
};

export default Word;
