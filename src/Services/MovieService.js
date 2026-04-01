import axios from "axios";

const API_URL = "http://www.omdbapi.com/";
const API_KEY = "41ed4b0";

export const searchMovies = async (query) => {

  const response = await axios.get(API_URL, {

    params: {
      apikey: API_KEY,
      s: query
    }

  });

  return response.data;

};