// src/pages/Events.jsx

import { useState } from "react";
import EventCard from "../components/Eventcard";
import { initialEvents } from "../data/events";

function Events() {
  const [search, setSearch] = useState("");

  // filter events based on what user types
  const filteredEvents = initialEvents.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="container mt-5">

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Results count */}
        <p className="text-muted">{filteredEvents.length} event(s) found</p>

        {/* Cards */}
        <div className="row g-3">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
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
            ))
          ) : (
            <p className="text-center text-muted mt-4">No events match your search.</p>
          )}
        </div>

      </div>
    </>
  );
}

export default Events;