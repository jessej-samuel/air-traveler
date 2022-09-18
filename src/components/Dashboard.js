import ShowAirports from "./dashboard/ShowAirports";
import { useRef, useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [coordinates, setCoordinates] = useState({
    lat: 13.08784,
    lng: 80.27847,
  });
  const mapRef = useRef(null);
  return (
    <>
      <h1>Dashboard</h1>
      <div className="dashboard-container">
        {/* <ShowAirports />
    <SortBased />
    <RouteVisualizer />
    <Reviews />
    <Selector> */}
        {/* Source Selection
      Destination Selection */}
        {/* </Selector> */}
        <ShowAirports setCoordinates={setCoordinates} />
        {/* Map View */}
        <div id="map-view-container" ref={mapRef}>
          <iframe
            width="100%"
            id="gmap-canvas"
            src={`https://maps.google.com/maps?q=${coordinates.lat},${coordinates.lng}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            scrolling="no"
            title="map"
            style={{ border: 0, borderRadius: "inherit" }}
            marginHeight="0"
            marginWidth="0"
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
