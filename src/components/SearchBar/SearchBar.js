import React from 'react'
import styled from 'styled-components'

function SearchBar(props){
  console.log(props);
  return(
    <div>
      <form>
        <input
          value={props.value}
          onChange={props.onChange}
        />
        <button onClick={props.onClick}>search</button>
          </form>
          </div>
          )
        }
          export default SearchBar
