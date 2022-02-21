import React, { useState } from 'react'

import './Signup.css'
import Logo from '../../olx-logo.png'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { db } from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'
import {auth} from '../../firebase'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    
    const handleSubmit = (e)=>{
        e.preventDefault()

        createUserWithEmailAndPassword(auth, email, password).then((authUser)=>{
            if(authUser){
                updateProfile(auth.currentUser, {displayName:username}).then(()=>{
                    addDoc(collection(db, "users"), {
                        id: authUser.user.uid,
                        username,
                        email,
                        phone
                    }).then(()=>{
                        navigate('/login')
                    })
                })
            }
        }).catch(error => alert(error.message))
    }

    return (
        <div className='signup__container'>
            <img width="200px" height="200px" src={Logo} alt="" />

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <br />
                <input
                    className='input'
                    type="text"
                    name="name"
                    id="username"
                    value={username}
                    onChange={e=> setUsername(e.target.value)}
                />
                <br />
                <label htmlFor="email">Email</label>
                <br />
                <input
                    className='input'
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                />
                <br />
                <label htmlFor="phone">Phone</label>
                <br />
                <input
                    className='input'
                    type="number"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={e=>setPhone(e.target.value)}
                />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input
                    className='input'
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                />
                <br />
                <br />
                <button>Signup</button>
            </form>
            <a >Login</a>
        </div>
    )
}

export default Signup