import React, { useState } from "react";

const Square = ({
    canPlayGame,
    playerStatus,
    setPlayerStatus,
    boardState,
    setBoardState,
    index,
}) => {
    const [value, setValue] = useState("");
    const [empty, setEmpty] = useState(true);

    const handleTurn = () => {
        if (empty && canPlayGame) {
            setValue(playerStatus);
            handlePlayerStatus();
            setEmpty(false);
            setBoardState(() => {
                var x = boardState;
                x[index] = playerStatus;
                return x;
            });
        }
    };

    const handlePlayerStatus = () => {
        if (playerStatus === "X") {
            setPlayerStatus("O");
        } else {
            setPlayerStatus("X");
        }
    };

    return (
        <button onClick={handleTurn} className="square">
            {value}
        </button>
    );
};

export default Square;
