import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
    const active = { color: 'aqua' };
    // BrowserRouter일 때 
    // const url = '/react_pf0429';
    //<NavLink to={`${url}/gallery`} activeStyle={active}   >
    // console.log(window.location.href);


    return (
        <header className={props.type}>
            <div className='inner'>
                <h1>
                    {/* <Link exact='true' to='/ */}
                    <NavLink exact to='/' activeStyle={active}  >
                        LOGO
                    </NavLink>
                </h1>
                <ul id="gnb">
                    <li>
                        <NavLink to='/member' activeStyle={active}   >
                            Member
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/gallery' activeStyle={active}   >
                            Gallery
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/youtube' activeStyle={active}  >
                            Youtube
                        </NavLink>
                    </li>
                </ul>

                <FontAwesomeIcon icon={faBars} />
            </div >
        </header >
    )
}

export default Header