/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

var MOCKED_ARTIST_DATA = [
  {name: 'Eirikur Haukson', country: 'Iceland', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Eirikur_Hauksson.jpg'},
  {name: 'Tommi Läntinen', country: 'Finland', image: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Tommi_l%C3%A4ntinen_4.jpg'},
  {name: 'Röyksopp', country: 'Iceland', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Royksopp_in_performance_(Fuji_Rock_Festival,_Naeba,_Niigata,_Japan_-_summer_of_2005).jpg'},
];
var artist = MOCKED_ARTIST_DATA[0];

class eventapp extends Component {
  render() {
    return (
      <View>
        {this.renderMovie(MOCKED_ARTIST_DATA[0])}
        {this.renderMovie(MOCKED_ARTIST_DATA[1])}
        {this.renderMovie(MOCKED_ARTIST_DATA[2])}
      </View>
    );
  }
  renderMovie(artist) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: artist.image}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.artistName}>{artist.name}</Text>
          <Text style={styles.artistCountry}>{artist.country}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  artistName: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  artistCountry: {
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('eventapp', () => eventapp);
