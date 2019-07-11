import axios from "axios";

export const FETCH_TASTES = "fetch_tastes";
export const FETCH_ARTICLES = 'fetch_articles';


const ROOT_URL = "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?";
const API_KEY = "340143-StudentP-O5ANG3FK";
const tasteDiveQueryLimit = 10;
const searchType = 'music';
//const searchFor = 'bjork';

//const WIKI_URL_alt = "https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&list=search&srsearch=";
const WIKI_URL = "https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&formatversion=2&prop=pageimages&piprop=original&titles="
// &pilicense=any, &piprop=original, &prop=pageimages|pageterms, &piprop=thumbnail, &formatversion=2

export function fetchTastes(searchFor) {
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

export function fetchArticles(term) {
 const url = `${WIKI_URL}${term}`;
 const request = axios.get(url);

 return {
   type: FETCH_ARTICLES,
   payload: request
 };
}
