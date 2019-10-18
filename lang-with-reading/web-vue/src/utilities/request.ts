import axios, { AxiosInstance } from "axios";

class Request {
  private instance: AxiosInstance;
  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL: baseURL,
      timeout: 1000
    });
  }
  public get = (url: string, config: object = {}) => {
    return this.instance.get(url, config).then((response): any => {
      return response.data;
    });
  };
  public post = (url: string, body: object, config: object = {}) => {
    console.log("url: ", url);
    return this.instance.post(url, body, config).then(response => {
      return response;
    });
  };
  public put = (url: string, body: object, config: object = {}) => {
    return this.instance.put(url);
  };
  public delete = (url: string, config: object = {}) => {
    return this.instance.get(url, config);
  };
}

export default Request;
export { Request };
