import React, { Fragment, useState } from 'react'

import './Create.css'
import Header from '../Header/Header'
import { useStateValue } from '../../StateProvider'
import { storage, db } from '../../firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { addDoc, collection} from 'firebase/firestore'
import { useNavigate} from 'react-router-dom'

function Create() {
    const [{ user }] = useStateValue();
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState()
    const date = new Date()
    const handleSubmit = (e) => {
        e.preventDefault();
        const storageRef = ref(storage, `/image/${image.name}`)
    uploadBytes(storageRef, image).then(({ref}) => {
            getDownloadURL(ref).then((url)=>{
                console.log(url);
                addDoc(collection(db, 'products'), {
                    name,
                    category,
                    price,
                    url,
                    userId: user.uid,
                    createdAt: date.toDateString()
                })
                navigate('/')
            })
        })
    }

    return (
        <Fragment>
            <Header />
            <card>
                <div className="center__div">
                    <form >
                        <label htmlFor="name">Name</label>
                        <br />
                        <input
                            className='input'
                            type="text"
                            name="Name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <br />
                        <label htmlFor="category">Category</label>
                        <br />
                        <input
                            className='input'
                            type="text"
                            name="Category"
                            id="Category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                        <br />
                        <label htmlFor="price">Price</label>
                        <br />
                        <input
                            className='input'
                            type="number"
                            name="Price"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />

                        <br />
                        <br />
                        <img src={image ? URL.createObjectURL(image) : ''} alt="Posts" width="200px" height="200px" />

                        <br />
                        <input onChange={(e) => setImage(e.target.files[0])} type="file" />
                        <br />
                        <button onClick={handleSubmit} className='upload__btn'>Upload and Submit</button>
                    </form>
                </div>
            </card>
        </Fragment>
    )
}

export default Create