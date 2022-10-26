import axios from "axios";

export const getExchangeRates = () => {
  return axios.get("/api/get-exchange-rates");
};
