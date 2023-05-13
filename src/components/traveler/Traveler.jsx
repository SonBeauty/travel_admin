import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Guide = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await await axios.get(
        "http://localhost:1337/api/travelers?populate[user][populate][0] = avatar"
      );
      setData(response.data.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  console.log(data);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const getRowHeight = () => 140;

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "attributes.name",
      headerName: "name",
      width: 150,
      valueGetter: (params) =>
        params.row.attributes.user.data.attributes.username,
    },
    {
      field: "attributes.avatar",
      headerName: "avatar",
      width: 150,
      height: 250,
      renderCell: (params) => {
        return (
          <img
            src={
              params.row.attributes.user.data.attributes.avatar.data.attributes
                .url
            }
            alt={
              params.row.attributes.user.data.attributes.avatar.data.attributes
                .name
            }
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        );
      },
    },
    {
      field: "attributes.country",
      headerName: "country",
      width: 150,
      valueGetter: (params) =>
        params.row.attributes.user.data.attributes.country,
    },
    {
      field: "attributes.email",
      headerName: "email",
      width: 150,
      valueGetter: (params) => params.row.attributes.user.data.attributes.email,
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
        getRowHeight={getRowHeight}
      />
    </div>
  );
};

export default Guide;
