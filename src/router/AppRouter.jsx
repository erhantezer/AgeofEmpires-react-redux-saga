import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Details from '../components/Details'
import Home from '../components/Home'
import Units from '../components/Units'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='units' element={<Units />} />
                <Route path='details/:unitId' element={<Details />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter