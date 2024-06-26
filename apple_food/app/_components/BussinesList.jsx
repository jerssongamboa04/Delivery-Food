"use client";

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../_utils/GlobalApi';
import BussinesItem from '../_components/BussinesItem';
import BussinesItemSkelton from '../_components/BussinesItemSkelton';

function BussinesList() {

    const params = useSearchParams();
    const [category, setCategory] = useState('all');
    const [BussinesList, setBussinesList] = useState([]);
    const [loading, setLoading]=useState(false);

    useEffect(() => {
        params && setCategory(params.get('category'));
        params && getBussinesList(params.get('category'));

    }, [params])

    const getBussinesList = (category_) => {
        setLoading(true);
        GlobalApi.GetBussines(category_).then(resp => {
            setBussinesList(resp?.restaurants)
            console.log(BussinesList)
            setLoading(false);
        })

    }
    return (
        <div className='mt-5'>

            <h2 className='font-bold text-2xl'>Popular {category} Restaurants</h2>
            <h2 className='font-bold text-primary'> {BussinesList?.length} Results</h2>

            <div className='grid grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4 
            gap-7 mt-3'>

                {!loading? BussinesList.map((restaurants, index) => (
                   <BussinesItem key={index}
                   bussines={restaurants}/>

                )) : [1,2,3,4,5,6,7,8].map((item,index) =>(
                    <BussinesItemSkelton key={index} />

                ))}
            </div>

        </div>
    )
}

export default BussinesList