import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";

class HttpClient {
  private baseUrl: string;
  private axiosInstance: AxiosInstance;

  constructor(baseUrl: string, config: AxiosRequestConfig) {
    const parsedUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
    this.baseUrl = parsedUrl;
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
      ...config,
    });
  }

  get instance(): AxiosInstance {
    return this.axiosInstance;
  }

  async get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.get<T>(endpoint, config);
    return response.data;
  }
}

const httpClient = new HttpClient("https://jsonplaceholder.typicode.com/", {
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpClient;
