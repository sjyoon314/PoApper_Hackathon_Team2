import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import axios from 'axios';

function Home() {
  const [login, setLogin] = useState(0)
  const webname="webname";
  const [username, setUsername] = useState("username")
  //const [data, setData] = useState([])
  function LoadingData(e){
    e.preventDefault();
    axios.get('https://localgost:3000/')
    .then((Response)=>{
      console.log(Response);
      setUsername(Response);})
    .catch((Error)=>{console.log(Error)})
    if(username !== 'wrong'){
      if(username !== 'empty'){
        setLogin(1);
      }
    }
  }
  // data 속에서 username 찾아서 set하고, if문으로 login 변경.

  
  return (
    <div>
        {LoadingData}
        <Header login={login} username={username} webname={webname}></Header>
    </div>
  );
}

export default Home;