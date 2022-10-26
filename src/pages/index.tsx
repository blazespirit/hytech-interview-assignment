import type { NextPage } from "next";
import { Stack, SxProps } from "@mui/system";
import { AppHeader } from "../components/app-header";
import { ExchangeRatesTable } from "../components/exchange-rates-table";
import { Box } from "@mui/material";

const ExchangeRate: NextPage = () => {
  return (
    <Stack sx={containerStyle}>
      <AppHeader title="Rates" />
      <Box sx={tableContainerStyle}>
        <ExchangeRatesTable />
      </Box>
    </Stack>
  );
};

const containerStyle: SxProps = {
  height: "100vh",
  alignItems: "center",
};

const tableContainerStyle: SxProps = {
  width: "100%",
  maxWidth: "700px",
  flexGrow: 1,
};

export default ExchangeRate;
