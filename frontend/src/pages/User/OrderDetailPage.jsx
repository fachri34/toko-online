import React from 'react'
import Header from '../../components/Layout/Header'
import Footer from '../../components/Layout/Footer'
import OrderDetails from "../../components/User/Order/OrderDetail";

const OrderDetailsPage = () => {
  return (
    <div>
        <Header />
        <OrderDetails />
        <Footer />
    </div>
  )
}

export default OrderDetailsPage