import React from 'react'
import DashboardHeader from '../../components/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Layout/DashboardSidebar'
import AllEvent from "../../components/Shop/AllEvent";

const ShopAllEvents = () => {
  return (
    <div>
        <DashboardHeader />
        <div className="flex justify-between w-full">
            <div className="w-[80px] 800px:w-[330px]">
              <DashboardSideBar active={5} />
            </div>
            <div className="w-full justify-center flex">
                <AllEvent />
            </div>
          </div>
    </div>
  )
}

export default ShopAllEvents