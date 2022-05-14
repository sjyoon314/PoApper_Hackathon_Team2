import React, { useEffect, useState } from 'react';
import axios from 'axios'
import styled from 'styled-components';
import TableProblem from './TableProblem';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AddBtn from './AddBtn';

function Article(props){

    
    return(
        <Content>
            <TableProblem></TableProblem>
            <AddBtn></AddBtn>


        </Content>
)}

export default Article;

const Content = styled.div`
    display: flex;
    background-color: white;
    flex-flow: column nowrap;
    align-items: center;
    width: 100%;
    height: 500px;
`;