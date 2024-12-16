import React from 'react'
import "../SecondNav/secondnav.css"
import Link from 'next/link'

function SecondNav() {
    return (
        <div className="Secondnav">
            <div className="SecondItems">
                <li className='active'><Link href="/">Home</Link></li>
                <li>Shop</li>
                <li><Link href="/AllProduct/">Product</Link></li>
                <li>Pages</li>
                <li>About</li>
            </div>
            <div className="SecondContact">
            Contact: <b>(808) 555-0111</b>
            </div>

        </div>
    )
}
export default SecondNav
