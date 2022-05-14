import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';



export default function Content(props) {
    const [list, setList] = useState(props.list)
    //setList(props.list);
    //const [list, setList] = useState(props.list)
    const [nextid, setNextid] = useState(list.length);
    const [id, setId] = useState();
    const [title, setTitle] =useState()
    const [body, setBody] =useState()
    const [host, setHost] = useState();

    return (
        <Contents>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell><b>Index</b></TableCell>
                <TableCell align='right'><b>Title</b></TableCell>
                <TableCell align='right'><b>Body</b></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {list.map((list) => (
                <TableRow
                key={list.index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {list.index}
                </TableCell>
                <TableCell align='right'>{list.title}</TableCell>
                <TableCell align='right'>{list.body}</TableCell>
                <TableCell align='right'><Button variant='contained' color='error' onClick={()=>{
                    //본래 동적 라우팅 구현하여 그 안에 update, delete를 넣는 방식이었으나..
                }}>Del</Button></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        <Btn>
            <Button variant='contained' color='success' onClick={()=>{
                // 새로운 창 or Modal로 input을 받는 부분... 이었어야 했음 host title body submit 4개의 input으로..
                axios.post('/user', {
                    host: {host},
                    title: {title},
                    body: {body}
                  })
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
            }}>ADD</Button>
        </Btn>
        </Contents>
    );
}

const Btn = styled.div`
    width: 100px;
    height: 50px;
    align-self: flex-end;
    margin: 10px;
`;

const Contents = styled.div`
    display: flex;
    background-color: white;
    flex-flow: column nowrap;
    align-items: center;
    width: 100%;
    height: 500px;
`;