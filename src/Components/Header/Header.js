import React from 'react'

import './Header.css'
import OlxLogo from '../../Assets/OlxLogo'
import Search from '../../Assets/Search'
import Arrow from '../../Assets/Arrow'
import SellButton from '../../Assets/SellButton'
import SellButtonPlus from '../../Assets/SellButtonPlus'
import { useStateValue } from '../../StateProvider'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import { useNavigate, Link } from 'react-router-dom'

function Header() {
    const [{ user }] = useStateValue();
    const navigate = useNavigate()

    const handleSignout = () => {

        signOut(auth).then(() => {
            navigate('/')
        }).catch((error) => alert(error.message))

    }



    return (
        <div className='header__parent'>
            <div className="header__child">

                <Link to='/'>
                    <div className="brand__name">
                        <OlxLogo />
                    </div>
                </Link>

                <div className="place__search">
                    <Search />
                    <input type="text" placeholder='India' />
                    <Arrow />
                </div>

                <div className="product__search">
                    <div className="input">
                        <input
                            type="text"
                            placeholder='Find cars, Mobile phones and more...'
                        />
                    </div>
                    <div className="search__action">
                        <Search color="#ffffff" />
                    </div>
                </div>

                <div className="language">
                    <span>ENGLISH</span>
                    <Arrow />
                </div>

                <div className="login__page">
                    {user ? <span>{user.displayName}</span> : <span onClick={() => navigate('/login')}>Login</span>}
                    <hr />
                </div>
                {user && <span onClick={handleSignout}>Logout</span>}

                <Link to='/create'>
                    <div className="sell__menu">
                        <SellButton />
                        <div className="sell-menu-content">
                            <SellButtonPlus />
                            <span>SELL</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header