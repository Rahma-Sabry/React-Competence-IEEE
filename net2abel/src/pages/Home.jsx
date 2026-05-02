// src/pages/Home.jsx

import EventCard from "../components/Eventcard";
import { initialEvents } from "../data/events";

function Home() {
  return (
    <div className="container mt-4">
      <div className="row g-3">

        {initialEvents.map((event) => (
          <div className="col-md-3" key={event.id}>
            <EventCard
              title={event.title}
              category={event.category}
              date={event.date}
              location={event.location}
              description={event.description}
            />
          </div>
        ))}

      </div>
    </div>
  );
}

export default Home;