import React from 'react'
import { redirect } from 'next/navigation'; 
//import { headers } from 'next/headers'


interface iStockProps {
    title: string;
    tags?: string;
    images: string[]
}

const LoadImages = async () => {

    const data: iStockProps[]= await getData()

    if(!data) {
        redirect('/')
    }

    return (
        <div>
            LoadImages
            {data ? (<div>
                {data.map((stock)=>(
                    <div key={stock.title}>
                        <p>{stock.title}</p>
                        <img src={stock.images[0]} alt={stock.title}/>
                        <p>{stock.tags}</p>
                    </div>
                ))}
            </div>) : (<div>loader no contents</div>) }
        </div>
    )
}

export default LoadImages


async function getData() {
    try {

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stocks`, {
            method: "GET",
        })

        if(!response.ok) {
            throw new Error('Stocks - failed fetching')
        }

        return response.json()

    }
    catch (e) {
        console.error(e)
    }
}