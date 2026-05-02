// src/context/EventContext.jsx

import { createContext, useContext, useState } from "react";

const EventContext = createContext();

export function EventProvider({ children }) {
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [favorites, setFavorites] = useState([]);

  function registerEvent(id) {
    if (!registeredEvents.includes(id)) {
      setRegisteredEvents((prev) => [...prev, id]);
    }
  }

  function toggleFavorite(id) {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  }

  return (
    <EventContext.Provider value={{ registeredEvents, favorites, registerEvent, toggleFavorite }}>
      {children}
    </EventContext.Provider>
  );
}

// this is what was missing — make sure this line exists
export function useEvents() {
  return useContext(EventContext);
}