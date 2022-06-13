import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Home = ({ userId }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        axios
            .get(`https://online-excel-heroku.herokuapp.com/auth/get/${userId}`)
            .then((res) => {
                setUser(res.data.data.data.username);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <h1 className="main__title">
            Assalomu alaykum {user !== null ? user : 'foydalanuvchi'}
        </h1>
    );
};

export default Home;
