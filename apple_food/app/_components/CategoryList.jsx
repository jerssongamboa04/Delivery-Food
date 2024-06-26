"use client";
import { useEffect, useRef, useState } from "react";
import GlobalApi from '../_utils/GlobalApi';
import Image from 'next/image'
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";



function CategoryList() {

    const listRef = useRef(null);
    const [categoryList, setCategoryList] = useState([]);
    const params = useSearchParams();
    const [selectedCategory, setSelectedCategory] = useState('all')

    useEffect(() => {
        setSelectedCategory(params.get('category'));
    }, [params])


    useEffect(() => {
        getCategoryList()
    }, [])

    /*
    Used to get Categroy List
    */

    const getCategoryList = () => {
        GlobalApi.GetCategory().then(resp => {
            console.log(resp.categories);
            setCategoryList(resp.categories);
        })

    }

    const ScrollRightHandler = () => {
        if (listRef.current) {

            listRef.current.scrollBy({
                left: 200,
                behavior: 'smooth'

            })
        }

    }
    return (
        <div className="mt-10 relative">
            <div className="flex gap-4 overflow-auto scrollbar-hide" ref={listRef}>
                {categoryList && categoryList.map((category, index) => (
                    <Link href={'?category=' + category.slug} key={index} className= {`flex flex-col items-center
                     gap-2 border p-3 rounded-xl min-w-28 hover:border-orange-300
                      hover:bg-orange-50 cursor-pointer group 
                       ${selectedCategory==category.slug&&'text-orange-300 border-primary bg-orange-50'}`}>
                        <Image src={category.icon.url} alt={category.name}
                            width={40}
                            height={40}
                            className="group-hover:scale-125 transition-all duration-200"
                        />
                        <h2 className="text-sm font-medium group-hover:text-orange-400">{category.name}</h2>

                    </Link>

                ))}
            </div>
            <ArrowRightCircle className="absolute -right-10 top-9 bg-gray-500 rounded-full
             text-white h-8 w-8 cursor-pointer"  onClick={() => ScrollRightHandler()} />
        </div>
    )
}

export default CategoryList;