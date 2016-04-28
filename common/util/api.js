import axios from 'axios';
import config from '../../conf/config';

const api = axios.create({
  baseURL: config.apiUrl
});

export default {
  getArtistsForCurrentYear() {
    return api.get(
        '/sparql?query=SELECT%20?human%20?humanLabel%20WHERE%20%7B%20?human%20wdt:P31%20wd:Q5%20;%20wdt:P1344%20wd:Q6015709%20SERVICE%20wikibase:label%20%7B%20bd:serviceParam%20wikibase:language%20%22en%22%20%7D%20%7D&format=json'
    );
  },

  getArtistsForLastYear() {
    return api.get(
      '/sparql?query=SELECT%20?human%20?humanLabel%20WHERE%20%7B%20?human%20wdt:P31%20wd:Q5%20;%20wdt:P1344%20wd:Q15215081%20SERVICE%20wikibase:label%20%7B%20bd:serviceParam%20wikibase:language%20"en"%20%7D%20%7D&format=json'
    );
  }
}

