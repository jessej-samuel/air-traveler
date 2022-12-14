import { AirplaneTicket } from "@mui/icons-material";
import { useState, useEffect, useRef } from "react";
import "./ShowAirports.css";

const ShowAirports = ({setCoordinates}) => {
  const [airports, setAirports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(5);
  const [clicked, setClicked] = useState(false);
  // const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchAirports = async (limit) => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.openaq.org/v1/locations?country=IN&limit=${limit}`
        );
        const { results } = await response.json();
        setAirports(results);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchAirports(limit);
  }, [limit]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div ref={containerRef} className="container">
      <h1 className="header">
        Airports <AirplaneTicket fontSize="large" />
      </h1>
      <div className="airport-list-container">
        <ul className="airport-list">
          {airports.map((airport, index) => (
            <li
              key={airport.id}
              className="airport-item"
              onClick={() =>
                setCoordinates({
                  lat: airport.coordinates.latitude,
                  lng: airport.coordinates.longitude,
                })
              }
            >
              {/* src="https://maps.google.com/maps?q=13.08784,80.27847&t=&z=13&ie=UTF8&iwloc=&output=embed" */}
              <h2>{airport.city}</h2>
              <p>{airport.location}</p>
            </li>
          ))}
        </ul>
      </div>
      {!clicked ? (
        <div className="footer">
          <span
            onClick={() => {
              setLimit(50);
              setClicked(true);
              containerRef.current.style.gridTemplateRows = "64px 1fr";
            }}
            className="view-all"
          >
            Load more
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default ShowAirports;
