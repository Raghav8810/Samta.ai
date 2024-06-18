
import "../styles/ResetButton.css";

const ResetButton = ({ resetBoard }) => {
    return (
        <button className="reset-btn" onClick={resetBoard}>Restart</button>
    )
}

export default ResetButton;
