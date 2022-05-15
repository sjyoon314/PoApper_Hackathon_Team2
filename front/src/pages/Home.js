import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import axios from 'axios';
//import Example from '../components/Example';

function Home() {
  const [login, setLogin] = useState(0)
  const webname="webname";
  const [username, setUsername] = useState("empty")
  
  window.onload = function(){ 
    LoadingData();
  }

  function LoadingData(){
    setLogin(1);
    console.log(1);
    axios.get('https://localhost:8080/')
    .then((Response)=>{
      console.log(Response);
      setUsername(Response);})
    .catch((Error)=>{console.log(Error)})
    if(username !== 'wrong'){
      if(username !== 'empty'){
        setLogin(1);
      }
    }};
    

  
  return (
    <div> 
        <Header login={login} username={username} webname={webname}></Header>
        {/*<Example></Example>*/}
        <img src='/images/structure.jpg' width={1200} height={800} style={{margin:200}}></img>
    </div>
  );
}

export default Home;