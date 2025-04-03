import React from 'react'
import UserInfo from '@/app/components/UserInfo'
import { iUserInfoProps } from '@/app/types/interface'

const UserPage = ({users}:{users:iUserInfoProps[]}) => {
  return (
    <div>
        UserPage
        <UserInfo data={users}/>
    </div>
  )
}

export default UserPage

export async function getStaticProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`)
    const users = await res.json()
   
    return {
      props: {
        users,
      },
    }
  }