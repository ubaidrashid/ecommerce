import React from 'react'
import "../About/about.css"

function About() {
    return (
        <div className='About'>
            <div className="aboutMain">
                <div className="Abouttext">
                    <div className="cover">

                        <h1>About Us - Comforty</h1>
                        <p>At Comforty we believe that the right chair can transform your space and elevate your comfort. specializing in ergonomic design, premium materials and modern aesthetics, we craft chairs that seamlessly blend style with functionality</p>
                    </div>
                    <div className="viewCollection">
                        <button>View Collection</button>
                    </div>
                </div>
                <div className="AboutImg"></div>
            </div>
            <div className="AfterAboutMain">
                <h1>What makes our Brand Different</h1>
                <div className="afterMainGrid">

                </div>
            </div>
            <div className="ourProducts">
                <h1>Our Popular Products</h1>
                <div className="ourproductsGrid">
<div className="productCart1"></div>
<div className="productCart2"></div>
<div className="productCart3"></div>
                </div>
            </div>

        </div>
    )
}

export default About
