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
              <ArtistListItem key={i} artist={artist}/>
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
});

AppRegistry.registerComponent('eventapp', () => eventapp);
