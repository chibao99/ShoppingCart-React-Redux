import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../Components/Cart';
import CartItem from '../Components/CartItem';
import * as Message from '../constants/Message';
import CartResult from '../Components/CartResult';
import { deleteProductInCart, changeMessage, updateQuantityProduct } from '../actions';
class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        return (
            <Cart>
                {this.showProductCart(cart)}
                {this.showTotalPrice(cart)}
            </Cart>
        );
    }
    showProductCart(cart) {
        var result = <tr><td>{Message.MES_ACRT_EMPTY}</td></tr>;
        var {onDeleteProductInCart,onChangeMessage,onUpdateQuantity} = this.props;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem 
                        key={index} 
                        item={item} 
                        onDeleteProductInCart = {onDeleteProductInCart}
                        onChangeMessage = {onChangeMessage}
                        onUpdateQuantity = {onUpdateQuantity}
                    />
                );
            });
        }
        return result;
    };
    showTotalPrice(cart) {
        var result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }
}
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(deleteProductInCart(product))
        },
        onChangeMessage : (Message)=>{
            dispatch(changeMessage(Message))
        },
        onUpdateQuantity : (product,quantity)=>{
            dispatch(updateQuantityProduct(product,quantity))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);