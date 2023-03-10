import axios from "axios";
import { BASE_API,API_KEY_PARAM } from "../config";
export class TVShowAPI {
static async fetchPopulars() {
    const response = await axios.get(`${BASE_API}tv/popular${API_KEY_PARAM}`);
    return response.data.results;
}
static async fetchRecommendations(tvShowId) {
    const response = await axios.get(`${BASE_API}tv/${tvShowId}/recommendations${API_KEY_PARAM}`);
    return response.data.results;
}
static async fetchByTitle(title) {
    const response = await axios.get(`${BASE_API}search/tv${API_KEY_PARAM}&query=${title}`);
    return response.data.results;
}
}