import type { NextApiRequest, NextApiResponse } from "next";

const axios = require("axios");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // const { email, name, number, message } = req.body;

    // Process a POST request
    const url = "https://api.hubapi.com/forms/v2/submissions/submit/26729183";
    // const url =
    //   "https://api.hubapi.com/oauth/v2/private-apps/get/access-token-info";

    const headers = {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUBSPOT_API_KEY}`,
      "Content-Type": "application/json",
    };

    try {
      axios
        .post(url, JSON.stringify(req.body), headers)
        .then((response: any) => response.json())
        .then((data: any) => {
          res.status(200).json({ message: "Data Submitted" });
          console.log(data);
        });
    } catch (err) {
      console.log(err);
    }
  } else {
    res.status(405).json({ message: "Only POST requests allowed" });
  }
}
