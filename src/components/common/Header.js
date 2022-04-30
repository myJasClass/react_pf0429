import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
    const active = { color: 'aqua' };
    const url = window.location.href;
    console.log(window.location.href);

    return (
        <header className={props.type}>
            <div className='inner'>
                <h1>
                    {/* <Link exact='true' to='/ */}
                    <NavLink exact to={`${url}/`} activeStyle={active}  >
                        LOGO
                    </NavLink>
                </h1>
                <ul id="gnb">
                    <li>
                        <NavLink to={`${url}/gallery`} activeStyle={active}   >
                            Gallery
                        </NavLink></li>
                    <li>
                        <NavLink to={`${url}/youtube`} activeStyle={active}  >
                            Youtube
                        </NavLink></li>
                </ul>

                <FontAwesomeIcon icon={faBars} />
            </div >
        </header >
    )
}

export default Header