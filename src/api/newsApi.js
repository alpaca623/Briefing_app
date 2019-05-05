import axios from "axios";

const axios_instance = type =>
  axios.create({
    baseURL: `https://newsapi.org/v2/${type}`,
    params: {
      apikey: "a8684d4696a04a038c1caeea926eb4f2",
      country: "kr"
    }
  });

export const requestData = {
  headline: (category) =>
    axios_instance("top-headlines").get("", {
      params: {
        category: category
      }
    })
};
