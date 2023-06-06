import React from 'react'
import Header from '../../components/Layout/Header'
import EventCard from '../../components/User/Events/EventCard'
import { useSelector } from 'react-redux'
import Loader from "../../components/Layout/Loader";

const EventsPage = () => {
  const {allEvents, isLoading} = useSelector((state) => state.event)
  return (
    <div>
       {isLoading ? (
        <Loader/>
       ):(
        <div>
          <Header activeHeading={4}/>
          <EventCard active={true} data={allEvents && allEvents[0]}/>
        </div>
       )}
    </div>
  )
}

export default EventsPage