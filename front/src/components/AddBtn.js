import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Modal from './Modal'

function AddBtn() {
    return (
        <Btn>
            <Button variant='contained' color='success' onClick={()=>{
                <Modal keepMounted/>
            }}>ADD</Button>
        </Btn>        
    );
}

export default AddBtn;

const Btn = styled.div`
    width: 100px;
    height: 50px;
    align-self: flex-end;
    margin: 10px;
`;