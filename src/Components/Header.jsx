import React from 'react'
import { SiCodechef } from "react-icons/si";

const Header = () => {
    return (
        <header className='flex md:max-w-[900px] max-w-xl  justify-center  mx-auto my-5 p-4 border border-gray-400 shadow-md rounded-md '>
            <div className=' flex flex-row items-center justify-center text-4xl '> 
                <SiCodechef className='text-gray-300 text-6xl'/>
                <h1 className='font-extrabold text-gray-300'>CHEF-X </h1>
            </div>
        </header>
    )
}

export default Header;