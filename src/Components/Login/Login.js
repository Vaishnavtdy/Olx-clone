import React, { useState } from 'react'

import './Login.css'
import Logo from '../../olx-logo.png'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate, Link } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password).then((authUser) => {
            if (authUser) {
                navigate('/')
            }
        }).catch(error => alert(error.message))
    }

    return (
        <div>
            <div className="login__container">
                <Link to='/'>
                    <img width="200px" height="200px" src={Logo} alt="olx-logo.png" />
                </Link>

                <form onSubmit={handleLogin}>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                        className='input'
                        id='email'
                        name='email'
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <br />
                    <label htmlFor="password">Password</label>
                    <br />
                    <input
                        className='input'
                        type="password"
                        id='password'
                        name='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <br />
                    <br />
                    <button>Login</button>
                </form>
                <a onClick={()=> navigate('/signup')}>Signup</a>
            </div>
        </div>
    )
}

export default Login