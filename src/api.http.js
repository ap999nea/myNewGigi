import axios from "axios";

export const httpCreateCard = ({text, id}) => {
  const url = `http://localhost:8000/app/${id}`;
  return axios.post(url, { text, id });
};

export const httpGetDashboards = () => {
  const url = "http://localhost:8000/app/dashboards";
  return axios.get(url);
};
