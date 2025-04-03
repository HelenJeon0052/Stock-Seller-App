'use client'
import React, { useState } from 'react'
import Link from 'next/link'

import Image from 'next/image'
import { AiOutlineMenuFold, AiOutlineMenu } from 'react-icons/ai'

import avartar_not_login from '../../images/avartar_not_login.png'

const NavBar = () => {
    const [isOn, setIsOn] = useState(false)
    const toggle = () => setIsOn(!isOn)

    return (
        <div>
            <button
                type="button"
                className={`toggle_button ${isOn ? 'on' : 'off'}`}
                onClick={()=>toggle()}>
                    {isOn? (<div>
                        <div className='p-1'><AiOutlineMenu className='text-[1rem]'/></div>
                        <div>
                            <div>
                                <Link href='/login'>login</Link>
                                <div>
                                    <Image
                                        src={avartar_not_login}
                                        alt='avartar'
                                        width={60}
                                        height={60}
                                    />
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <Link href='/main'>Home</Link>
                                </li>
                                <li>
                                    <Link href='/services'>Services</Link>
                                </li>
                                <li>
                                    <Link href='/mypage'>My Page</Link>
                                </li>
                                <li>
                                    <Link href='/about'>About</Link>
                                </li>
                                <li>
                                    <Link href='/faq'>FaQ</Link>
                                </li>
                            </ul>
                        </div>
                    </div>):(<div className='p-1'><AiOutlineMenuFold className='text-[1rem]'/></div>)}
            </button>
        </div>
    )
}

export default NavBar