import type { NextPage } from "next";
import { Stack, SxProps } from "@mui/system";
import { AppHeader } from "../components/app-header";
import { Box } from "@mui/material";
import { ExchangeRatesTable } from "../components/exchange-rates-table";

const ExchangeRate: NextPage = () => {
  return (
    <Stack sx={containerStyle}>
      <AppHeader title="Rates" />
      <ExchangeRatesTable />
    </Stack>
  );
};

const containerStyle: SxProps = {
  height: "100vh",
};

export default ExchangeRate;
