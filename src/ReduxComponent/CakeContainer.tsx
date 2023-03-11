import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
  return (
    <div className='p-10 m-2 text-white rounded-lg bg-yellow-600'>
      <h2><b>Getting Number Of Cakes using redux without hooks</b></h2>
      <h2>Number Of Cakes - {props.numOfCakes}</h2>
      <button className='text-black' onClick={props.buyCake}>Buy Cake</button>
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
    buyCake: () => dispatch(buyCake()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)