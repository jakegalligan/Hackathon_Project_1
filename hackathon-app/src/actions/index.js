import axios from "axios";

export const FETCH_TASTES = "fetch_tastes";

const ROOT_URL = "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?"; 
const API_KEY = "340143-StudentP-O5ANG3FK";
const tasteDiveQueryLimit = 10;
const searchType = 'music';
const searchFor = 'bjork';

export function fetchTastes() {
  const request = axios.get(`${ROOT_URL}`, {
    params: {
      type: searchType,
      k: API_KEY,
      q: searchFor,
      limit: tasteDiveQueryLimit,
      info: 1
    }
  });

  return {
    type: FETCH_TASTES,
    payload: request
  };
}
