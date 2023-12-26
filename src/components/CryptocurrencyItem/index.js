// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrencyDetails} = props
  const {currencyLogoUrl, currencyName, usdValue, euroValue} =
    cryptocurrencyDetails
  return (
    <li className="cryptocurrency-item">
      <div className="logo-and-title-container">
        <img src={currencyLogoUrl} className="currency-logo" alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-euro-value-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
