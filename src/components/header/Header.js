import React from 'react';

import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <h2 className='logo-text'>Confused Chooser</h2>
            <div>
                <a href="/shop">Order</a>
                <a href="/orders">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </div>
        </nav>
    );
};

export default Header;