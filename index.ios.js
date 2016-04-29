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
import ArtistListItem from './common/components/ArtistListItem'
import Button from 'react-native-button';

class eventapp extends Component {
  constructor(props) {
    super(props)
    this.state = { artists: [] }
  }
  componentWillMount() {
    api.getArtistsForCurrentYear('fi', 2015)
        .then((artists) => {
          this.setState({artists: artists.data.results.bindings})
        })
  }
  render() {
    return (
      <View style={styles.page}>
        <Button style={styles.button} onPress={() => this.switchLanguage('en', 2015)}>In English</Button>
        <Button style={styles.button} onPress={() => this.switchLanguage('fi', 2015)}>Suomeksi</Button>
        <Button style={styles.button} onPress={() => this.switchLanguage('sv', 2015)}>På Svenska</Button>

        {this.state.artists.map(function(artist, i){
          return (
              <ArtistListItem key={i} artist={artist}/>
          );
        })}
      </View>
    );
  }
  switchLanguage(language, year) {
    api.getArtistsForCurrentYear(language, year)
        .then((artists) => {
          this.setState({artists: artists.data.results.bindings})
        })
  }
}

const styles = StyleSheet.create({
  page: {
    marginTop: 20,
  },
  button: {
    borderWidth: 1,
    width: 200,
    alignSelf: 'center',
    marginBottom: 10,
    color: 'black',
    backgroundColor: 'lightgray',
  }
});

AppRegistry.registerComponent('eventapp', () => eventapp);
