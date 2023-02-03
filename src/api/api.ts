import axios from "axios";

const appid = "36960ffad60ecc4194b6bdecf22e2485";

export default axios.create({
  baseURL: "https://api.openweathermap.org",
  timeout: 15000,
  params: { appid },
});
