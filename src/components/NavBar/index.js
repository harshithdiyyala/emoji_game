// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, topScore, displayWin} = props

  console.log(displayWin)
  console.log(currentScore, topScore)
  return (
    <nav>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {displayWin === false ? (
        <div>
          <p>Score: {currentScore} </p>
          <p>Top Score: {topScore}</p>
        </div>
      ) : (
        ''
      )}
    </nav>
  )
}

export default NavBar
