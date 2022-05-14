import React, {useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import Home from './Home';
import axios from 'axios';
import '../stylesheet/Login.css';

function Login() {
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
      method: "POST",
      url: 'https://reqres.in/api/login', // url 수정
      data:{
        "id" : id,
        "password" : pw
      }
    }).then((res)=>{
      console.log(res);
      setC(1);
      // ? 다시 메인으로
      <Link to="/"></Link>
    }).catch((error)=>{
      console.log(error);
      setC(2);
    })
  }

  return (
  <div>
    <form onSubmit={onLoggin} className='loginBox'>
      <div className='webName'>Webname</div>
      <input type='email' id='id' className='idBox' value={id} onChange={handlechange1}></input>
      <input type='password' id='pw' className='pwBox' value={pw} onChange={handlechange2}></input>
      <input type = "submit" className='submitBtn'></input>
    </form>
    {c}
  </div>
  );
}

export default Login;