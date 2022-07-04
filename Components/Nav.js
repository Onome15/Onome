import React from 'react'
import { FiShoppingBag } from 'react-icons/fi';



const Nav = () => {
    return (
        <div className="bg-red">
            <nav className="container fixed inset-x-0 top-0 bg-white z-10 text-green-700 title">
                <h1 className="text-xl md:text-2xl lg:text-3xl md:m-5 font-bold font-mono">Phone-Mall
                    <span className="float-right text-l md:text-2xl rounded-lg bg-transparent hover:bg-purple-300 p-1 snipcart-checkout title">
                        <span className="float-left"><FiShoppingBag size={25} /></span>
                        View
                    </span>
                </h1>
                <hr className="style-eight" />
            </nav>


        </div>
    )
}

export default Nav
