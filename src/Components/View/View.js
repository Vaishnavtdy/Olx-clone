import React, { useEffect, useState } from 'react'
import {useStateValue} from '../../StateProvider'
import './View.css'
import { db } from '../../firebase'
import { getDocs,collection, where, query } from 'firebase/firestore'

function View() {
    const [userDetails, setUserDetails] = useState([])
    const [{productDetails}] = useStateValue()
    console.log(userDetails);
    useEffect(async() => {
        const {userId} = productDetails
        console.log('userId>>>>>', userId);
        const q = query(collection(db, "users"), where("id", "==", userId));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setUserDetails(doc.data())
        });
        
    }, [])
    
    return (
        <div className='view__container'>
            <div className="image__container">
                <img src={productDetails.url} alt="" />
            </div>

            <div className="right__section">
                <div className="product__details">
                    <p>&#x20B9; {productDetails.price}</p>
                    <span>{productDetails.name}</span>
                    <p>{productDetails.category}</p>
                    <span>{productDetails.createdAt}</span>
                </div>

                <div className="contact__details">
                    <p>Seller Details</p>
                    <p>{userDetails.username}</p>
                    <p>{userDetails.phone}</p>
                </div>
            </div>
        </div>
    )
}

export default View