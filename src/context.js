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

    tester = () => {
        console.log('State Product:', this.state.products[0].inCart);
        console.log('Data Product:', storeProducts[0].inCart);

        const tempProducts = [...this.state.products];
        tempProducts[0].inCart = true

        this.setState(() =>{

            return {products:tempProducts}
        },() =>{
            console.log("State product :", this.state.products[0].inCart);
            console.log("State product :", store[0].inCart);
            
        })
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