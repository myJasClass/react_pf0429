import React, { useEffect, useRef } from 'react'

function Layout(props) {
    console.log(props)
    const frame = useRef();
    useEffect(() => {
        console.log('Layout 컴포넌트 생성');
        frame.current.classList.add('on');

        return () => {
            console.log('Layout 컴포넌트 소멸');
        }
    }, [])
    return (
        <section className={`content ${props.name}`} ref={frame}>
            <figure></figure>
            <div className='inner'>
                <h1>{props.name}</h1>
                {props.children}
            </div>
        </section>
    )
}

export default Layout