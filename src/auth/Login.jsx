import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function Login({ userId, setUserId }) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === 'userName') {
            setUserName(value);
        }
        if (id === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post('https://online-excel-heroku.herokuapp.com/auth/token', {
                username: userName,
                password: password,
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

        axios
            .get('https://online-excel-heroku.herokuapp.com/auth/list')
            .then((res) => {
                const data = res.data.data.data;
                data.map((user) => {
                    if (user.username === userName) {
                        setUserId(user.id);
                        navigate('/', { replace: true });
                    }
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="registr">
            <div className="form">
                <div className="form-body">
                    <div className="username">
                        <label className="form__label" htmlFor="userName">
                            User Name:{' '}
                        </label>
                        <input
                            className="form__input"
                            required
                            type="text"
                            id="userName"
                            placeholder="User Name"
                            value={userName}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className="password">
                        <label className="form__label" htmlFor="password">
                            Password:{' '}
                        </label>
                        <input
                            className="form__input"
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                </div>
                <div className="footer">
                    <button
                        type="submit"
                        className="btn"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Login;
