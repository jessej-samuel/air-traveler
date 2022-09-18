import ShowAirports from "./dashboard/ShowAirports";
import "./Dashboard.css";

const Dashboard = () => {
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
        <ShowAirports />
        <div />
      </div>
    </>
  );
};

export default Dashboard;
