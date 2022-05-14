import React, {useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import Home from './Home';
import axios from 'axios';
import '../stylesheet/Login.css';
import Button from '@mui/material/Button';

function Login({location, history}) {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')

  function handlechange1(e){
    setId(e.target.value);
  }
  function handlechange2(e){
    setPw(e.target.value);
  }

  function onLoggin(e){
    e.preventDefault();
    axios({
      method: "PUT",
      url: 'http://localhost:8080/login',
      data:{
        "userid" : id,
        "password" : pw
      }
    })}

  return (
  <div>
    <form onSubmit={onLoggin} className='loginBox'>
      <div className='webName'>Webname</div>
      <input type='id' id='id' className='idBox' placeholder='id를 입력해주세요' value={id} onChange={handlechange1}></input>
      <input type='password' id='pw' className='pwBox' placeholder='pw를 입력해주세요' value={pw} onChange={handlechange2}></input>
      <Link to="/"><input type = "submit" className='submitBtn'></input></Link>
      <Link to="/register"><Button variant='contained'>Register</Button></Link>
    </form>
  </div>
  );
}

export default Login;