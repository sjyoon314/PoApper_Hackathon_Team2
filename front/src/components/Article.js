import React, { useEffect, useState } from 'react';
import axios from 'axios'
import styled from 'styled-components';
import TableProblem from './TableProblem';

function Article(props){
    const [list, setList] = useState([ // 백엔드에게 받을 데이터 이전에 테스트용으로 넣어둔 리스트
    {index:1, title:'example', body:'the example is about ...'},
    {index:2, title:'example2', body:'the example2 is about ...'}
])
    
    return(
        <div>
            <TableProblem></TableProblem>



        </div>
)}

export default Article;

