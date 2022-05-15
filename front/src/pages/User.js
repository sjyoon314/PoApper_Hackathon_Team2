import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../stylesheet/User.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function User() {
    const [id, setId] = useState('example_id')
    const [pw, setPw] = useState('example_pw')
    const [stuID, setStuID] = useState('example_stuid')
    const [username, setUsername] = useState('example_username')
    
    window.onload = function(){ 
        LoadingData();
    }

    function LoadingData(){ // 이걸로 Link했을 때 새로고침 없는 경우에 문제가 된다는 것을 알게 되었지만, 대안을 못 찾아서 이렇게 두었음..
    axios.get('https://localhost:8080/')
    .then((Response)=>{
        console.log(Response);
        setId(Response.userid);
        setStuID(Response.stuID);
        setPw(Response.password);
        setUsername(Response.name);
    })
    .catch((Error)=>{console.log(Error)})
    }

    function onRevise(e){
        e.preventDefault();
        axios({
        method: "PUT",
        url: 'http://localhost:8080/register',
        data:{
            "name" : username,
            "userid" : id,
            "password" : pw
        }
    })}

    function onDelete(e){
        e.preventDefault();
        axios({
        method: "DELETE",
        url: 'http://localhost:8080/register',
        data:{
            "name" : username,
            "userid" : id,
            "password" : pw
        }
    })}

    function handle1(e){
        setStuID(e.target.value);
    }

    function handle2(e){
        setPw(e.target.value);
    }

    function handle3(e){
        setUsername(e.target.value);
    }

  return (
  <div>
    <form onSubmit={onRevise} className='UserBox'>
      <div className='Webname'><img src='/images/logo.jpg' width={150} alt=''/></div>
      <div className='Show'>id: {id}</div>
      <div className='Show'>
      Username: <input className='Input' value={username} onChange={handle1}></input>
      </div>
      <div className='Show'>
      StuID: <input className='Input' value={stuID} onChange={handle3}></input>
      </div>
      <div className='Show'>
      pw: <input className='Input' value={pw} onChange={handle2}></input>
      </div>
      <div className='Tip'>위에서 id를 제외한 정보를 수정할 수 있습니다.</div>
      <ButtonGroup>
        <Button type='submit' variant='contained' size='medium'>REVISE</Button>
        <Button className='DelBtn' variant='contained' color='error' onClick={onDelete}>DELETE</Button>
      </ButtonGroup>
      <Link to="/"><Button varinant='contained'>RETURN</Button></Link>
    </form>
  </div>
  );
}

export default User;