import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../stylesheet/Login.css';
import Button from '@mui/material/Button';

function Login() {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [check1, setCheck1] = useState(0)
  const [check2, setCheck2] = useState(0)

  function handlechange1(e){
    setId(e.target.value);
    setCheck1(e.target.value.length);
  }
  function handlechange2(e){
    setPw(e.target.value);
    setCheck2(e.target.value.length);
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
      <div className='webName'><img src='/images/logo.jpg' width={170} alt=''/></div>
      <input type='id' id='id' className='idBox' placeholder='id를 입력해주세요' value={id} onChange={handlechange1}></input>
      <input type='password' id='pw' className='pwBox' placeholder='pw를 입력해주세요' value={pw} onChange={handlechange2}></input>
      <Link to="/"><input type = "submit" className='submitBtn'></input></Link>
      <Link to="/register"><Button variant='contained'>Register</Button></Link>
    </form>
  </div>
  );
}

export default Login;