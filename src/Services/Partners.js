import getApi from './index';

export default async function getAllPartners() {
  const promise = new Promise(async (resolve, reject) => {
    try {
      const api = await getApi();
      const response = await api.get(`/partners/`);
      const {data} = response;
      resolve(data);
    } catch (error) {
      reject(new Error(error));
    }
  });

  return await promise;
}