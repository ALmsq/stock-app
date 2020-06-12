import React from 'react'

const StockListItem = (stock, props) =>{
  return(
    <ul>
      <li>
        <div>
          <span>Stock: </span>{stock.symbol}
        </div>
        <div>
          <span>name: </span>{stock.name}
        </div>
      </li>
    </ul>
  )
}
export default StockListItem
