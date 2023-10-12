// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {currentScore, updateDisplay} = props

  const updateState = () => {
    updateDisplay()
  }

  return (
    <div className="win-lose-card">
      <div className="win-lose-display-container">
        {currentScore === 12 ? <h1>You Won</h1> : <h1>You Lose</h1>}
        {currentScore === 12 ? <p>Best Score</p> : <p>Score</p>}
        <h1 className="score">{currentScore}/12</h1>
        <button
          onClick={updateState}
          type="button"
          className="play-again-button"
        >
          Play Again
        </button>
      </div>
      <div className="image-container">
        {currentScore === 12 ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
          />
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="win or lose"
          />
        )}
      </div>
    </div>
  )
}

export default WinOrLoseCard
