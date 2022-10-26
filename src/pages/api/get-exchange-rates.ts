import axios from "axios";

import type { NextApiRequest, NextApiResponse } from "next";
import assert from "assert";
import { exchangeRateTransform } from "../../api-utils/data-transform";

export type Data = {
  rates: ExchangeRateRow[];
};

export type ExchangeRateRow = {
  id: string;
  name: string;
  type: string;
  unit: string;
  value: number;
};

// response type from coingecko api
export type ApiResponse = {
  rates: Record<
    string,
    {
      name: string;
      type: string;
      unit: string;
      value: number;
    }
  >;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    assert(
      process.env.RATES_API_URL,
      'The "RATES_API_URL" environment variable is missing'
    );

    axios
      .get<ApiResponse>(process.env.RATES_API_URL)
      .then((response) => {
        const transformedExchangeRate = exchangeRateTransform(response.data);

        res.status(200).json({ rates: transformedExchangeRate });
      })
      .catch((err) => {
        if (err.response) {
          res.status(err.response.status).json(err.response.data);
        } else {
          res.status(500).json(err.toJSON());
        }
      });
  } catch (err) {
    res.status(500);
    // log error to reporting tools like LogRocket
  }
}
