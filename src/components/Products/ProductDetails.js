import React, {useContext, useEffect, useState} from 'react'
import { DataContext } from "../../context/Dataprovider";
import { useParams } from "react-router-dom";
import { ProductItem } from "./ProductItem";

export const ProductDetails = () => {
    const value = useContext(DataContext);
    const [products] = value.products;
    const addShoppingcart = value.addShoppingcart;
    const [detail, setDetail] = useState([])
    const [url, setUrl] = useState(0);
    const [images, setImages] = useState('')
    const params = useParams();
    let item = 0;

    useEffect (() =>{
        products.forEach(product =>{
            if(product.id === parseInt(params.id)){
                setDetail(product)
                setUrl(0)
            }
        })
    },[params.id, products])

    useEffect(() =>{
        const values = `${detail.img1}${url}${detail.img2}`
        setImages(values);
    },[url, params.id])

    const handleInput = e =>{
        const number = e.target.value.toString().padStart(2, '01')
        setUrl(number)
        console.log(number)
    }

    if(detail.length < 1) return null;

    return (
        <>
            {
                <div className="details">
                    <h2>{detail.title}</h2>
                    <p className="price">$ {detail.price}</p>
                    <div className="grid">
                        <p className="new">New</p>
                    </div>
                    <button onClick={()=>addShoppingcart(detail.id)}>Add to cart</button>
                    {
                      url ? <img src={images} alt={detail.title} /> : <img src={detail.image.default} alt={detail.title}/>
                    }
                    <div className="description">
                        <p><b>Description:</b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum necessitatibus soluta alias porro, saepe facere expedita asperiores quos fugit inventore ex, itaque sapiente quae pariatur beatae optio repellat aperiam quia possimus mollitia repellendus? Illo natus quam eaque impedit omnis pariatur!
                        <br/> <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vitae accusantium omnis, facere laudantium ipsa hic reprehenderit blanditiis quibusdam quos repellendus id illo reiciendis magni, aliquid beatae, consequatur sapiente! Sequi facere itaque,</p>
                    </div>
                    <br/><br/><br/><br/><br/>
                </div>
            }

            <h2 className="related">Productos relacionados</h2>
            <div className="products">
            {products.map(product =>{
                if((item < 6)&&(detail.category === product.category)){
                    item++;
                    return <ProductItem 
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    category={product.category}
                    cantidad={product.cantidad}
                    />
                }
            })
            }
        </div>

        </>
    )
}