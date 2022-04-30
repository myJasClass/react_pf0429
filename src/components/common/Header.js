import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
    const active = { color: 'aqua' };
    const url = '/react0429';
    history.pushstate('', '', url);
    const [page, setPage] = useState('');
    useEffect(() => {
        window.onpopstate = function (e) {
            setPage(e.state);
        }
    }, []);

    function changeUrl(state = '', title = '', url = '') {
        window.history.pushState(state, title, url);
        setPage(state);
        console.log(location.href)
    }
    return (
        <header className={props.type}>
            <div className='inner'>
                <h1>
                    {/* <Link exact='true' to='/ */}
                    <NavLink exact to='/' activeStyle={active} onClick={() => changeUrl('index', 'index', `${url}/`)}>
                        LOGO
                    </NavLink>
                </h1>
                <ul id="gnb">
                    <li>
                        <NavLink to='/gallery' activeStyle={active} onClick={() => changeUrl('gallery', 'gallery', `${url}/gallery`)}>
                            Gallery
                        </NavLink></li>
                    <li>
                        <NavLink to='/youtube' activeStyle={active} onClick={() => changeUrl('youtube', 'youtube', `${url}/youtube`)}>
                            Youtube
                        </NavLink></li>
                </ul>

                <FontAwesomeIcon icon={faBars} />
            </div>
        </header>
    )
}

export default Header