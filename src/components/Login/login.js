import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const LogIn = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const users = [
        {
            email: 'yoyo@gmail.com',
            password: 'yoyo123'
        },
        {
            email: 'rock@gmail.com',
            password: 'rock12yy'
        }
    ];

    const setNewUser = props =>{
        console.log(props.email);
        users.push({
            email: props.email,
            password: props.password
        })
    }

    useEffect(() => {
        setNewUser(props);
    });

    function handleSubmit(event){
        event.preventDefault();
        try{
            users.forEach(user => {
                if(user.email === email){
                    if(user.password === password){
                        props.history.push('/mapbox');
                    } else {
                        alert('Password Did not match');
                        return;
                    }
                } 
            })
        } catch(e) {
                alert('Email not Registered');
                return;
            }
    }

    return(
        <div className='outerDiv'>
            <div className='innerDiv'>
            <form onSubmit={handleSubmit}>
                <h1>Sign In</h1>
                <div className='email'>
                        <label>Email</label>
                        <input type='email' 
                            placeholder='Email' 
                            name='email' 
                            value={email} 
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='password'>
                        <label>Password</label>
                        <input type='password' 
                            placeholder='Password' 
                            name='password' 
                            value={password} 
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button type='submit'>Sign In</button>
            </form>
            <div className='lastDiv'>
                <span>New User  </span>
                <Link to={{pathname: '/'}}>Sign Up</Link>
            </div>
            </div>
        </div>
    )
}


export default LogIn;

