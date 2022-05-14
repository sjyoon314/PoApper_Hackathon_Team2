import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import axios from 'axios';

function Home() {
  const [login, setLogin] = useState(0)
  const webname="webname";
  const [username, setUsername] = useState("empty")
  //const [data, setData] = useState([])
  
  
  window.onload = function(){
    LoadingData();
  }

  function LoadingData(){
    //setLogin(1);
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
        {/*페이지 열리면 이 함수를 실행해야 하는데... */}
        <Header login={login} username={username} webname={webname}></Header>
    </div>
  );
}

export default Home;