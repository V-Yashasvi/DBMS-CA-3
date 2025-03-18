// src/components/EventForm.jsx
// import axios from 'axios'

import { useState } from "react";

function EventForm({onAddEvent}) {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const event=fetch(`http://localhost:5000/events`, {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name, date, location})
        });
        alert("Event added successfully!")
        onAddEvent(event)
        setName("")
        setDate("")
        setLocation("")
    }

    return (
        <>
        {/* Event form */}
            <form action="" onSubmit={handleSubmit}>
                <input
                type="text"
                value={name}
                placeholder="Enter the event name"
                onChange={(e) => setName(e.target.value)}
                />
                <input
                type="date"
                value={date}
                placeholder="Enter the event name"
                onChange={(e) => setDate(e.target.value)}
                />
                <input
                type="text"
                value={location}
                placeholder="Enter the event name"
                onChange={(e) => setLocation(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default EventForm;
