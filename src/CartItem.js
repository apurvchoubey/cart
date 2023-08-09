import React from "react";

class CartItem extends React.Component{
    render(){
        return(
            <div className="cart-item">
            <div className="left-block">
                <img style={style.image}/>
            </div>
            <div className="right-block">
                <div className="title">iPhone 12 Pro Max</div>
                <div className="price">Rs. 129999</div>
                <div className="cart-item-actions">
                    <div className="action-icons">
                        {//  images
                        }
                    </div>
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