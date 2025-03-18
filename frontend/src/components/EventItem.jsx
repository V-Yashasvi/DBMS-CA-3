//EventItem Component

const EventItem = ({event}) => {
  return (
    <div>
      <h1>{event.name}</h1>
      <h3>{event.date}</h3>
      <p>{event.location}</p>
    </div>
  )
}

export default EventItem
