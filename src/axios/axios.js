import axios from "axios";

export const baseURL = 'http://flickapi2-env.sdqwkshunp.us-east-2.elasticbeanstalk.com/';

export default axios.create({
    baseURL: baseURL,
    headers: { "Accept": "application/json" },
});