import React, { useEffect, useState } from 'react'
import Header from '../../components/Layout/Header'
import Footer from '../../components/Layout/Footer'
import ProductDetail from '../../components/User/Product/ProductDetail'
import { useParams,  useSearchParams } from 'react-router-dom'
import SuggestedProduct from "../../components/User/Product/SuggestedProduct"
import { useSelector } from 'react-redux'

const ProductDetailPage = () => {
  const { allProducts } = useSelector((state) => state.product);
  const { allEvents } = useSelector((state) => state.event);
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
  const eventData = searchParams.get("isEvent");

  useEffect(() => {
    if (eventData !== null) {
      const data = allEvents && allEvents.find((i) => i._id === id);
      setData(data);
    } else {
      const data = allProducts && allProducts.find((i) => i._id === id);
      setData(data);
    }
  }, [allProducts, allEvents]);
  return (
    <div>
        <Header/>
        <ProductDetail data={data}/>
        {
          data && <SuggestedProduct data={data}/>
        }
        <Footer/>
    </div>
  )
}

export default ProductDetailPage