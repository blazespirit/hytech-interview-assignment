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
    { field: "col1", headerName: "Column 1", width: 150, flex: 1 },
    { field: "col2", headerName: "Column 2", width: 150, flex: 1 },
  ];

  return (
    <Stack sx={containerStyle}>
      <AppHeader title="Rates" />
      <Box sx={tableContainerStyle}>
        <DataGrid rows={rows} columns={columns} />
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
};

export default ExchangeRate;
