import axios from "axios";

const axios_instance = axios.create({
  baseURL: `https://newsapi.org/v2/top-headlines`,
  params: {
    apikey: "a8684d4696a04a038c1caeea926eb4f2",
    country: "kr"
  }
});
/***************************
 * interceptors
 * 요청, 응답 관련 파라미터 체크(5.19)
 ***************************/
// axios_instance.interceptors.request.use(
//   config => {
//     console.log(config);
//     return config;
//   },
//   error => console.log(error)
// );

// axios_instance.interceptors.response.use(
//   config => {
//     console.log(config);
//     return config;
//   },
//   error => console.log(error)
// );

export const requestData = {
  headline: (page, pageSize, query, category) => {
    const data = {
      page: page,
      pageSize: pageSize
    };
    if (category !== "all") {
      data["category"] = category;
    }
    if (query !== null) {
      data["q"] = query;
    }

    return axios_instance.get("", { params: data });
  }
};
