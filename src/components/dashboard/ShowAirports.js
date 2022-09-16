import { Box, Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./ShowAirports.css";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "city", headerName: "City", width: 130 },
  { field: "country", headerName: "Country", width: 130 },
];

const rows = [
  { id: 1, name: "John", city: "New York", country: "USA" },
  { id: 2, name: "Jack", city: "London", country: "UK" },
  { id: 3, name: "Joe", city: "Paris", country: "France" },
];

const ShowAirports = () => {
  const [airports, setAirports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAirports = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://api.openaq.org/v1/locations?country=US&limit=10"
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
    <Container class="container" maxWidth="xs" variant="outlined" elevation={3}>
      {/* <h2>Airports</h2>
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Country</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {airports.map((airport) => (
            <tr key={airport.id}>
              <td>{airport.city}</td>
              <td>{airport.country}</td>
              <td>{airport.count}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      {/* convert to mui */}
      <Typography variant="h4" component="h2">
        Airports
      </Typography>
      <Box style={{ height: 400 }} maxWidth={"xs"}>
        <DataGrid
          sx={{ width: "100%" }}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          // checkboxSelection
        />
      </Box>
    </Container>
  );
};

export default ShowAirports;
