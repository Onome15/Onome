import React from 'react'
import { FiShoppingBag } from 'react-icons/fi';

const Nav = () => {
    return (
        <div>
            <nav className="container fixed inset-x-0 top-0 bg-white mb-32 z-10 p-2">
                <h1 className="text-xl md:text-3xl m-2 md:m-5 font-bold font-mono text-green-700">PHONE-MALL
                    <span className="float-right text-l md:text-2xl rounded-lg bg-transparent hover:bg-purple-300 text-purple-700 p-1 snipcart-checkout title">  <span className="float-left"><FiShoppingBag size={25} /></span> View</span>
                </h1>
                <hr className="style-eight" />
            </nav>
        

        </div>
    )
}

export default Nav