import React from 'react'
import { connect } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';
import { buyIceCream } from '../redux/iceCream/iceCreamActions';

function ItemContainer(props) {
  return (
    <div className='m-2 text-white p-10 rounded-lg bg-slate-500'>
        <h2><b>Item Container with Own Props</b></h2>
        <h2>
            Item {props.itemName}- {props.item}
        </h2>
        <button className = 'text-black' onClick={props.buyItem}>Buy Items from Itemcontainer</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numberOfIceCream;
    const itemName = ownProps.cake  || 'Ice Cream';
    return {
        item: itemState,
        itemName,

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream());
    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);