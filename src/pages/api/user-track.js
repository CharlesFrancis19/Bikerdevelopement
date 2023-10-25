import axios from 'axios';

export default async function handler(req, res) {
  const data = req.body;
  console.log('BODYYYY', data);
  axios
    .post(process.env.USER_TRACK_URL, data)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => {
      const response = err.response;
      res.status(response.status).json(response.data);
    });
}
