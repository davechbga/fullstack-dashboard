import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetCustomersQuery } from "state/api";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";

const Customers = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetCustomersQuery();


  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 0.6,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.4,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 0.8,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.5,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})$/, "($1)-$2-$3");
      },
    },
    {
      field: "city",
      headerName: "City",
      flex: 0.4,
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.3,
    },
    {
      field: "occupation",
      headerName: "Occupation",
      flex: 0.5,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.3,
    },
    {
      field: "createdAt",
      headerName: "Created",
      flex: 0.6,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="CUSTOMERS" subtitle="List of Customers" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller" :{
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer" :{
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          }
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Customers;
