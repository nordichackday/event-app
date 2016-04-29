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
    api.getArtistsForCurrentYear('en', 2015)
        .then((artists) => {
          this.setState({artists: artists.data.results.bindings})
        })
  }
  render() {
    return (
      <View style={styles.page}>
        <Button onPress={this.switchLanguage('en', 2015)}>English</Button>
        <Button onPress={this.switchLanguage('fi', 2015)}>Finnish</Button>

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
});

AppRegistry.registerComponent('eventapp', () => eventapp);
