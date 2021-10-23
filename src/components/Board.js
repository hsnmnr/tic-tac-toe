import React, { useState, useEffect } from "react";

import { Square } from ".";

const Board = ({ playerStatus, setPlayerStatus, setWinner }) => {
    const [boardState, setBoardState] = useState([
        ".",
        ",",
        ".",
        ",",
        ".",
        ",",
        ",",
        ".",
        ",",
    ]);
    const [canPlayGame, setCanPlayGame] = useState(true);

    useEffect(() => {
        console.log(boardState);
        if (findWinner()) {
            setWinner(playerStatus === "X" ? "O" : "X");
            setCanPlayGame(false);
        }
    }, [playerStatus]);

    const findWinner = () => {
        if (
            (boardState[0] === boardState[1] &&
                boardState[0] === boardState[2]) ||
            (boardState[3] === boardState[4] &&
                boardState[4] === boardState[5]) ||
            (boardState[6] === boardState[7] &&
                boardState[7] === boardState[8]) ||
            (boardState[0] === boardState[3] &&
                boardState[3] === boardState[6]) ||
            (boardState[1] === boardState[4] &&
                boardState[4] === boardState[7]) ||
            (boardState[2] === boardState[5] &&
                boardState[5] === boardState[8]) ||
            (boardState[0] === boardState[4] && boardState[4] === boardState[8])
        ) {
            return true;
        }
        return false;
    };

    const renderSquare = (i) => {
        return (
            <Square
                canPlayGame={canPlayGame}
                playerStatus={playerStatus}
                setPlayerStatus={setPlayerStatus}
                boardState={boardState}
                setBoardState={setBoardState}
                index={i}
            />
        );
    };

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
};

export default Board;
