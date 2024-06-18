/* eslint-disable react/prop-types */

import "../styles/PlayerScores.css"

const PlayerScores = ({ scores, xPlaying }) => {
  const { xScore, oScore } = scores;

  return (
    <div className="scoreboard">
    
      <span className={`score x-score ${!xPlaying && "inactive"}`}>Player X - {xScore}</span>
      <span className={`score o-score ${xPlaying && "inactive"}`}>Player Y - {oScore}</span>
    </div>
  )
}

export default PlayerScores
