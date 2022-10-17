
// enum StatusCode {
//   Unauthorized = 401,
//   Forbidden = 403,
//   TooManyRequests = 429,
//   InternalServerError = 500,
// }
export const fetchWrapper = {
  get: request('GET'),
  post: request('POST'),
  put: request('PUT'),
  delete: request('DELETE')
};
function request(method:string) {
  return (url: string, params: any, data: Object) => {
    const apiPath = 'http://localhost:3000/api';
    const options = {
      method: method,
      url: url,
      baseURL: apiPath,
      headers: authHeader(),
      params: params,
      data: data
    };
    // return fetch(url, requestOptions).then(handleResponse);
    return axios.request(options);
  };
}


// const headers: Readonly<Record<string, string | boolean>> = {
//   Accept: 'application/json',
//   'Content-Type': 'application/json; charset=utf-8',
//   'Access-Control-Allow-Credentials': true,
//   'X-Requested-With': 'XMLHttpRequest',
// };

function authHeader() {
  // return auth header with jwt if user is logged in and request is to the api url
  const token  = useUserAuthenticatedStore().get_token();
  // const isLoggedIn = !!user?.token;
  // const isApiUrl = url.startsWith(import.meta.env.VITE_API_URL);
  if (token) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
}
// function handleResponse(response) {
//   return response.text().then(text => {
//     const data = text && JSON.parse(text);

//     if (!response.ok) {
//       const { user, logout } = useUserAuthenticatedStore();
//       if ([401, 403].includes(response.status) && user) {
//         // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
//         logout();
//       }

//       const error = (data && data.message) || response.statusText;
//       return Promise.reject(error);
//     }

//     return data;
//   });
// }


// const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
//   try {
//     const token = localStorage.getItem('accessToken');

//     if (token != null) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// class HttpWrapper {
//   private instance: AxiosInstance | null = null;

//   private get HttpWrapper(): AxiosInstance {
//     return this.instance != null ? this.instance : this.initHttpWrapper();
//   }

//   initHttpWrapper() {
//     const HttpWrapper = axios.create({
//       baseURL: 'http://localhost:3000/api/',
//       headers,
//       withCredentials: true,
//     });

//     HttpWrapper.interceptors.request.use(injectToken, (error) => Promise.reject(error));

//     HttpWrapper.interceptors.response.use(
//       (response) => response,
//       (error) => {
//         const { response } = error;
//         return this.handleError(response);
//       }
//     );

//     this.instance = HttpWrapper;
//     return HttpWrapper;
//   }

//   request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
//     return this.HttpWrapper.request(config);
//   }

//   get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
//     return this.HttpWrapper.get<T, R>(url, config);
//   }

//   post<T = any, R = AxiosResponse<T>>(
//     url: string,
//     data?: T,
//     config?: AxiosRequestConfig
//   ): Promise<R> {
//     return this.HttpWrapper.post<T, R>(url, data, config);
//   }

//   put<T = any, R = AxiosResponse<T>>(
//     url: string,
//     data?: T,
//     config?: AxiosRequestConfig
//   ): Promise<R> {
//     return this.HttpWrapper.put<T, R>(url, data, config);
//   }

//   delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
//     return this.HttpWrapper.delete<T, R>(url, config);
//   }

//   // Handle global app errors
//   // We can handle generic app errors depending on the status code
//   private handleError(error) {
//     const { status } = error;

//     switch (status) {
//       case StatusCode.InternalServerError: {
//         // Handle InternalServerError
//         break;
//       }
//       case StatusCode.Forbidden: {
//         // Handle Forbidden
//         break;
//       }
//       case StatusCode.Unauthorized: {
//         // Handle Unauthorized
//         break;
//       }
//       case StatusCode.TooManyRequests: {
//         // Handle TooManyRequests
//         break;
//       }
//     }

//     return Promise.reject(error);
//   }
// }
// export const http = new HttpWrapper();
