import React, {useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import Home from './Home';
import axios from 'axios';
import '../stylesheet/Login.css';

function Login(props) {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [c, setC] = useState('')

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
      url: 'http://localhost:3000/login',
      data:{
        "userid" : id,
        "password" : pw
      }
    })}

  return (
  <div>
    <form onSubmit={onLoggin} className='loginBox'>
      <div className='webName'>Webname</div>
      <input type='id' id='id' className='idBox' value={id} onChange={handlechange1}></input>
      <input type='password' id='pw' className='pwBox' value={pw} onChange={handlechange2}></input>
      <Link to="/"><input type = "submit" className='submitBtn'></input></Link>
    </form>
    {c}
  </div>
  );
}

export default Login;