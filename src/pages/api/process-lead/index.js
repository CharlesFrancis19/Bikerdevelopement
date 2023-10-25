import axios from "axios";

export default async function handler(req, res) {
  const data = req?.body;
  const cookies = req.headers?.cookie;
  console.log('cookies', cookies);
  try {
    const response = await axios({
      url: `${process.env.PROCESS_LEAD}`,
      method: "POST",
      headers: {
        xapikey: process.env.PROCESS_LEAD_XAPI_KEY,
      },
      data,
    });
    console.log(response, "Success From Process Lead API");
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error, "Error From Process Lead API");
    res.status(400).json(error);
  }
}
