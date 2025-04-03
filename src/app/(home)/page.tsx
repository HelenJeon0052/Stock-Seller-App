import React, { Suspense } from 'react'
import LoadImages from '../components/LoadImages'


const Home = () => {
    return (
        <div>
            <Suspense>
                <LoadImages/>
            </Suspense>
        </div>
  )
}

export default Home