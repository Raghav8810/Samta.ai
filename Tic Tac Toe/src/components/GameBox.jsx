/* eslint-disable react/prop-types */

import "../styles/GameBox.css";

const GameBox = ({ value, onClick }) => {
    const style = value === "X" ? "box x" : "box o";

    return (
        <button className={style} onClick={onClick}>{value}</button>
    )
}


export default GameBox;