import {Component} from 'react'
import './index.css'

const headsImageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    imageUrl: headsImageUrl,
    headsCount: 0,
    tailsCount: 0,
  }

  tossTheCoin = () => {
    const {headsCount, tailsCount} = this.state
    const randomNumber = Math.floor(Math.random() * 2)
    let tossImageUrl = ''
    let newHeadsCount = headsCount
    let newTailscount = tailsCount

    if (randomNumber === 0) {
      tossImageUrl = headsImageUrl
      newHeadsCount += 1
    } else {
      tossImageUrl = tailsImageUrl
      newTailscount += 1
    }
    this.setState({
      imageUrl: tossImageUrl,
      headsCount: newHeadsCount,
      tailsCount: newTailscount,
    })
  }

  getTotalCount = () => {
    const {headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return totalCount
  }

  render() {
    const {imageUrl, headsCount, tailsCount} = this.state
    const totalCount = this.getTotalCount()
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para-text">Heads (or) Tails</p>
          <img className="image" src={imageUrl} alt="toss result" />
          <button onClick={this.tossTheCoin} className="button" type="button">
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result-item">Total: {totalCount}</p>
            <p className="result-item">Heads: {headsCount}</p>
            <p className="result-item">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
