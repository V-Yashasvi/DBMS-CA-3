// src/components/EventList.jsx

import { useEffect, useState } from "react";
import EventForm from "./EventForm";
import EventItem from "./EventItem";


function EventList() {
    const [events, setEvents]=useState([]);

    const fetchedData=async()=>{
        fetch(`http://localhost:5000/events`)
        .then((res) => res.json())
        .then((data) => {
            setEvents(data)
            console.log(data)
        })
        .catch((err) => {
            console.log(err);
        });
    }

    useEffect(()=>{
        fetchedData()
    },[])

    const handleEvent=(event)=>{
        setEvents((prev)=>[...prev, event])
    }

    return(
        <>
            {/* Event list */}
            <EventForm onAddEvent={handleEvent}/>
            {events.length===0? <p>No events found</p> : (
                events?.map((event)=>{
                    <EventItem event={event}/>
                })
            )}
        </>
    );
}

export default EventList;
