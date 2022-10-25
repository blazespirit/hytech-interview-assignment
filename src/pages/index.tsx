import type { NextPage } from "next";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { Stack, SxProps } from "@mui/system";
import { AppHeader } from "../components/app-header";
import { Box } from "@mui/material";
import { ExchangeRateRow } from "./api/get-exchange-rates";

const ExchangeRate: NextPage = () => {
  const rows: GridRowsProp<ExchangeRateRow> = [
    {
      id: "aed",
      name: "United Arab Emirates Dirham",
      type: "fiat",
      unit: "DH",
      value: 71938.989,
    },
    {
      id: "btc",
      name: "Bitcoin",
      type: "crypto",
      unit: "BTC",
      value: 1,
    },
    {
      id: "cad",
      name: "Canadian Dollar",
      type: "fiat",
      unit: "CA$",
      value: 26657.831,
    },
  ];

  const columns: GridColDef<ExchangeRateRow>[] = [
    {
      field: "name",
      headerName: "Name",
      headerAlign: "left",
      align: "left",
      width: 150,
      flex: 2,
      headerClassName: "grey-header",
    },
    {
      field: "type",
      headerName: "Type",
      headerAlign: "left",
      align: "left",
      minWidth: 60,
      flex: 1,
      headerClassName: "grey-header",
    },
    {
      field: "unit",
      headerName: "Unit",
      headerAlign: "left",
      align: "left",
      minWidth: 60,
      flex: 1,
      headerClassName: "grey-header",
    },
    {
      field: "value",
      headerName: "Value",
      headerAlign: "right",
      align: "right",
      width: 150,
      flex: 2,
      headerClassName: "grey-header",
    },
  ];

  return (
    <Stack sx={containerStyle}>
      <AppHeader title="Rates" />
      <Box sx={tableContainerStyle}>
        <DataGrid rows={rows} columns={columns} autoPageSize />
      </Box>
    </Stack>
  );
};

const containerStyle: SxProps = {
  height: "100vh",
};

const tableContainerStyle: SxProps = {
  height: 300,
  width: "100%",
  flexGrow: 1,
  padding: "20px",
  "& .grey-header": {
    backgroundColor: "rgb(238, 238, 238)",
  },
};

export default ExchangeRate;
