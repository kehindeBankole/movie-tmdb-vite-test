import axios, { AxiosRequestConfig } from "axios";

const baseURL = import.meta.env.VITE_API_BASEURL;
const token = import.meta.env.VITE_API_KEY;
axios.defaults.headers.common.Authorization = `Bearer ${token}`;
async function makeApiCall<T = any>(
  url: string,
  method: AxiosRequestConfig["method"] = "get",
  payload?: AxiosRequestConfig["data"],
  axiosRequestConfig?: Omit<AxiosRequestConfig, "url" | "method" | "data">
): Promise<T> {
  try {
    if (!baseURL || typeof baseURL !== "string") {
      throw new Error("VITE_API_BASEURL is not defined");
    }
    const { data } = await axios({
      url,
      method,
      data: payload,
      baseURL,
      ...axiosRequestConfig,
    });
    return data;
  } catch (error: any) {
    // use the server error response if available
    if (error.response) {
      throw new Error("an error occured");
    }
    // throw errors that happen in the browser as is
    throw new Error(error.message);
  }
}

export default makeApiCall;
