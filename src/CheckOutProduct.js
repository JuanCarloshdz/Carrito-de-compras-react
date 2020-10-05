import React from 'react';
import './CheckOutProduct.css';


import {useStateValue} from './StateProvider'
function CheckOutProduct({ title, image, price, rating, id }) {

    const [{basket} , dispatch]  = useStateValue()
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id : id
        })
    }

    return (
        <div className="chackoutproduct" >
            <img
                className="chackoutproduct__image"
                src={image}
                alt="" />

            <div className="chackoutproduct__info" >
                <p className="chackoutproduct__tittle" >{title}</p>
                <p className="chackoutproduct__price"> <small>$</small> <strong>{price}</strong> </p>
                <div className="chackoutproduct__rating" >
                    {Array(rating).fill().map((_, i) => <p>🌟</p>)}
                </div>

                <button onClick={removeFromBasket} > Remove From Basket </button>
            </div>


        </div>
    )
}

export default CheckOutProduct
