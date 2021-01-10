import React from 'react'
import Search from './Search'
import Profile from './Profile'
import Cart from './Cart'

const HeaderOptions = () => {
    return(
        <div className="options-container">
            <Search></Search>
            <Profile></Profile>
            <Cart></Cart>
        </div>
    )
}

export default HeaderOptions