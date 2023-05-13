import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:1337/api/tours");
      setData(response.data.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "attributes.ltinerary",
      headerName: "Itinerary",
      width: 150,
      valueGetter: (params) => params.row.attributes.ltinerary,
    },
    {
      field: "attributes.Duration",
      headerName: "Duration",
      width: 150,
      valueGetter: (params) => params.row.attributes.Duration,
    },
    {
      field: "attributes.departureDate",
      headerName: "Departure Date",
      width: 150,
      valueGetter: (params) => params.row.attributes.departureDate,
    },
    {
      field: "attributes.departurePlace",
      headerName: "Departure Place",
      width: 150,
      valueGetter: (params) => params.row.attributes.departurePlace,
    },
  ];

  return (
    <div className="datatable" style={{ height: "600px" }}>
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
