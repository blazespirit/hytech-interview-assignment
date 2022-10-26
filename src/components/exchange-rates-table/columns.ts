import { GridColDef } from "@mui/x-data-grid";

import { ExchangeRateRow } from "../../pages/api/get-exchange-rates";

export const columns: GridColDef<ExchangeRateRow>[] = [
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
