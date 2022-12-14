import React from 'react';


function Navbar() {
    return (
        <>
        <div className='navbase'> 
                <Logo />
            <nav className='navcontainer'>
                <ul>
                    <ExternalNav page="Home" externalUrl="index.html"/>
                    <ExternalNav page="Resume" externalUrl="resume.html"/>
                    <ExternalNav page="Healthstat" externalUrl="healthstat/index.html"/>
                    <ExternalNav page="Capio Marketing" externalUrl="capio/index.html"/>
                </ul>
            </nav>
        </div>
        </>
    );
}
 
export default Navbar;

function Logo() {
    return (
        <h1 className='logo'>ZJB Portfolio</h1>
    );
}

function ExternalNav(props) {
    return ( 
            <li>
            <li><a href={props.externalUrl}>{props.page}</a></li>
            </li>
    );
}

function InternalNav(props) {
    return ( 
        <li onClick={(e) => {
            e.preventDefault();
            //retrieves window location and then replaces the value
            window.location.replace(props.gotopage);}}>
                <a>{props.page}</a>
        </li>
    );
}

