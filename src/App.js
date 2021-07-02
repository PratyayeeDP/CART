import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
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
                img:'https://images-na.ssl-images-amazon.com/images/I/61WixzlVuXL._UL1280_.jpg',
                id:1
            },
            {
                price: 999,
                title: 'Phone',
                qty: 1,
                img:'https://5.imimg.com/data5/QN/CD/MY-927781/telephone-instrument-500x500.jpeg',
                id:2
            },
            {
                price: 99999,
                title: 'Laptop',
                qty: 1,
                img:'http://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg',
                id:3
            }
        ]
    }
}
handleIncreaseQuantity=(product)=>{
    //console.log('Hey please increase the quantity of ',product);
    const{products}=this.state;
    const index=products.indexOf(product);
    products[index].qty+=1;
    this.setState({
        products
    })
}
handleDecreaseQuantity=(product)=>{
    const{products}=this.state;
    const index=products.indexOf(product);
    if(products[index].qty===0){
        return;
    }
    products[index].qty-=1;
    this.setState({
        products
    })
}
handleDeleteProduct=(id)=>{
    const{products}=this.state;
    const items=products.filter((item)=>item.id!==id);
    this.setState({
        products:items
    })
}
getCartCount=()=>{
    const {products}=this.state;
    let count=0;
    products.forEach((product)=>{
        count+=product.qty;
    });
    return count;
}
getCartTotal=()=>{
    const {products}=this.state;
    let cartTotal=0;
    products.map((product)=>{
        cartTotal+=product.qty*product.price;
    });
    return cartTotal;
}
  render(){
    const {products}=this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}
        /> 
        <div style={{padding:10,fontSize:20}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
