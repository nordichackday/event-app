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

import api from './common/util/api.js'

class eventapp extends Component {
  constructor(props) {
    super(props)
    this.state = { artists: [] }
  }
  componentWillMount() {
    api.getArtistsForCurrentYear()
        .then((artists) => {
          this.setState({artists: artists.data.results.bindings})
        })
  }
  render() {
    return (
      <View style={styles.page}>
        {this.state.artists.map(function(artist, i){
          return (
              <View key={i} style={styles.container}>
                <Image
                    source={{uri: "http://www.sheffield.com/wp-content/uploads/2013/06/placeholder.png"}}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                  <Text style={styles.artistName}>{artist.humanLabel.value}</Text>
                  <Text style={styles.artistCountry}>{artist.country}</Text>
                </View>
              </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    marginTop: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginBottom: 5,
  },
  rightContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 81,
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
