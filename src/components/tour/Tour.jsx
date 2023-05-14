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
      const response = await axios.get(
        "http://localhost:1337/api/tours?populate=*"
      );
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
      width: 120,
      valueGetter: (params) => params.row.attributes.Duration,
    },
    {
      field: "attributes.banner",
      headerName: "Banner",
      width: 150,
      headerAlign: "center",
      renderCell: (params) => {
        return <img src={params.row.attributes.banner.data.attributes.url} />;
      },
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
  const getRowHeight = () => 100;

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
        getRowHeight={getRowHeight}
      />
    </div>
  );
};

export default Datatable;
