import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons'

import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

//  https://9to5mac.com/wp-content/uploads/sites/6/2019/01/Amazon-Logo.jpg
function Header() {

    const [{ basket , user}, dispatch] = useStateValue();

    const handleAutentification = () => {
        if( user ){
            auth.signOut();
        }else{

        }
    }
    console.log(basket)


    return (
        <div className="header">

            <Link to={!user && "/login"} >
                <img
                    className="header__logo"
                    src="https://raw.githubusercontent.com/JuanCarloshdz/imagenes/main/icono.png"
                    alt="" />
            </Link>


            <div className="header__search">
                <input
                    className="header__searchInput"
                    type="text" />
                <SearchIcon
                    className="header__searchIcon" />

            </div>

            <div className="header__nav">

                <Link to="/login">
                    <div className="header__option" onClick={handleAutentification}>
                        <span className="header_optionLineOne">
                            Hello Guest
                    </span>

                        <span className="header__optionLineTwo">
                           {user? 'Sign Out': 'Sign In'}
                    </span>
                    </div>
                </Link>




                <div className="header__option" >
                    <span className="header_optionLineOne">
                        Returns
                    </span>

                    <span className="header__optionLineTwo">
                        &Orders
                    </span>
                </div>
                <div className="header__option" >
                    <span className="header_optionLineOne">
                        Your
                    </span>

                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket" >
                        <ShoppingBasket />
                        <span
                            className="header__optionLineTwo header__basketCount" >
                            {basket?.length}
                        </span>
                    </div>
                </Link>


            </div>

        </div>
    )
}

export default Header
