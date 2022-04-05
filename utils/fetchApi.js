import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "afe29ae31dmshcaf8254fbe9bcafp193f44jsn33de9843fc2a",
    },
  });
  return data;
};
