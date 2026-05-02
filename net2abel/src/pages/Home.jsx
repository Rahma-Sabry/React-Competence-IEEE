import EventCard from "../components/Eventcard";
import { initialEvents } from "../data/events";
function Home() {
  return (
    <>

      <div >
        
        <section style={styles.hero}>
          <h1 style={styles.title}>Welcome to Net2abel</h1>
          <p style={styles.subtitle}>
            Teegi Net2abel? Discover events, create your own, and connect with others.
          </p>

          <button style={styles.button}>Explore Events</button>
        </section>

      </div>
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
    </>
  );
}

const styles = {
  hero: {
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    background: "#BFD7FF",
    color: "white",
    marginBottom: "30px",
    padding: "20px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#05398e",
  },
  subtitle: {
    fontSize: "1.2rem",
    opacity: 0.9,
    marginBottom: "20px",
    color: "#002f57",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "white",
    color: "#05398e",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Home;