import React from 'react'
import img from "../images/checkk.png"
// 
function Nav() {
    return (
        <div className={`Nav`}>
            <div className='topNavText'>
                <div className="icon">
                    {/* <img className='topIcon' src={img} alt="" /> */}

            </div>Free shipping on all orders over $50</div>
            <div className='topNavItems'>
                <div className="item">Eng</div>
                <div className="item">Faqs</div>
                <div className="item">Need Help</div>
            </div>
        </div>
    )
}

export default Nav
