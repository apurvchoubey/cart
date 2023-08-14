import React from "react";

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            title : "iPhone 12 Pro Max",
            price : "Rs. 129999",
            qty : 1,
            img : "https://cdn-icons-png.flaticon.com/512/644/644458.png",
            iconImages : {
                addicon : "https://cdn-icons-png.flaticon.com/512/992/992651.png",
                removeicon : "https://cdn-icons-png.flaticon.com/512/1828/1828906.png",
                deleteicon : "https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
            }
        }
    }
    //arrow function to bind the value of this to the function...
    increaseQuantity = () =>{
        console.log('this.state',this.state);
    }
    decreaseQuantity = () =>{
        console.log('this.state',this.state);
    }
    render(){
        const {title, price, qty, img, iconImages} = this.state;
        const {addicon, removeicon, deleteicon} = iconImages;
        return(
            <div className="cart-item">
            <div className="left-block">
                <img style={style.image} src={img} alt="phone" />
            </div>
            <div className="right-block">
                <div className="title">{title}</div>
                <div className="price">{price}</div>
                <div className="qty">Qty : {qty}</div>
                <div className="cart-item-actions">
                      <img 
                      className="action-icons" 
                      alt="addicon" 
                      src={addicon}
                      onClick={this.increaseQuantity} />
                      <img 
                      className="action-icons" 
                      alt="removeicon" 
                      src={removeicon} 
                      onClick={this.decreaseQuantity}/>
                      <img 
                      className="action-icons" 
                      alt="deleteicon" 
                      src={deleteicon} 
                      onClick={this.decreaseQuantity}/>
                </div>
            </div>
        </div>
        );
    }
}
const style={
    image:{
        height: 100,
        width: 100,
        borderRadius: 4
    }
}
export default CartItem;