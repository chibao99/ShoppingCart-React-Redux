import React, { Component } from 'react';
import * as Message from './../constants/Message';
class CartItem extends Component {
    render() {
        var { item } = this.props;
        var { quantity } = item.quantity > 0 ? item : this.state;
        return (
            <tr>
                <th scope="row">
                    <img src={item.product.image} alt={item.product.name} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            onClick={() => this.updateQuantityProduct(item.product, item.quantity - 1)}
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                            <a>—</a>
                        </label>
                        <label
                            onClick={() => this.updateQuantityProduct(item.product, item.quantity + 1)}
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showTotal(item.product.price, item.quantity)}$</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item"
                        onClick={() => this.deleteProductInCart(item.product)}
                    >X</button>
                </td>
            </tr>
        );
    }
    showTotal = (price, quantity) => {
        return price * quantity;
    }
    deleteProductInCart = (item) => {
        var { onDeleteProductInCart } = this.props;
        onDeleteProductInCart(item);
        this.props.onChangeMessage(Message.MES_DELETE_PRODUCT_IN_CART_SUCCESS);
    }
    updateQuantityProduct = (product, quantity) => {
        if (quantity > 0) {
            this.props.onUpdateQuantity(product,quantity);
            this.props.onChangeMessage(Message.MES_UPDATE_CART_SUCCESS);
        }
    }
}

export default CartItem;