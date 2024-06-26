"use client"
import { Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from 'primereact/button';
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs';


function Header() {

  const { user, isSignedIn } = useUser();
  return (
    <div className='flex justify-between items-center p-6 md:px-20 shadow-sm '>

      <Image src='/logo4.jpg' alt='logo'
        width={100}
        height={100} />

      <div className='hidden md:flex border p-2 rounded-lg bg-gray-200 w-96'>
        <input type='text' className='bg-transparent w-full outline-none' />
        <Search />
      </div>

      {isSignedIn ?
        <UserButton />
        : <div className='flex gap-5'>
          <SignInButton mode='modal'>
            <Button label="Login" />
          </SignInButton>

          <SignUpButton mode='modal'>
            <Button label="Sign Up" />
          </SignUpButton>

        </div>}

    </div>
  )
}

export default Header