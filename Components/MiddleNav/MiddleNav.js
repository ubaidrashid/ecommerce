import React from 'react'
import Logo from "../../images/mainLogo.png"
import "../MiddleNav/middlenav.css"

function MiddleNav() {
    return (
        <div className='middleNav'>
            <div className="logo">
                <div className="logoIcon"></div>
                <h1 className="logoText">Comfortify</h1>
            </div>
            <div className="cart">
                <div className="cartIcon"></div>
                <div className="cartText">cart</div>
            </div>
        </div>
    )
}

export default MiddleNav
