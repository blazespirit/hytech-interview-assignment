import { ApiResponse, ExchangeRateRow } from "../pages/api/get-exchange-rates";

export const exchangeRateTransform = (
  apiResponse: ApiResponse
): ExchangeRateRow[] => {
  let exchangeRates = [];

  // transform response from coingecko api into array type
  for (const [key, rate] of Object.entries(apiResponse.rates)) {
    exchangeRates.push({
      id: key,
      name: rate.name,
      type: rate.type,
      unit: rate.unit,
      value: rate.value,
    });
  }

  return exchangeRates;
};
