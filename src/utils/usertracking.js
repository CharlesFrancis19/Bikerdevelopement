import axios from "axios";

export const userTracking = async (payload = {}, ticket = {}) => {
  const cookie = document.cookie;
  const referrer = document.referrer;
  const userAgent = navigator.userAgent || "";
  const localreferrer = document.localreferrer || "";

  const { id } = ticket;
  const { email, mobileNumber, city, language, url, serviceId } = payload;

  const userTrackData = {
    cookie,
    referrer,
    url,
    localreferrer,
    userAgent,
    ticketId: id,
    flag: "cart",
    email,
    mobile: mobileNumber,
    city: city || "Other Cities",
    language: language?.value || language || 'English',
    serviceId: serviceId?.toString(),
    channel: "service-form-primary",
  };

  await axios.post(`${process.env.basePath}/api/user-track`, userTrackData)
    .then((response) => console.log("UTS result", response?.data))
    .catch((error) => console.log("UTS error", error?.response?.data));
};
