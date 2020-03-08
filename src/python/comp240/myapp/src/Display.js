import React, { Component } from 'react';

class Display extends Component {
   
    render() {
        let cus=this.props.customerData.map((c,i,temp)=> {
            temp=`${c.first_name} ${c.last_name}`
            return (
                    <tr key={i}>
                        <td>{c.customer_id}</td>
                        <td>&emsp;{temp}</td>
                        <td>&emsp;{c.address}</td>
                        <td>&emsp;{c.phone}</td>
                        <td>&emsp;{c.email}</td>
                    </tr>
            )
        })

        let pro=this.props.productData.map((c,i)=> {  
            return (
                    <tr key={i}>
                        <td>{c.prod_id}</td>
                        <td>&emsp;{c.prod_name}</td>
                        <td>&emsp;{c.prod_price}</td>
                    </tr>
            )
        })

        let inv=this.props.invData.map((c,i)=> {
            return (
                    <tr key={i}>
                        <td>{c.invoice_id}</td>
                        <td>&emsp;{c.customer_id}</td>
                        <td>&emsp;{c.invoice_date}</td>
                        <td>&emsp;{c.sales_amount}</td>
                        <td>&emsp;{c.gst}</td>
                        <td>&emsp;{c.total_amount}</td>
                    </tr>
            )
        })

        let detail=this.props.detailData.map((c,i)=> {
            return (
                    <tr key={i}>
                        <td>{c.detail_id}</td>
                        <td>&emsp;{c.invoice_id}</td>
                        <td>&emsp;{c.prod_id}</td>
                        <td>&emsp;{c.quantity}</td>
                    </tr>
            )
        })

        return (
            <div> 
                <table style={{textAlign:"left", width:700}}>
                    <tbody>
                        <tr style={{fontWeight:"bold"}}>
                        <td>Customer ID</td>
                        <td>&emsp;Customer Name</td>
                        <td>&emsp;Address</td>
                        <td>&emsp;Phone</td>
                        <td>&emsp;Email</td>
                        </tr>
                    </tbody>
                    <caption style={{textAlign:"center",fontWeight:"bold",fontSize:20,fontStyle:"italic",marginBottom:20}}>List of Customers(ID, Name, Address, Phone, Email)</caption>
                    <tbody>{cus}</tbody>
                </table>

                <div style={{height:20,backgroundColor:"green"}}></div>
                <table style={{textAlign:"left", width:700}}>
                    <tbody>
                        <tr style={{fontWeight:"bold"}}>
                        <td>Product ID</td>
                        <td>&emsp;Product Name</td>
                        <td>&emsp;Price</td>
                        </tr>
                    </tbody>
                    <caption style={{textAlign:"center",fontWeight:"bold",fontSize:20,fontStyle:"italic",marginBottom:20}}>List of Products(Prod ID, Prod Name, Price)</caption>                  
                    <tbody>{pro}</tbody>
                </table>

                <div style={{height:20,backgroundColor:"green"}}></div>
                <table style={{textAlign:"left", width:700}}>
                    <tbody>
                        <tr style={{fontWeight:"bold"}}>
                        <td>Invoice ID</td>
                        <td>&emsp;Customer ID</td>
                        <td>&emsp;Invoice Date</td>
                        <td>&emsp;Sales Amt</td>
                        <td>&emsp;GST</td>
                        <td>&emsp;Total Amt</td>
                        </tr>
                    </tbody>
                    <caption style={{textAlign:"center",fontWeight:"bold",fontSize:20,fontStyle:"italic",marginBottom:20}}>List of Invoices(Inv ID, Customer ID, Inv Date,Sales Amt, GST, Total Sales)</caption>                  
                    <tbody>{inv}</tbody>
                </table>

                <div style={{height:20,backgroundColor:"green"}}></div>
                <table style={{textAlign:"left", width:700}}>
                    <tbody>
                        <tr style={{fontWeight:"bold"}}>
                        <td>Detail ID</td>
                        <td>&emsp;Invoice ID</td>
                        <td>&emsp;Product ID</td>
                        <td>&emsp;Quantity</td>
                        </tr>
                    </tbody>
                    <caption style={{textAlign:"center",fontWeight:"bold",fontSize:20,fontStyle:"italic",marginBottom:20}}>List of Invoice_Detail(Detail ID, Inv ID, Prod ID, Quantity)</caption>                  
                    <tbody>{detail}</tbody>
                </table>
            </div>
        );
    }
}

export default Display;