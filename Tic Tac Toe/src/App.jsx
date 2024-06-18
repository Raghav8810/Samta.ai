import { useEffect, useState } from "react";

import "./App.css";
import { PlayBoard } from "./components/PlayBoard";
import PlayerScores from "./components/PlayerScores";
import ResetButton from "./components/ResetButton";

const App = () => {
  const WINNING_CONDITIONS = [
    [0, 1, 2],[3, 4, 5],[6, 7, 8],
    [0, 3, 6],[1, 4, 7],[2, 5, 8],
    [0, 4, 8],[2, 4, 6],
  ];

  const [xPlaying, setXPlaying] = useState(true);
  const [playboardTable, setPlayBoardTable] = useState(Array(9).fill(null));
  const [scores, setScores] = useState(DefaultScores);
  const [reset, setReset] = useState(false);

  function DefaultScores() {
    const savedPlayerScores = localStorage.getItem("playersScores");
    return savedPlayerScores
      ? JSON.parse(savedPlayerScores)
      : { xScore: 0, oScore: 0 };
  }

  useEffect(() => {
    localStorage.setItem("playersScores", JSON.stringify(scores));
  }, [scores]);

  const handleBoxItemClick = (boxId) => {
    // Update the board
    const onBoardUpdate = playboardTable.map((value, id) => {
      if (id === boxId) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    });

    setPlayBoardTable(onBoardUpdate);

    // check which player won
    const winner = checkWinner(onBoardUpdate);

    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }

    // active player have to change
    setXPlaying(!xPlaying);
  };

  //winning function
  const checkWinner = (board) => {
    for (let i = 0; i < WINNING_CONDITIONS.length; i++) {
      const [x, y, z] = WINNING_CONDITIONS[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setReset(true);
        return board[x];
      }
    }
  };

  //reset function
  const resetBoard = () => {
    setReset(false);
    setPlayBoardTable(Array(9).fill(null));
  };

  return (
    <div className="App">
      <PlayerScores scores={scores} xPlaying={xPlaying} />
      <PlayBoard
        board={playboardTable}
        onClick={reset ? resetBoard : handleBoxItemClick}
      />
      <ResetButton resetBoard={resetBoard} />
    </div>
  );
};

export default App;
