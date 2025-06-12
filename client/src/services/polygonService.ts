import axios from 'axios';
import type { Polygon } from '../common/interfaces';
import { BASE_URL } from '../common/constants';

export const fetchPolygons = async (): Promise<Polygon[]> => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const createPolygon = async (polygon: Polygon) => {
    //console.log("Creating polygon:", polygon);
    const { id, ...polygonWithoutId } = polygon;
    await axios.post(BASE_URL, polygonWithoutId);
};

export const deletePolygon = async (id: number) => {
  await axios.delete(`${BASE_URL}/${id}`);
};