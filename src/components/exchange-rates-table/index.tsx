import { Box, SxProps } from "@mui/system";
import { DataGrid, GridRowsProp } from "@mui/x-data-grid";
import { useMemo } from "react";
import { useQuery, useQueryClient } from "react-query";

import { getExchangeRates } from "../../api/get-exchange-rates";
import { ExchangeRateRow } from "../../pages/api/get-exchange-rates";
import { columns } from "./columns";

export const ExchangeRatesTable = () => {
  const { isLoading, isError, data, error } = useQuery(
    "exchange-rates",
    getExchangeRates
  );

  const rows = useMemo<GridRowsProp<ExchangeRateRow>>(() => {
    if (!data) return [];

    return data.data.rates;
  }, [data]);

  console.log("isError", isError);

  return (
    <Box sx={tableContainerStyle}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoPageSize
        loading={isLoading}
        error={error}
      />
    </Box>
  );
};

const tableContainerStyle: SxProps = {
  width: "100%",
  height: "100%",
  flexGrow: 1,
  padding: "20px",
  "& .grey-header": {
    backgroundColor: "rgb(238, 238, 238)",
  },
};
