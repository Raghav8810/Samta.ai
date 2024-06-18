/* eslint-disable react/prop-types */
import GameBox from "./GameBox";

import "../styles/PlayBoard.css"
export const PlayBoard = ({ board, onClick }) => {
  return (
    <div className="board">
      {
        board.map((value, idx) => {
          // eslint-disable-next-line react/jsx-key
          return <GameBox key={idx} value={value} onClick={() => value === null && onClick(idx)} />;
        })
      }
    </div>
  )
}
