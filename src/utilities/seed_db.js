import media from '../static/media.json';
import axios from '../axios/axios';

export default () => {
	media.forEach(m => {
		axios.post('media', m);
	})
}