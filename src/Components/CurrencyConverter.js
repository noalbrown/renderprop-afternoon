import React, { Component } from 'react'

class CurrencyConverter extends Component {
  state = {
    currencyChosen: false,
    selectedCurrency: 'Select Currency',
    amount: 0
  }

  handleAmountIncrease = () => {
    this.setState((prevState) => {
      return {
        amount: prevState.amount + 1
      }
    })
  }

  handleAmountDecrease = () => {
    return (
      this.state.amount > 0 &&
      this.setState((prevState) => {
        return {
          amount: prevState.amount - 1
        }
      })
    )
  }

  handleOptionSelect = (event) => {
    const userValue = event.target.value
    this.setState(() => {
      return {
        selectedCurrency: userValue,
        currencyChosen: userValue === 'Select Currency' ? false : true
      }
    })
  }

  render() {
    const currencyData = [
      { name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
      { name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
      { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
      { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
      { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
    ]

    const currencyOptions = currencyData.map((currency, index) => (
      <option key={currency.id} value={index}>
        {currency.name}
      </option>
    ))

    return (
      <div>
        <select value={this.state.selectedCurrency}>
          <option value='Select Currency'>Select Currency</option>
          {currencyOptions}
        </select>
        <div>
          <button className='add'>+</button>
          <button className='minus'>-</button>
        </div>
        {this.props.render(
          currencyData[this.state.selectedCurrency],
          this.state.amount
        )}
      </div>
    )
  }
}

export default CurrencyConverter