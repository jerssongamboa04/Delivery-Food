import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BussinesItem({ bussines }) {

    const calculateRating = () => {
        let total = 0;
        let count = 0;
        bussines?.reviews.forEach(item => {
            total = total + item.star;
            count++;

        })
        const result=total/count;
        return result?result.toFixed(1):5;
    }

    return (
        <Link
            href={'/restaurant/' + bussines?.slug}
            className='p-3 hover:border rounded-xl hover:border-primary cursor-pointer
        transition-all ease-in-out hover:bg-orange-50'>
            <Image src={bussines.banner?.url} alt={bussines.name}
                width={500}
                height={130}
                className='h-[130px] rounded-xl object-cover'
            />
            <div className='mt-2'>
                <h2 className='font-bold text-lg'>{bussines.name}</h2>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <Image src="/estrella.png" alt='start'
                            width={14}
                            height={14} />
                        <label className='text-gray-400'>{calculateRating()}</label>
                        <h2 className='text-gray-400 text-sm'>{bussines?.restroType[0]}</h2>
                    </div>
                    <h2 className='text-sm text-primary'>{bussines.categories[0].name}</h2>
                </div>
            </div>
        </Link>
    )
}

export default BussinesItem