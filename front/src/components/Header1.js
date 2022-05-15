import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from 'axios';

function Header1(props){
    

    let content = null;

    function onLogout(e){
        e.preventDefault();
        axios({
        method: "DELETE",
        url: 'http://localhost:8080/register',
        data:{
        }
    })}

    if(props.login === 1){
        content = <>
        <Link to='/user'><HeaderUsersetUsername>{props.username}</HeaderUsersetUsername></Link>
        <HeaderColumnBar></HeaderColumnBar>
        <HeaderUsersetAlarm><img src='/images/alarm.jpg' width={20} alt=''></img></HeaderUsersetAlarm>
        <HeaderColumnBar></HeaderColumnBar>
        <Button onClick={onLogout}>Log-out</Button>
        </>;
    }
    else{
        content = <>
            <Link to='/login'><Button variant='outlined'>LOGIN</Button></Link>
        </>
    }

    return <>
    <Header>
        <Link to='/'><HeaderHomepagetag><img src='/images/logo.jpg' width={170} alt=''></img></HeaderHomepagetag></Link>
        <HeaderSearch type='text'></HeaderSearch>
        <HeaderUserset>
        {content}
        </HeaderUserset>
    </Header>
    <HeaderRowBar></HeaderRowBar>
    </>
}

export default Header1;

const Header = styled.div`
    display: flex;
    background-color: white;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 75px;
`;

const HeaderHomepagetag = styled.div`
    font-size: 30px;
`;

const HeaderSearch = styled.input`

`;

const HeaderUserset = styled.div`
    margin-left: 100px;
    background-color: white;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 160px;
    font-size: 14px;
`;

const HeaderRowBar = styled.div`
    background-color: grey;
    width: 100%;
    height: 2px;
`;

const HeaderUsersetUsername = styled.div`

`;

const HeaderColumnBar = styled.div`
    background-color: grey;
    width: 2px;
    height: 15px;
`;

const HeaderUsersetAlarm = styled.div`

`;