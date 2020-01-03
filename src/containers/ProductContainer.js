import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from './../Components/ProductItem';
import Products from './../Components/Products';
import { actAddToCart, changeMessage } from './../actions/index';
class ProductContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            <Products>
                {this.showProduct(products)}
            </Products>
        )
    }
    showProduct(products) {
        var result = null;
        var { onAddToCart, onChangeMessage } = this.props;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem key={index} product={product}
                    onAddToCart={onAddToCart}
                    onChangeMessage={onChangeMessage}
                />
            })
        }
        return result;
    };

}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onChangeMessage: (message) => {
            dispatch(changeMessage(message));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);