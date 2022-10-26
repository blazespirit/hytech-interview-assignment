// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

import type { NextApiRequest, NextApiResponse } from "next";
import assert from "assert";

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
      .get(process.env.RATES_API_URL)
      .then((response) => {
        console.log("api res", response);
        res.status(200).json({ rates: [] });
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

// TODO -- add <Flavor> typing
