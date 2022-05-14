import React, { useEffect, useState } from 'react';
import axios from 'axios'
import styled from 'styled-components';
import Content from './Content';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Article(props){

    
    return(
        <Content list={props.list}></Content>
    )}

export default Article;

