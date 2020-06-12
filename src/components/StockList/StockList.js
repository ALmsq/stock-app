import React from 'react'
import StockListItem from '../StockListItem/StockListItem'

const StockList = (props) => {

  const stockItem = props.stockItems.map((stock) => {
    console.log(stock);

    return(
      <StockListItem

        key = {stock['symbol'].toString()}
        symbol = {stock['symbol'].toString()}
        name = {stock['name'].toString()}
      />
    )
  })
console.log(props.stockItems);
  // return(
  //   <React.fragment>
  //
  //     {stockItem}
  //
  //   </React.fragment>
  // )

  return(
    <ul>
      {stock}
    </ul>
  )

}

export default StockList
