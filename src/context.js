import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'

//variable for context
const ProductContext = React.createContext();
//context has two functioning
//provider
//consumer

class ProductProvider extends Component {
    state ={
        products:storeProducts,
        detailProduct:detailProduct
    }

    handleDetail = () =>{
         console.log('hello from detail');
    }
    addToCart = () =>{
        console.log('hello form add to cart');
    }

    render() {
        return (
            <ProductContext.Provider value={{
            ...this.state, 
            handleDetail:this.handleDetail,
            addToCart:this.addToCart

            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
//consumer 
const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer};