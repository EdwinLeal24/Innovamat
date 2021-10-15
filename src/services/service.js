import { httpManager } from "./api/httpManager";

const TALLERES_URL = "/talleres";
const RINCONES_URL = "/rincones";
const RESOURCE_URL = "/resouasrce";

export const getAllTalleres = async () => {
  try {
    const { data } = await httpManager.get(TALLERES_URL);
    return [null, data];
  } catch (error) {
    return [error, null];
  }
};

export const getAllRincones = async () => {
  try {
    const { data } = await httpManager.get(RINCONES_URL);

    return [null, data];
  } catch (error) {
    return [error, null];
  }
};

export const getResourceById = async (id) => {
  try {
    const { data } = await httpManager.get(`${RESOURCE_URL}/${id}`);

    return [null, data];
  } catch (error) {
    return [error, null];
  }
};
