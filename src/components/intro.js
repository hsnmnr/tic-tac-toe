import React from "react";

// Intro

const Intro = () => {
    return (
        <div id="intro">
            <h1 class="title"> Simple Tick-Tac-Toe Game</h1>
            <div class="description">
                <p> How to play the game. </p>
                <ul>
                    <li>
                        There are two Players: Player 1 (X) and Player 2 (O)
                    </li>
                    <li>
                        Each Player will take alternate turns. (Player X takes
                        first turn)
                    </li>
                    <li>
                        The Application will show the current user to play and
                        will mark the board square with the player's symbol
                    </li>
                    <li>
                        The Application will declare a winner when either player
                        has 3 consecutive symbol's (vertical, horizontal,
                        diagonal)
                    </li>
                    <li>
                        The Application will declare draw if neither player made
                        a match. (After all the squares are marked)
                    </li>
                    <li>Refrest the page to play again.</li>
                </ul>
            </div>
        </div>
    );
};

export default Intro;
