// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

class CryptocurrencyTracker extends Component {
  state = {
    cryptocurrenciesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptocurrencies()
  }

  getCryptocurrencies = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()
    this.setState({
      cryptocurrenciesData: data.map(eachData => ({
        id: eachData.id,
        currencyLogoUrl: eachData.currency_logo,
        currencyName: eachData.currency_name,
        usdValue: eachData.usd_value,
        euroValue: eachData.euro_value,
      })),
      isLoading: false,
    })
  }

  renderCryptocurrienciesList = () => {
    const {cryptocurrenciesData} = this.state

    return <CryptocurrenciesList cryptocurrenciesData={cryptocurrenciesData} />
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        {isLoading ? this.renderLoader() : this.renderCryptocurrienciesList()}
      </div>
    )
  }
}
export default CryptocurrencyTracker
