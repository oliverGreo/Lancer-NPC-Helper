import React, { useState } from 'react'
import './header.css'

const Header = (props) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const openMenu = () => { setMenuIsOpen(!menuIsOpen) }

    return (
        <div className='header'>
            <div className='title' onClick={() => window.location.reload()}>Lancer RPG NPC Tool</div>
            <div className={menuIsOpen ? 'burgerMenuButton rotatedMenuButton' : 'burgerMenuButton'} onClick={() => openMenu()}>
                <div className='burgerline' />
                <div className='burgerline' />
                <div className='burgerline' />
            </div>
            <div className={menuIsOpen ? 'burgerMenu open' : 'burgerMenu'}>
                {/* display all tiers?  */}
                {props.data.map(entry => <div className='burgerMenuEntry' onClick={() => alert('This does nothing lmao')}>{entry.name}</div>)}
            </div>
        </div >

    );
};

export default Header;

