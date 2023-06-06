import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { productData } from '../../static/data'
import Header from '../../components/Layout/Header'
import styles from '../../styles/styles'
import { useSelector } from 'react-redux'
import Loader from "../../components/Layout/Loader";
import Footer from "../../components/Layout/Footer";
import ProductCard from '../../components/User/Home/ProductCard/ProductCard'

const ProductsPage = () => {
    const [searchParams] = useSearchParams()
    const categoryData = searchParams.get("category")
    const [data, setData] = useState([])
    const { allProducts, isLoading } = useSelector((state) => state.product)

    useEffect(() => {
        if (categoryData === null) {
            const d = productData && productData.sort((a, b) => a.total_sell - b.total_sell)
            setData(d)
        } else {
            const d = allProducts && allProducts.filter((i) => i.category === categoryData)
            setData(d)
        }
    }, [allProducts])
    return (
        <>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <>
                        <Header activeHeading={3} />
                        <br />
                        <br />
                        <div className={`${styles.section}`}>
                            <div className='grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap[25px] xl:grid-cols-5 xl:gap-[30px] mb-12'>
                                {
                                    data && data.map((i, index) => (
                                        <ProductCard data={i} key={index} />
                                    ))
                                }
                            </div>
                            {
                                data && data.length === 0 ? (
                                    <h1 className='text-center w-full pb-[100px] text-[20px]'>
                                        No products Found
                                    </h1>
                                ) : null
                            }
                        </div>
                        <Footer/>
                    </>
                )
            }
        </>
    )
}

export default ProductsPage