'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { countFavorite, isFavorite } from '@/state/favorite/favoriteSlice'
import { AppDispatch, RootState } from '@/state/store'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const Favorite = () => {
    const favorite = useSelector((state: RootState) => state.favorite.on) // access the state
    const count = useSelector((state: RootState) => state.favorite.value)
    const dispatch =  useDispatch<AppDispatch>() // connect to dispatch

    return (
        <div>
            <p>Favorite</p>
                <button
                    type='button'
                    onClick={() => dispatch(isFavorite())}>
                        {favorite===false ? <AiOutlineHeart/> : <AiFillHeart/>}
                </button>
            <p>favorite: <span>{count}</span></p>
            <button
                type='button'
                onClick={() => dispatch(countFavorite(count))}>
                    refresh
            </button>
            </div>
    )
}

export default Favorite