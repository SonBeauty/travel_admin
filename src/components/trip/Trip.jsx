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
      const response = await await axios.get(
        "http://localhost:1337/api/trips?populate=*"
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

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "attributes.name",
      headerName: "name",
      width: 150,
      valueGetter: (params) => params.row.attributes.name,
    },
    {
      field: "attributes.time",
      headerName: "time",
      width: 150,
      valueGetter: (params) => params.row.attributes.time,
    },
    {
      field: "attributes.traverlers",
      headerName: "traveler",
      align: "center",
      width: 100,
      headerAlign: "center",
      valueGetter: (params) => params.row.attributes.traverlers,
    },
    {
      field: "attributes.img",
      headerName: "Banner",
      width: 150,
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <div>
            {params.row.attributes.image.data.map((img) => (
              <img
                key={img.attributes.url}
                src={img.attributes.url}
                alt="Banner"
              />
            ))}
          </div>
        );
      },
    },
    {
      field: "attributes.Date",
      headerName: "Date",
      width: 150,
      valueGetter: (params) => params.row.attributes.Date,
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
