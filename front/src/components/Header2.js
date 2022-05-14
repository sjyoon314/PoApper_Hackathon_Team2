import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

function Header2(){
    return(
        <div>
            <Header2Bar>
                <Link to="/problem">문제 제시</Link>
                <Link to="/progressing">진행 중인 프로젝트</Link>
                <Link to="/finished">완료된 프로젝트</Link>
            </Header2Bar>
        </div>
    )
}

export default Header2;

const Header2Bar = styled.div`
    background-color: lightgrey;
    width: 100%;
    height: 80px;
    display:flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
`;