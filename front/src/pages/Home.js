import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Header1 from '../components/Header1';

function Home() {
  const [login, setLogin] = useState(0)
  const webname="webname";
  const [username, setUsername] = useState("username")

  return (
    <div>
        <Header1 login={login} username={username} webname={webname}></Header1>
    </div>
  );
}

export default Home;