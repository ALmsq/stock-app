import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import _ from 'lodash'
import SearchBar from './components/SearchBar/SearchBar'
import StockList from './components/StockList/StockList'


class App extends React.Component {
  state = {
    stocks: [],
    term: null,
    value: ''
  }

  // const keyy = 'QZ4L2TSNZBWXXVTO'
  // const url = `https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=${term}&apikey=${key}`

handleChange = (e) =>{
  this.setState({
    value: e.target.value
  })
}

handleClick = (e) =>{
  if(e) e.preventDefault()
  this.setState({
    value: '',
    term: this.state.value
  })
  let term = this.state.value

  axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${term}&apikey=QZ4L2TSNZBWXXVTO`)
  .then(res => {
    console.log(res.data);
    let data = res.Data
    // console.log(res.data.bestMatches.map((stock)=>[{symbol: stock['1. symbol'], name: stock['2. name'] }]));
    // let stocks = res.data.bestMatches.map((stock)=>[{symbol: stock['1. symbol'], name: stock['2. name'] }])
    let stocks = _.flattenDeep(Array.from(res.data.bestMatches.map((stock)=>[{symbol: stock['1. symbol'], name: stock['2. name'] }])))
    // console.log(_.flattenDeep(Array.from(res.data.bestMatches.map((stock)=>[{symbol: stock['1. symbol'], name: stock['2. name'] }]))));
    // let stocks = matches.map((stock)=>[{symbol: stock['1. symbol'], name: stock['2. name'] }])
    // let stocks = res.data.bestMatches.map((stock)=>[{symbol: stock['1. symbol'], name: stock['2. name'] }])
    console.log(stocks);

    this.setState((state, props) => {
      // debugger
        return {...state, stocks}
    })
  })
  .catch(error => console.log(error))
}

// componentDidMount(){
//   axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=BA&apikey=QZ4L2TSNZBWXXVTO`)
//   // axios.get(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey=QZ4L2TSNZBWXXVTO`)
//   .then(res => {
//     const data = res.data
//     console.log();
//     // console.log(data.map((stock)=>[{symbol: stock['1. symbol'], name: stock['2. name'] }]));
//     // console.log(_.flattenDeep(Array.from(data)))
//     let matches = data.bestMatches
//     console.log(matches)
//     // console.log(_.flattenDeep(Array.from(matches.map((stock)=>[{symbol: stock['1. symbol']}]))))
//     // console.log(_.flattenDeep(Array.from(matches.map((stock)=>stock['1. symbol']))))
//     // console.log(matches.map((stock)=>[{symbol: stock['1. symbol'], name: stock['2. name'] }]));
//     let match = matches.map((stock)=>[{symbol: stock['1. symbol'], name: stock['2. name'] }])
//     // console.log(data.bestMatches.includes('ba')])
//     // let stocks = _.flattenDeep(Array.from(data['Meta Data'].map(stock) =>))
//     // console.log(stocks)
//     this.setState((state,props)=>({
//       stocks: []
//     }))
//
//   })
// }

  render(){
    // console.log('yo')
    // console.log(this.state.stock)
    // console.log(this.handleChange);
    let stocks = this.state.stocks
    const value = this.state.value
    // console.log(stocks);
      return(
        <div>
          <h1>Stocks</h1>
          <SearchBar
            value={value}
            onChange={this.handleChange}
            onClick={this.handleClick}
          />
          <StockList
            stockItems = {stocks}
          />
        </div>
      )
    }
  }
  export default App;
