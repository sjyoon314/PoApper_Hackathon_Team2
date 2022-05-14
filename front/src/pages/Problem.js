import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Article from '../components/Article';

function Problem() {
    const [login, setLogin] = useState(0)
    const webname="webname";
    const [username, setUsername] = useState("username")


    return (
        <div>
            <Header login={login} username={username} webname={webname}></Header>
            <Article></Article>






        </div>
    );
}

export default Problem;