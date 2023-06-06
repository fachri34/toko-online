import React from 'react'
import DashboardHeader from '../../components/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Layout/DashboardSidebar'
import AllRefundOrders from "../../components/Shop/AllRefundOrder";

const ShopAllRefunds = () => {
  return (
    <div>
    <DashboardHeader />
    <div className="flex justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSideBar active={10} />
        </div>
        <div className="w-full justify-center flex">
           <AllRefundOrders />
        </div>
      </div>
</div>
  )
}

export default ShopAllRefunds