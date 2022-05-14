import React from 'react';
import Header1 from '../components/Header1';
import Header2 from '../components/Header2';

function Header(props){
    return(
        <div>
            <Header1 login={props.login} username={props.username} webname={props.webname}></Header1>
            <Header2></Header2>
        </div>
    )
}

export default Header;