import React, {useState, useEffect, createContext} from "react";
import Data from '../Data.js';

export const DataContext = createContext();

export const DataProvider = (props) =>{
    const [products, setProducts] = useState([])
    const [menu, setMenu] = useState(false);
    const [shoppingcart, setShoppingcart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() =>{
        const product = Data.items
        if (product){
          setProducts(product)
        }
        else{
            setProducts([])
        }
        
    },[])

    const addShoppingcart = (id) =>{
        const check = shoppingcart.every(item =>{
            return item.id !== id;
        })
        if(check){
            const data = products.filter(product => {
                return product.id === id
            })
            setShoppingcart([...shoppingcart, ...data])
        }
        else{
            alert("The product has been added to the cart")
        }
    }

    useEffect(() =>{
        const dataShoppingcart = JSON.parse(localStorage.getItem('dataShoppingcart')
        )
        if(dataShoppingcart){
            setShoppingcart(dataShoppingcart)
        }

    }, [])

    useEffect(() =>{
        localStorage.setItem('dataShoppingcart', JSON.stringify(shoppingcart))
    },[shoppingcart])

    useEffect (() =>{
        const getTotal = () =>{
            const res = shoppingcart.reduce((prev, item) =>{
                return prev + (item.price * item.cantidad);
            }, 0)
            setTotal(res)
        }
        getTotal()
    },[shoppingcart])

    const value = {
        products : [products],
        menu: [menu, setMenu],
        addShoppingcart: addShoppingcart,
        shoppingcart : [shoppingcart, setShoppingcart],
        total: [total, setTotal]
    }

    return (
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}