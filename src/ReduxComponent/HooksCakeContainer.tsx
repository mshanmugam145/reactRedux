import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions';

function HooksCakeContainer() {
    const numOfCakes = useSelector((state) => state.cake.numOfCakes )
    const dispatch = useDispatch();
    return (
      <div className='m-2 text-white p-10 rounded-lg bg-green-600'>
      <h2><b>Getting Number Of Cakes using redux with hooks</b></h2>
        <h2>Number oF Cakes - { numOfCakes }</h2>
        <button className='text-black' onClick={() => dispatch(buyCake())}>Buy Cake Via Hooks</button>
    </div>
  )
}

export default HooksCakeContainer