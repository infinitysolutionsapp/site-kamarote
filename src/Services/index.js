import axios from 'axios';

export const URL_BASE = 'https://kamarote-api.infinitysolutionsapp.com';

export const URL_APP = ' https://kamarote-api.infinitysolutionsapp.com';

export default async function api(others_headers) {
  const headers = {
    'Content-Type': 'application/json',
    ...others_headers,
  };

  const instance = axios.create({
    baseURL: URL_BASE,
    timeout: 30000,
    headers,
  });

  instance.interceptors.response.use(function (response) {
    return response;
  }, async function (error) {
    if (error.response.status === 401) {

    }

    if (error.response.status === 404) {
      throw {
        data: {
          server: 'Serviço ainda não disponível! CODE: 404',
        },
      };
    }

    if (error.response.status === 500) {
      throw {
        data: {
          server: 'O servidor está apresentando falhas! CODE: 500',
        },
      };
    }

    return await Promise.reject(error.response);
  });

  return instance;
}
