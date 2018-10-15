import axios from "axios";

export const baseURL = 'http://FlickApi2-env.sdqwkshunp.us-east-2.elasticbeanstalk.com/api/';

export default axios.create({
    baseURL: baseURL,
    headers: { "Accept": "application/json" },
});