"use client"
import React, { useState } from 'react'
import Header from './_components/Header'
import { Toaster } from "../app/components/ui/sonner";
import { CartUpdateContext } from './_context/CartUpdateContext';

        

function Provider({ children }) {
    const [updateCart,setUpdateCart]=useState(false);

    return (
        <CartUpdateContext.Provider value={{updateCart,setUpdateCart}}>
        <div className='px-10 md:px-20 relative '>
            <Header/>
            <Toaster/>
            {children}
        </div>
        </CartUpdateContext.Provider>
    )
}

export default Provider