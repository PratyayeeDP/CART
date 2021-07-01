import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    //we add this constructor in order to define the state of the cartItem:
    constructor(){
        //we need to call constructor of the parent class: super()
        super();
        this.state={
            products:[
                {
                    price: 99,
                    title: 'Watch',
                    qty: 1,
                    img:'',
                    id:1
                },
                {
                    price: 999,
                    title: 'Phone',
                    qty: 1,
                    img:'',
                    id:2
                },
                {
                    price: 99999,
                    title: 'Laptop',
                    qty: 1,
                    img:'',
                    id=3
                }
            ]
        }
    }
    render(){
        const {products}=this.state;
        return(
            <div className="cart">
                {products.map((product)=>{
                    return <CartItem product={product} key={product.id}/>
                })}
            </div>
        );
    }
}
export default Cart;