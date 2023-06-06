import React from 'react'
import DashboardHeader from '../../components/Layout/DashboardHeader'
import DashboardSidebar from '../../components/Layout/DashboardSidebar'
import AllProduct from '../../components/Shop/AllProduct'

const ShopAllProduct = () => {
  return (
    <div>
    <DashboardHeader />
    <div className='flex items-center justify-between w-full'>
      <div className="w-[80px] 800px:w-[330px]">
        <DashboardSidebar active={3}/>
      </div>
      <div className='w-full justify-center flex'>
          <AllProduct/>
      </div>
    </div>
  </div>
  )
}

export default ShopAllProduct