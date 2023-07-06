import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { productData } from '../../static/data'
import Header from '../../components/Layout/Header'
import styles from '../../styles/styles'
import Loader from "../../components/Layout/Loader";
import { useSelector } from "react-redux";
import Footer from "../../components/Layout/Footer";
import ProductCard from '../../components/User/Home/ProductCard/ProductCard'

const BestSellingPage = () => {
    const [data, setData] = useState([]);
    const {allProducts,isLoading} = useSelector((state) => state.product);
  
    useEffect(() => {
      const allProductsData = allProducts ? [...allProducts] : [];
      const sortedData = allProductsData?.sort((a,b) => b.sold_out - a.sold_out); 
      setData(sortedData);
    }, [allProducts]);
    return (
        <>
   {
    isLoading ? (
      <Loader />
    ) : (
      <div>
      <Header activeHeading={2} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
      </div>
      <Footer />
    </div>
    )
   }
   </>
  );
};

export default BestSellingPage