'use client'
import React from 'react'
import { iUserInfoProps } from '../types/interface'


const UserInfo = ({data}:{data:iUserInfoProps[]}) => {
    return (
        <div>
            <ul>
                {data.map((item)=>(
                    <li key={item.id}>
                        <div>{item.email}</div>
                        <div>{item.name}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserInfo