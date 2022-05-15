import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../stylesheet/Register.css';

function Register() {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [username, setUsername] = useState('')
  const [stuid, setStuid] = useState('')

  function handlechange1(e){
    setId(e.target.value);
  }
  function handlechange2(e){
    setPw(e.target.value);
  }
  function handlechange3(e){
    setUsername(e.target.value);
  }
  function handlechange4(e){
    setStuid(e.target.value);
  }

  function onRegister(e){
    e.preventDefault();
    axios({
      method: "PUT",
      url: 'http://localhost:8080/register',
      data:{
        "username" : username,
        "collegenumber" : stuid,
        "userid" : id,
        "password" : pw
      }
    })}

  return (
  <div>
    <form onSubmit={onRegister} className='loginBoxr'>
      <div className='webNamer'><img src='/images/logo.jpg' width={170} alt=''/></div>
      <input type='id' id='userid' className='idBoxr' placeholder='사용할 유저 이름을 입력해주세요' value={id} onChange={handlechange3}></input>
      <input type='id' id='stuid' className='idBoxr' placeholder='본인의 학번을 입력해주세요' value={id} onChange={handlechange4}></input>
      <input type='id' id='id' className='idBoxr' placeholder='사용할 id를 입력해주세요' value={id} onChange={handlechange1}></input>
      <input type='password' id='pw' className='pwBoxr' placeholder='사용할 pw를 입력해주세요' value={pw} onChange={handlechange2}></input>
      <input type='password' id='pw' className='pwBoxr' placeholder='사용할 pw를 재입력해주세요' value={pw} onChange={handlechange2}></input>
      <Link to="/login"><input type = "submit" className='submitBtnr'></input></Link>
    </form>
  </div>
  );
}

export default Register;