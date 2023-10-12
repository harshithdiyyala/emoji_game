import {Component} from 'react'

import './index.css'

import NavBar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

import EmojiCard from '../EmojiCard'
/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {currentScore: 0, topScore: 0, displayWin: false, prevClicked: []}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  updateDisplay = () => {
    const {topScore, currentScore} = this.state

    let newScore = topScore
    if (currentScore > topScore) {
      newScore = currentScore
    }
    this.setState({
      displayWin: false,
      currentScore: 0,
      topScore: newScore,
      prevClicked: [],
    })
  }

  updateScore = id => {
    const {prevClicked, currentScore} = this.state

    if (prevClicked === []) {
      this.setState(prevState => ({
        prevClicked: [...prevState.prevClicked, id],
        currentScore: prevState.currentScore + 1,
      }))
    } else if (prevClicked.includes(id) || currentScore === 12) {
      this.setState({
        displayWin: true,
      })
    } else {
      this.setState(prevState => ({
        prevClicked: [...prevState.prevClicked, id],
        currentScore: prevState.currentScore + 1,
      }))
    }
  }

  displayGame = () => {
    const emojiList = this.shuffledEmojisList()

    return (
      <ul className="emoji-container">
        {emojiList.map(item => (
          <EmojiCard item={item} key={item.id} updateScore={this.updateScore} />
        ))}
      </ul>
    )
  }

  render() {
    const {currentScore, topScore, displayWin} = this.state

    return (
      <div className="emoji-game-page">
        <NavBar
          currentScore={currentScore}
          topScore={topScore}
          displayWin={displayWin}
        />

        <div className="game-container">
          {displayWin === true ? (
            <WinOrLoseCard
              currentScore={currentScore}
              updateDisplay={this.updateDisplay}
              displayWin={displayWin}
            />
          ) : (
            this.displayGame()
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
