// src/pages/EventDetails.jsx

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { initialEvents } from "../data/events";

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // find the event that matches the id in the URL
  const event = initialEvents.find((e) => e.id === Number(id));

  // if no event found
  if (!event) {
    return (
      <div className="text-center mt-5">
        <h4>Event not found!</h4>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5 ">
      <button
        className="btn btn-outline-secondary mb-4"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="card shadow-sm p-4">
        <span className="badge bg-primary mb-2" style={{ width: "fit-content" }}>
          {event.category}
        </span>
        <h2 className="fw-bold">{event.title}</h2>
        <p className="text-muted">{event.date} | {event.time} | {event.location}</p>
        <hr />
        <p>{event.description}</p>
        <p><strong>Available Seats:</strong> {event.seats}</p>

        <button className="btn btn-primary mt-3" style={{ width: "fit-content" }}>
          Register
        </button>
      </div>
    </div>
  );
}

export default EventDetails;