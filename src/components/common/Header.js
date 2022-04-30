import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
    const active = { color: 'aqua' };
    const url = 'https://myjasclass.github.io/react_pf0429/';


    return (
        <header className={props.type}>
            <div className='inner'>
                <h1>
                    {/* <Link exact='true' to='/ */}
                    <NavLink exact to='/' activeStyle={active} onClick={() => window.history.pushState({ data: 'index' }, 'index', '/react0429')}>
                        LOGO
                    </NavLink>
                </h1>
                <ul id="gnb">
                    <li>
                        <NavLink to='/gallery' activeStyle={active} onClick={() => window.history.pushState({ data: 'gallery' }, 'gallery', '/react0429/gallery')}>
                            Gallery
                        </NavLink></li>
                    <li>
                        <NavLink to='/youtube' activeStyle={active} onClick={() => window.history.pushState({ data: 'youtube' }, 'youtube', '/react0429/youtube')}>
                            Youtube
                        </NavLink></li>
                </ul>

                <FontAwesomeIcon icon={faBars} />
            </div>
        </header>
    )
}

export default Header