import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal from './Modal';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, 'title1', 'body1'),
  createData(2, 'title2', 'body2'),
  createData(3, 'title3', 'body3'),

];

export default function TableProblem() {
    const [list, setList] = useState([ // 백엔드에게 받을 데이터 이전에 테스트용으로 넣어둔 리스트
    {index:1, title:'example', body:'the example is about ...'},
    {index:2, title:'example2', body:'the example2 is about ...'}
    ])
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell><b>Index</b></TableCell>
                <TableCell><b>Title</b></TableCell>
                <TableCell><b>Body</b></TableCell>
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
                <TableCell>{list.title}</TableCell>
                <TableCell>{list.body}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}



