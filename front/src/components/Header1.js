import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';

function Header1(props){
    let content = null;
    if(props.login === 1){
        content = <>
        <Header_userset_username>{props.username}</Header_userset_username>
        <Header_columnBar></Header_columnBar>
        <Header_userset_alarm><img src='/images/alarm.jpg' width={20}></img></Header_userset_alarm>
        <Header_columnBar></Header_columnBar>
        <Header_logout>Log-out</Header_logout>
        </>;
    }
    else{
        content = <>
            <Link to='/login'><Button variant='outlined'>LOGIN</Button></Link>
        </>
    }

    return <>
    <Header>
        <Link to='/'><Header_homepagetag>{props.webname}</Header_homepagetag></Link>
        <Header_search type='text'></Header_search>
        <Header_userset>
        {content}
        </Header_userset>
    </Header>
    <Header_rowBar></Header_rowBar>
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

const Header_homepagetag = styled.div`
    font-size: 30px;
`;

const Header_search = styled.input`
  
`;

const Header_userset = styled.div`
    margin-left: 100px;
    background-color: white;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 160px;
    font-size: 14px;
`;

const Header_rowBar = styled.div`
    background-color: grey;
    width: 100%;
    height: 2px;
`;

const Header_userset_username = styled.div`
  
`;

const Header_columnBar = styled.div`
    background-color: grey;
    width: 2px;
    height: 15px;
`;

const Header_userset_alarm = styled.div`
  
`;

const Header_logout = styled.div`
  
`;