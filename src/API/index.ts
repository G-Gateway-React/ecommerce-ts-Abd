import axios from "axios";
const access_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFib29kaGFuYWZpMTBAZ21haWwuY29tIiwibmFtZSI6IkFiZHVsUmFobWFuIiwiaWF0IjoxNjU4NzQ4MTY1fQ.xMc8yjNQQm-RSCvr9aoSh0EqkKkbw-u9nYCAvd91nBw";
axios
  .get("https://pro-commerce1.herokuapp.com/api/v1/category", {
    headers: {
      Authorization: `${access_token}`,
    },
    params: {
      page: 1,
      perPage: 10,
    },
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.error(error);
  });
