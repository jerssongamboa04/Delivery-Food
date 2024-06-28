"use client"
import { Search, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { Button } from "../components/ui/button";
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs';
import { CartUpdateContext } from '../_context/CartUpdateContext';
import GlobalApi from '../_utils/GlobalApi';


function Header() {

  const { user, isSignedIn } = useUser();
  const { updateCart, setUpdateCart } = useContext(CartUpdateContext);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log("Execute Me!");
    user && GetUserCart()
  }, [updateCart && user]);

  const GetUserCart = () => {

    GlobalApi.GetUserCart(user?.primaryEmailAddress.emailAddress).then(resp => {
      console.log(resp);
      setCart(resp?.userCarts);
    })

  }

  return (
    <div className='flex justify-between items-center p-6 md:px-20 shadow-sm '>

      <Image src='/logo4.jpg' alt='logo'
        width={100}
        height={100} />

      <div className='hidden md:flex border p-2 rounded-lg bg-gray-200 w-96'>
        <input type='text' className='bg-transparent w-full outline-none' placeholder='Search' />
        <Search className='text-primary cursor-pointer' />
      </div>

      {isSignedIn ?
        <div className='flex gap-3 items-center'>
          <div className='flex gap-2 items-center'>
            <ShoppingCart />
            <label className='p-1 px-3 rounded-full bg-slate-200'>{cart?.length}</label>
          </div>
          <UserButton />
        </div>

        : <div className='flex gap-5'>
          <SignInButton mode='modal'>
            <Button variant="outline">Login</Button>
          </SignInButton>

          <SignUpButton mode='modal'>
            <Button variant="outline">Sign Up</Button>
          </SignUpButton>

        </div>}

    </div>
  )
}

export default Header