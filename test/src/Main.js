import React, {useState} from 'react';
import './Main.css';
import {Link, Route, Routes} from 'react-router-dom';
import Button from '@mui/material/Button';
import Login from './Login';

function App() {
  const [webname, setWebame] = useState("WEBname") 
  const [username, setUserame] = useState("USERname") 
  const [onlogin, setOnlogin] = useState(0)


  let content = null;
  if(onlogin === 1){
    content = <>
      <div className='header_userset_username'>{username}</div>
      <div className='header_columnBar'></div>
      <div className='header_userset_alarm'><img src='/images/alarm.jpg' width={20}></img></div>
      <div className='header_columnBar'></div>
      <div className='header_logout'>Log-out</div>
    </>;
  }
  else{
    content = <>
    <Routes>
    <Route path = "/login" element ={<Login/>}></Route>
    </Routes>
    <Link to = '/login'>
      <Button variant='outlined'>LOGIN</Button>
    </Link>
    </>
  }

  function Header1(){
    return<>
    <div className='header'>
      <div className='header_homepagetag'>{webname}</div>
      <div className='header_search'><input type='text'></input></div>
      <div className='header_userset'>
      {content}
      </div>
    </div>
    <div className='header_rowBar'></div>
    </>
  }
  
  function Header2(){
    return<>
    
    </>
  }

  return (
    <div>
      <Header1></Header1>
      <Header2></Header2>
    </div>
  );
}

export default App;