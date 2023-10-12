// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {item, updateScore} = props

  const {id, emojiName, emojiUrl} = item

  const updateSpecificScore = () => {
    updateScore(id)
  }

  return (
    <li>
      <button onClick={updateSpecificScore} type="button">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
