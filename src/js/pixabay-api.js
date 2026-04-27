import axios from "axios";

export function getImagesByQuery(query) {
  const BASE_URL = "https://pixabay.com/api/";
  const API_KEY = "55618250-f9d832cddd8bc0b340f69275b";

  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  };

  return axios.get(BASE_URL, { params }).then((response) => {
    return response.data;
  });
}