import React, { useState } from 'react';
import Header from '../components/Header';
import Article from '../components/Article';
import axios from 'axios';

function Finished() {
    const [login, setLogin] = useState(0)
    const webname="webname";
    const [username, setUsername] = useState("username")
    const [list, setList] = useState([
        {index:1, title:'finished example', body:'the finished example is about ...'},
        {index:2, title:'finished example2', body:'the finished example2 is about ...'},
        {index:3, title:'finished example3', body:'the finished example3 is about ...'}
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

export default Finished;