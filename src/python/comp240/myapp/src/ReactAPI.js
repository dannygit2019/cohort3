import React, { Component } from 'react';
import Display from './Display'

global.fetch = require('node-fetch');

class ReactAPI extends Component {
    // tempdata=[]
    state = {
        customers: [],
        products: [],
        invoices: [],
        detail: []
    }
    componentDidMount() {
        fetch('http://localhost:5000/allcustomers')
        .then(res => res.json().then((data) => {
              this.setState({ customers: data })
        }))
        fetch('http://localhost:5000/allproducts')
        .then(res => res.json().then((data) => {
              this.setState({ products: data })
        }))
        fetch('http://localhost:5000/allinvoices')
        .then(res => res.json().then((data) => {
              this.setState({ invoices: data })
        }))
        fetch('http://localhost:5000/alldetail')
        .then(res => res.json().then((data) => {
              this.setState({ detail: data })
        }))
    }

    render() {

        return (
            <div>
               <Display customerData={this.state.customers}
                productData={this.state.products} invData={this.state.invoices} detailData={this.state.detail}/>
            </div>
        );
    }
}

export default ReactAPI;