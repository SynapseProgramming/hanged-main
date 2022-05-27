import React, { useEffect } from 'react'

function Popup({correctLetters, wrongLetters, selectedWord, setPlayable}) {
    let playable = true;
    let finalMessage = '';
    let finalMessageRevealWord = '';
    if (correctLetters.length === new Set(selectedWord).size) {
        finalMessage = "You won!";
        playable = false;
    } else if (wrongLetters.length === 6) {
        finalMessage = "You lost! Better luck next time!";
        finalMessageRevealWord = `The word was: ${selectedWord}`;
        playable = false;
    }
    useEffect(() => {
        setPlayable(playable);
      });
        return  (
    <div className = "popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
        <div className = "popup">
            <h2>{finalMessage}</h2>
            <h3>{finalMessageRevealWord}</h3>
            <button onClick = {refreshPage}>Retry</button>
        </div>
            </div>
  ) 
}

function refreshPage() {
    window.location.reload(false);
}

export default Popup