//we import React from react package:
import React from 'react';

//our CartItem will inherit some features from React.Component:
class CartItem extends React.Component{
    //we add this constructor in order to define the state of the cartItem:
    constructor(){
        //we need to call constructor of the parent class: super()
        super();
        this.state={
            price: 999,
            title: 'Phone',
            qty: 1,
            img:''
        }
        //this.increaseQuantity=this.increaseQuantity.bind(this);
        //this.testing();
    }
     //testing(){
    //     const promise=new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve('done');
    //         },5000);
    //     })

    //     promise.then(()=>{
    //         //setstate acts like a synchronous call
    //         this.setState({qty:this.state.qty+10});
    //         this.setState({qty:this.state.qty+10});
    //         this.setState({qty:this.state.qty+10});
    //         console.log('state',this.state);
    //     })
    //}
    increaseQuantity=()=>{
        //this.state.qty+=1;
        //console.log('this',this.state);
        //setState form 1: shallow merging
        // this.setState({
        //     qty:this.state.qty+1
        // });

        //setState form 2: if previous state required use this
        this.setState((prevState)=>{
            return{
                qty:prevState.qty+1
            }
        });
    }
    decreaseQuantity=()=>{
        const {qty}=this.state;
        if(qty==0){
            return;
        }
        //setState form 2: if previous state required use this
        this.setState((prevState)=>{
            return{
                qty:prevState.qty-1
            }
        });
    }
    render(){
        //we don't need to specify this.state everytime we need to access an attribute of the object:object destructuring
        const {price,title,qty}=this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs. {price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons*/}
                        <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/512/1828/1828925.png"
                        onClick={this.increaseQuantity}
                        />
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/512/992/992683.png"
                        onClick={this.decreaseQuantity}
                        />
                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/512/3096/3096673.png" 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

//way to style in JSX: as objects
const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background: '#ccc'
    }
}

//we need to export CartItem to be available to App.js:
export default CartItem;