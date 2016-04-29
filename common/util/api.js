import axios from 'axios';
import config from '../../conf/config';

import React, {Alert} from 'react-native';

const api = axios.create({
  baseURL: config.apiUrl
});

export default {
  getArtists(language = "en", year = 2016) {

    let yearQuery = 'Q6015709';

    if (year == 2015) {
      yearQuery = 'Q15215081';
    }

    return api.get(
        '/sparql?query=SELECT%20%3FhumanLabel%20%3FpictureLabel%20%3FcountryLabel%20%3Ftwitter%20%3FflagImageLabel%0AWHERE%0A%7B%0A%20%20%20%20%3Fhuman%20wdt%3AP31%20wd%3AQ5%20.%20%0A%20%20%20%20%20%3Fhuman%20wdt%3AP1344%20wd%3A' + yearQuery + '%20.%0A%20%20%20%20%3Fhuman%20wdt%3AP18%20%3Fpicture%20.%0A%20%20%20%3Fhuman%20wdt%3AP27%20%3Fcountry%20.%0A%20%20%20OPTIONAL%20%7B%3Fhuman%20wdt%3AP2002%20%3Ftwitter%7D%20.%0A%20%20%20%3Fcountry%20wdt%3AP163%20%3Fflag%20.%20%0A%20%20%20%3Fflag%20wdt%3AP18%20%3FflagImage%0A%20%20%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22' + language + '%22%20%7D%0A%7D&format=json'
    ).then(data => { 
      Alert.alert('api täällä', JSON.stringify(data,null,2))
      const res = data.results.bindings.map(human => ({
        name: human.humanLabel.value,
        pictureUrl: human.pictureLabel.value,
        country: human.countryLabel.value,
        flagUrl: human.flagImageLabel.value,
        twitter: human.twitter
      }));
      return res
    });
  },

  getMockUsers(ms) {
    return delay(ms).then(()=>[{humanLabel:{value:"Dave (from mock data)"}, country:"UK"}]);
  }
}

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  })
}