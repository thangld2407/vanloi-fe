import axiosClient from '../axiosClient';
import { API_LEVEL } from '../../constants/level';
export function getLevel(params) {
  return axiosClient.get(API_LEVEL, { params });
}

export function postLevel(data) {
  return axiosClient.post(API_LEVEL, data);
}

export function deleteLevel(id) {
  return axiosClient.delete(`${API_LEVEL}/${id}`);
}

export function updateLevel(params) {
  return axiosClient.put(API_LEVEL, params);
}
