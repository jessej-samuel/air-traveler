import { AirplaneTicket } from "@mui/icons-material";
import { useState, useEffect } from "react";
import "./ShowAirports.css";

const ShowAirports = () => {
  const [airports, setAirports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAirports = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://api.openaq.org/v1/locations?country=US&limit=5"
        );
        const { results } = await response.json();
        setAirports(results);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchAirports();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div class="container">
      <h1 className="header">
        Airports <AirplaneTicket fontSize="large" />
      </h1>
      <div className="airport-list-container">
        <ul className="airport-list">
          {airports.map((airport) => (
            <>
              <li key={airport.id} className="airport-item">
                <h2>{airport.city}</h2>
                <p>{airport.location}</p>
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className="footer">
        <span onClick={(e) => {}} className="view-all">
          Show more
        </span>
      </div>
    </div>
  );
};

export default ShowAirports;
