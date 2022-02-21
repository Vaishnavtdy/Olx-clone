import React, { useEffect, useState } from 'react'

import './Posts.css'
import Heart from '../../Assets/Heart'
import { db } from '../../firebase'
import { getDocs, collection } from 'firebase/firestore'
import { useStateValue } from '../../StateProvider'
import { useNavigate } from 'react-router-dom'

function Posts() {
    const [{ productDetails }, dispatch] = useStateValue()
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        async function ViewAll() {
            const querySnapshot = await getDocs(collection(db, "products"));
            const allPost = querySnapshot.docs.map((product) => {
                return {
                    ...product.data(),
                    id: product.id
                }
            })
            console.log('all post is >>>', allPost)
            setProducts(allPost)
        }
        ViewAll()
    }, [products])

    return (
        <div className='posts__container'>
            <div className="more__view">
                <div className="heading">
                    <span>Quick Menu</span>
                    <span>View More</span>
                </div>

                <div className="cards">
                    {
                        products?.map((product) => {

                            return <div className="card"
                                onClick={() => {
                                    dispatch({
                                        type: "SET_PRODUCTS",
                                        productDetails: product,
                                    })
                                    navigate('/view')
                                }}
                            >
                                <div className="favourite">
                                    <Heart />
                                </div>
                                <div className="image">
                                    <img className='prod__img' src={product.url} alt="" />
                                </div>
                                <div className="content">
                                    <p className="rate">&#x20B9; {product.price}</p>
                                    <span className="category">{product.category}</span>
                                    <p className="name">{product.name}</p>
                                </div>
                                <div className="date">
                                    <span>{product.createdAt}</span>
                                </div>
                            </div>
                        })}


                </div>
            </div>

            <div className="recommendations">
                <div className="heading">
                    <span>Fresh recommendations</span>
                </div>
                <div className="r_cards">
                    {products?.map((product) => {

                        return <div className="r_card"
                            onClick={() => {
                                dispatch({
                                    type: "SET_PRODUCTS",
                                    productDetails: product,
                                })
                                navigate('/view')
                            }}
                        >
                            <div className="favourite">
                                <Heart />
                            </div>
                            <div className="image">
                                <img className='prod__img' src={product.url} alt="" />
                            </div>
                            <div className="content">
                                <p className="rate">&#x20B9; {product.price}</p>
                                <span className="category">{product.category}</span>
                                <p className="name">{product.name}</p>
                            </div>

                            <div className="date">
                                <span>{product.createdAt}</span>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Posts