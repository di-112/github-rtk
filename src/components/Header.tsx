import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className='flex h-50px'>
            <Link to={'/'}>Home</Link>
            <Link to={'/favorites'}>Favorites</Link>
        </div>
    );
};

export default Header;