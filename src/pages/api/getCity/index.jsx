export default async function handler(req, res) {
  const { query, countryCode } = req.body;

  console.log("Hitting APi", query);

  try {
    const response = await fetch(
      `${process.env.GOOGLE_CITY_API}?input=${query}&types=%28cities%29&key=${process.env.GOOGLE_PLACES_GEOCODING_API}&components=country:${countryCode}`,
    );

    const details = await response.json();
    console.log({details})
    const cities = details.predictions.map((result) => ({
      label: result.terms[0]?.value,
      value: result.place_id,
      description: result.description,
      place_id: result.place_id,
      city: result.terms[0]?.value,
    }));
    let apiStatus = details?.status;
    res.status(200).json({ status: true, cities, apiStatus });
    console.log(response,"response-in-getCity");
  } catch (error) {
    console.log(error,"error-in-getCity");
    res.status(400).json({ status: false, cities: [], message: error.message });
  }
}
