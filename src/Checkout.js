import React from 'react';
import './Checkout.css';
import CheckOutProduct from './CheckOutProduct';
import { useStateValue } from './StateProvider';

import Subtotal from './Subtotal';


function Checkout() {

    const [{basket, user} , dispatch]  = useStateValue();

    console.log(user?.email? user.email :'po' )
    return (
        <div className="checkout"  >
            <div className="checkout__left " >
                <img 
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                    alt="" />
                    <div className="checkout__tittle" >
                        <h3> {user?.email? 'Hello, ' + user.email :''}</h3>
                        <h2>
                            Your shopping basket
                        </h2>
                        {basket.map( (item ) => 
                            <CheckOutProduct  
                                title={item.title} 
                                image={item.image} 
                                price={item.price} 
                                rating={item.rating} 
                                id={item.id}/>  
                        ) }

                    </div>
            </div>
            <div className="checkout__right" >
                {/** Subtotal */}
                <Subtotal />
            </div>
        </div>

    )
}

export default Checkout
