import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Article from '../components/Article';
import axios from 'axios';

function Progressing() {
    const [login, setLogin] = useState(0)
    const webname="webname";
    const [username, setUsername] = useState("username")
    const [list, setList] = useState([
        {index:1, title:'problem example', body:'the problem example is about ...'},
        {index:2, title:'problem example2', body:'the problem example2 is about ...'}
    ])
    window.onload = function(){
        LoadingData();
      }
    
      function LoadingData(){

        axios.get('https://localhost:8080/')
        .then((Response)=>{
          console.log(Response);
          setList(Response);}) // ?
        .catch((Error)=>{console.log(Error)})
        };

    return (
        <div>
            <Header login={login} username={username} webname={webname}></Header>
            <Article list={list}></Article>



        </div>
    );
}

export default Progressing;