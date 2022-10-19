import Graph from "react-graph-vis";

// import "./network.css" ;

const AirportVis = () => {
  const graph = {
    nodes: [
      { id: 1, label: "LAS", title: "Las Vegas" },
      { id: 2, label: "LAX", title: "Los Angeles" },
      { id: 3, label: "SFO", title: "San Francisco" },
      { id: 4, label: "JFK", title: "New York" },
      { id: 5, label: "MIA", title: "Miami" },
      { id: 6, label: "ORD", title: "Chicago" },
      { id: 7, label: "SEA", title: "Seattle" },
      { id: 8, label: "DEN", title: "Denver" },
      { id: 9, label: "DFW", title: "Dallas" },
      { id: 10, label: "PHX", title: "Phoenix" },
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
      { from: 2, to: 6 },
      { from: 2, to: 7 },
      { from: 3, to: 8 },
      { from: 3, to: 9 },
      { from: 3, to: 10 },
      { from: 4, to: 5 },
      { from: 4, to: 6 },
      { from: 4, to: 7 },
      { from: 5, to: 6 },
      { from: 6, to: 7 },
      { from: 6, to: 10 },
    ],
  };

  const options = {
    layout: {
      hierarchical: false,
    },
    edges: {
      color: "blue",
    },
    height: "500px",
  };

  const events = {
    select: function (event) {
      var { nodes, edges } = event;
      console.log(nodes[0]);
    },
  };
  return <Graph graph={graph} options={options} events={events} />;
};

export default AirportVis;
