// src/pages/MyEvents.jsx

import { useEvents } from "../context/EventContext";
import { initialEvents } from "../data/events";
import EventCard from "../components/Eventcard";

function MyEvents() {
  const { registeredEvents, favorites } = useEvents();

  const registeredList = initialEvents.filter((event) =>
    registeredEvents.includes(event.id)
  );

  const favoritesList = initialEvents.filter((event) =>
    favorites.includes(event.id)
  );

  return (
    <div className="container mt-5">

      {/* Favorites Section */}
      <h3 className="fw-bold mb-3">❤️ My Favorites</h3>
      {favoritesList.length === 0 ? (
        <p className="text-muted mb-4">No favorite events yet. Click 🤍 on any card.</p>
      ) : (
        <div className="row g-3 mb-5">
          {favoritesList.map((event) => (
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

      {/* Registered Section */}
      <h3 className="fw-bold mb-3">✅ My Registered Events</h3>
      {registeredList.length === 0 ? (
        <p className="text-muted">No registered events yet. Click Register on any card.</p>
      ) : (
        <div className="row g-3">
          {registeredList.map((event) => (
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