import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function Registr() {
    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    let navigate = useNavigate();

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === 'fullName') {
            setFullName(value);
        }
        if (id === 'userName') {
            setUserName(value);
        }
        if (id === 'number') {
            setPhoneNumber(value);
        }
        if (id === 'password') {
            setPassword(value);
        }
        if (id === 'confirmPassword') {
            setConfirmPassword(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
        } else {
            axios
                .post(
                    'https://online-excel-heroku.herokuapp.com/auth/register',
                    {
                        fullName: fullName,
                        username: userName,
                        password: password,
                        phone: phoneNumber,
                    }
                )
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
            navigate('/login', { replace: true });
        }
    };

    return (
        <div className="registr">
            <div className="form">
                <div className="form-body">
                    <div className="fullname">
                        <label className="form__label" htmlFor="fullName">
                            Full Name:{' '}
                        </label>
                        <input
                            className="form__input"
                            required
                            type="text"
                            id="fullName"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
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
                    <div className="phoneNumber">
                        <label className="form__label" htmlFor="number">
                            Phone Number:{' '}
                        </label>
                        <input
                            type="number"
                            required
                            id="number"
                            className="form__input"
                            placeholder="Phone Number"
                            value={phoneNumber}
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
                    <div className="confirm-password">
                        <label
                            className="form__label"
                            htmlFor="confirmPassword"
                        >
                            Confirm Password:{' '}
                        </label>
                        <input
                            className="form__input"
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            value={confirmPassword}
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
export default Registr;
