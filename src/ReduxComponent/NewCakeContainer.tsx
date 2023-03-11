import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div className='m-2 text-white p-10 rounded-lg bg-yellow-600'>
      <h2><b>Getting Number Of Cakes using redux without hooks and with input field</b></h2>
      <h2>Number Of Cakes - {props.numOfCakes}</h2>
      <input value={number} onChange={(e) => {
        return setNumber(e.target.value);
      } }/>
      <button className='mx-4 text-black' onClick={() => props.buyCake(number)}>Buy { number }</button>
    </div>
  )
} 

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)