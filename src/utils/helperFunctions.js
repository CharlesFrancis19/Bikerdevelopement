import axios from "axios";

export const readCookie = function (name) {
  var nameEQ = name + "=";
  var ca = typeof window == "object" ? document.cookie.split(";") : "";
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export const setCookie = function (cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

export const getCityDetails = (placeId, setSelectedOption, setSelectedPlace, description) => {
  let updateCity, updateState, updateCountry;
  if (description) {
    [updateCity, updateState, updateCountry] = description.split(", ");
  }
  axios({
    url: `${process.env.basePath}/api/getCityDetails`,
    method: "POST",
    data: { placeId },
  })
    .then((res) => {
      if (res.data?.status) {
        console.log("API Response ", res.data?.apiStatus);
        const cityIndex = res?.data?.results?.[0]?.address_components?.filter(
          (item) => item?.types?.includes("locality")
        );
        const cityIndex1 = res?.data?.results?.[0]?.address_components?.filter(
          (item) => item?.types?.includes("administrative_area_level_4")
        );
        const stateIndex = res?.data?.results?.[0]?.address_components?.filter(
          (item) => item?.types?.includes("administrative_area_level_1")
        );
        const countryIndex =
          res?.data?.results?.[0]?.address_components?.filter((item) =>
            item?.types?.includes("country")
          );
        const city =
          cityIndex?.[0]?.long_name || cityIndex1?.[0]?.long_name || updateCity;
        const state = stateIndex?.[0]?.long_name || updateState;
        const country = countryIndex?.[0]?.long_name || updateCountry;
        setSelectedPlace(`${city}, ${state}, ${country}`);
        setSelectedOption({ label: `${city}, ${state}`, value: placeId });
      }
    })
    .catch((fail) => {
      console.error("failed: ", fail);
    });
};
