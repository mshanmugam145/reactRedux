import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

function IceCreamContainer(props) {
  return (
    <div className='m-2 text-white p-10 rounded-lg bg-blue-700'>
        <h2><b>Getting Number Of Cakes using redux without hooks</b></h2>
        <h2>Number Of Ice Creams - {props.numOfIceCream}</h2>
        <button onClick={props.buyIceCream} className='text-black'>Buy Ice Creams</button>
    </div>
  )
} 

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numberOfIceCream
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)