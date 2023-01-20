import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Components/'

const Main: React.FC = () => {
    return (
        <div className="wrapper">
            <Header />
            <Outlet />
        </div>
    )
}

export default Main