import React, { useState, useEffect } from 'react'
import './register.css'
import { Link } from 'react-router-dom';


const Register = props => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const formError = []

    function handleSubmit(event){
        event.preventDefault();
        handleCheck();
        if(formValid()){
             alert('Invalid vaules');
             return;
         }
        props.handleLogin( {
            data: { email: email, 
                password: password }
            } ); 
        props.history.push('/login');
    }

    function formValid(){
        let valid = false;
        if(formError.length > 0){
            valid = true;
        }
        return valid;
    }
    
    function handleCheck(){
        if(firstName < 3){
            formError.push({ firstnameError: 'minimum 3 characters are required'});
        }
        if(lastName < 3){
            formError.push({lastnameError: 'minimum 3 characters are required'});
        }
        if(password.length < 6){
            formError.push({passcodeError: 'Password cannot be less than 6'});
        }
        if(password !== confirmPassword){
            formError.push({passcode2Error: 'Password and Confirm Password not matched'});
        }
    }

    return(
        <div className='outerDiv'>
            <div className='innerDiv'>
                <h1>SignUp</h1>
                <form onSubmit={handleSubmit} noValidate>
                    <div className='firstName'>
                        <label>First Name</label>
                        <input type='text' 
                            placeholder='First Name' 
                            name='firstName' 
                            value={firstName} 
                            onChange={e => setFirstName(e.target.value)}
                        />
                    </div>
                    {formError.length > 0 && (
                        <span>{formError.firstnameError}</span>
                    )}
                    <div className='lastName'>
                        <label>Last Name</label>
                        <input type='text' 
                            placeholder='Last Name' 
                            name='lastName' 
                            value={lastName} 
                            onChange={e => setLastName(e.target.value)}
                        />
                    </div>
                    {formError.length > 0 && (
                        <span>{formError.lastnameError}</span>
                    )}
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
                    {formError.length > 0 && (
                        <span>{formError.passcodeError}</span>
                    )}
                    <div className='password2'>
                        <label>Confirm Password</label>
                        <input type='password' 
                            placeholder='Confirm Password' 
                            name='password2' 
                            value={confirmPassword} 
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    {formError.length > 0 && (
                        <span>{formError.passcode2Error}</span>
                    )}
                    <div className='button'>
                        <button type='submit'>SignUp</button>
                        <span>
                            Already have an account    
                            <Link to={{pathname: '/login'}}>Sign In</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;