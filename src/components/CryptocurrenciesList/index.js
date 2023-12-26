// Write your JS code here
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrencyList extends Component {
  renderCryptocurrenciesHeader = () => (
    <div className="list-header">
      <p className="list-coin-type-heading">Coin Type</p>
      <div className="usd-euro-values-container">
        <p className="list-coin-value-heading">USD</p>
        <p className="list-coin-value-heading">EURO</p>
      </div>
    </div>
  )

  renderCryptocurrenciesView = () => {
    const {cryptocurrenciesData} = this.props

    return (
      <div className="cryptocurrcencies-list-container">
        {this.renderCryptocurrenciesHeader()}
        <ul className="cryptocurrcencies-list">
          {cryptocurrenciesData.map(eachData => (
            <CryptocurrencyItem
              key={eachData.id}
              cryptocurrencyDetails={eachData}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="cryptocurrencies-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="img"
        />
        {this.renderCryptocurrenciesView()}
      </div>
    )
  }
}
export default CryptocurrencyList
