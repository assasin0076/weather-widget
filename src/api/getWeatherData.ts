import api from "@/api/api";

export default () => {
  return api.get("/current");
};
