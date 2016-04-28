import axios from 'axios';
import config from '../../conf/config';

const api = axios.create({
  baseURL: config.apiUrl
});

export default {
  getArtistsForCurrentYear() {
    return api.get(
      '/sparql?query=SELECT%20%3Fhuman%20%3FhumanLabel%20%3Fpicture%20WHERE%20%7B%20%3Fhuman%20wdt%3AP31%20wd%3AQ5%3B%20wdt%3AP1344%20wd%3AQ6015709%20.%20%3Fhuman%20wdt%3AP18%20%3Fpicture%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22en%22%20%7D%20%7D&format=json'
    );
  }
}

