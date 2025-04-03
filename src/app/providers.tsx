'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import NavBar from '@/app/components/NavBar'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';


interface iProps {
    children?: React.ReactNode
}

const queryClient = new QueryClient()

export const NextProvider = ({ children }: iProps ) => {
    return (
        <AppRouterCacheProvider options={{ key: 'css' }}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </AppRouterCacheProvider>
    )
}

export const NextLayout = ({ children }: iProps) => {
    return (
        <>
            {children}
        </>
    )
}