// src/components/EventList.jsx

import { useEffect, useState } from "react";
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

    return(
        <>
            {/* Event list */}
            <h1>Events: </h1>
            {events.length===0? <p>No events found</p> : (
                events?.map((event, i)=>{
                    return <EventItem event={event} key={i}/>
                })
            )}
        </>
    );
}

export default EventList;
