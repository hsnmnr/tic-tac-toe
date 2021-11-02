import React, { useState, useEffect } from "react";

import { Intro, Board } from ".";

const Game = () => {
    const [status, setStatus] = useState("X");
    const [winner, setWinner] = useState("");
    const [turns, setTurns] = useState(0);

    useEffect(() => {
        console.log(turns);
        setTurns(turns + 1);
    }, [status]);

    const restartGame = () => {
        window.location.reload();
    }
    
    return (
        <div id="main">
            <Intro />
            <div className="game">
                <div className="game-info">
                    <div> Player {status}'s turn</div>
                </div>
                <div className="game-board">
                    <Board
                        playerStatus={status}
                        setPlayerStatus={setStatus}
                        setWinner={setWinner}
                    />
                </div>
                {winner !== "" ? (
                    <div className="game-info">
                        <div> Player {winner} won</div>
                        <button onClick={restartGame}>重新开始游戏</button>
                    </div>
                ) : turns > 9 ? (
                    <div className="game-info">
                        <div> Its a DRAW</div>
                        <button onClick={restartGame}>重新开始游戏</button>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default Game;
