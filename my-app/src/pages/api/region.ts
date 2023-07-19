import axios from "axios";
import config from "@/config/config";


const create = async (payload: any) => {
  try {
    const result = await axios.post(`${config.domain}/regions`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};

const upload = async(payload:any) => {
  try {
    const result = await axios.post(`${config.domain}/regions/upload`,payload)
    return result
  } catch (error) {
    return await error
  }
}

const getAllData = async () => {
  try {
    const result = await axios.get(`${config.domain}/regions`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const commonUpdate = async(payload:any) => {
  const id = payload.id;
  try {
      const result = await axios.put(`${config.domain}/regions/${id}`,payload)
      return result
  } catch (error) {
      return await error;
  }
}

const sagaUpdate = async(payload:any) => {
const id=payload.get("id");
try {
  const result = await axios.put(`${config.domain}/regions/${id}`,payload)
  const getDataResult = await axios.get(`${config.domain}/regions/${id}`);
  return getDataResult
} catch (error) {
  return await error;
}
}

const deleted = async (id: any) => {
  try {
    const result = await axios.delete(`${config.domain}/regions/${id}`);
    return result;
  } catch (error) {
    return await error;
  }
};

export default {
  getAllData,
  deleted,
  create,
  sagaUpdate,
  commonUpdate,
  upload,
};