import React, { useContext } from "react";
import Card from "../../images/img03.jpg";
import { DataContext } from "../../context/Dataprovider";

export const ShoppingCart = () => {
    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu;
    const [shoppingcart, setShoppingcart] = value.shoppingcart;
    const [total] = value.total;

    const tooglefalse = ()=>{
        setMenu(false);
    }
    const show1 = menu ? "shoppingcarts show" : "shoppingcarts";
    const show2 = menu ? "shoppingcart show" : "shoppingcart";

    const resta = id =>{
        shoppingcart.forEach(item =>{
          if(item.id === id){
              item.cantidad === 1 ? item.cantidad = 1: item.cantidad -=1;
          }
          setShoppingcart([...shoppingcart])
        })
    }

    const suma = id =>{
        shoppingcart.forEach(item =>{
          if(item.id === id){
              item.cantidad +=1;
          }
          setShoppingcart([...shoppingcart])
        })
    }

    const removeProduct = id =>{
        if(window.confirm("Do you want to remove the product from the cart?")){
            shoppingcart.forEach((item, index) =>{
              if(item.id === id){
              item.cantidad = 1;
              shoppingcart.splice(index, 1)
              }
            })
            setShoppingcart([...shoppingcart])
        }
    }

    return (
    <div className={show1}>
        <div className={show2}>
            <div className="shoppingcart__close" onClick={tooglefalse}>
                <box-icon name="x"></box-icon>
            </div>
            <h2>Your Shopping Cart</h2>
            

              <div className="shoppingcart__center">
            {
                shoppingcart.length === 0 ? <h2 style={{
                    textAlign: "center", fontSize: "3rem"
                }} > Empty Shopping Cart </h2> : <>
            {
              shoppingcart.map((product)=>(
                <div className="shoppingcart__item" key={product.id}>
                <img src={product.image.default} alt=""/>
                 <div>
                    <h3>{product.title}</h3>
                    <p className="price">$ {product.price}</p>
                 </div>
                 <div>
                   <box-icon name="up-arrow" type="solid" onClick={() => suma(product.id)}></box-icon>
                   <p  className="cantidad">{product.cantidad}</p>
                   <box-icon name="down-arrow" type="solid" onClick={() => resta(product.id)}></box-icon>
                 </div>
                 <div className="remove__item" onClick={() => removeProduct(product.id)}>
                    <box-icon name="trash"></box-icon>
                 </div>
                </div>
              ))
            }
            </>
            }
              </div>


            <div className="shoppingcart__footer">
                <h3>Total: $ {total}</h3>
                <button className="btn">Payment</button>
            </div>
        </div>
    </div>
    )
}