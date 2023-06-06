import React from 'react'
import DashboardHeader from '../../components/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Layout/DashboardSidebar'
import DashboardMessages from "../../components/Shop/DashboardMessage";

const ShopInboxPage = () => {
  return (
    <div>
    <DashboardHeader />
    <div className="flex items-start justify-between w-full">
      <div className="w-[80px] 800px:w-[330px]">
        <DashboardSideBar active={8} />
      </div>
       <DashboardMessages />
    </div>
  </div>
  )
}

export default ShopInboxPage