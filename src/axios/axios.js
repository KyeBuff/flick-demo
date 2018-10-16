import axios from "axios";

export const baseURL = 'http://flick.test/api/';

export default axios.create({
    baseURL: baseURL,
    headers: { "Accept": "application/json" },
});