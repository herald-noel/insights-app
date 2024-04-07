import axios from "axios";

const BASE_URL = API_BASE_URL;

const JWT_TOKEN = localStorage.getItem('token');

const headers = {
  Authorization: "bearer " + JWT_TOKEN,
};

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: headers
})

export const useFetchDataFromApi = async (endpoint: string, method: string, params?: any) => {
  try {
    const { data } = await axiosInstance({
      url: endpoint,
      method: method,
      params: params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};