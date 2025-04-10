import React, { Suspense } from 'react'
import LoadImages from '../components/LoadImages'
import TopMenus from '../components/TopMenus'


const Home = () => {
    return (
        <div>
            <Suspense>
                <TopMenus/>
                <LoadImages/>
            </Suspense>
        </div>
  )
}

export default Home