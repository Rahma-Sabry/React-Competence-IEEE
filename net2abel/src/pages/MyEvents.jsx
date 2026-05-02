// src/pages/MyEvents.jsx

import { useEvents } from "../context/EventContext";
import { initialEvents } from "../data/events";
import EventCard from "../components/Eventcard";

function MyEvents() {
  const { registeredEvents } = useEvents();

  // find the full event objects that match registered ids
  const myEventsList = initialEvents.filter((event) =>
    registeredEvents.includes(event.id)
  );

  return (
    <div className="container mt-5">
      <h3 className="fw-bold mb-4">My Registered Events</h3>

      {myEventsList.length === 0 ? (
        <p className="text-muted">You haven't registered for any events yet.</p>
      ) : (
        <div className="row g-3">
          {myEventsList.map((event) => (
            <div className="col-md-3" key={event.id}>
              <EventCard
                id={event.id}
                title={event.title}
                category={event.category}
                date={event.date}
                time={event.time}
                location={event.location}
                description={event.description}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyEvents;