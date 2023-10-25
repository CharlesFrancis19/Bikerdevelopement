import axios from 'axios';

export default async function handler(req, res) {
  const { placeId } = req.body;
  const url = `${process.env.GEO_CODE_API}?key=${process.env.GOOGLE_PLACES_GEOCODING_API}&place_id=${placeId}`;
  const method = req.method;
  await axios({
    url,
    method,
    placeId,
  })
    .then((response) => {
      console.log(response,"response-in-getCityDetails");
      res.status(200).json(response?.data);
    })
    .catch((err) => {
      console.log(err,"error-in-getCityDetails");
      res.status(400).json({ err });
    });
}