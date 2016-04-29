/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Alert,
  Component,
  Image,
  ListView,
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
    /*
    // NOTICE: getMockUsers gives data in a different format from getArtistsForCurrentYear
    api.getMockUsers()
      .then((artists) => {
        this.setState({artists: artists})
      })
    */
  }
  render() {
    return (
      <View style={styles.page}>
        <Button style={styles.button} onPress={() => this.switchLanguage('en', 2015)}>English</Button>
        <Button style={styles.button} onPress={() => this.switchLanguage('fi', 2015)}>Finnish</Button>
        <Button style={styles.button} onPress={() => this.switchLanguage('sv', 2015)}>Swedish</Button>
        <ArtistList artists={this.state.artists}/>
      </View>
    );
  }

/* 
// static list without ListView
  {this.state.artists.map(function(artist, i){
    return (
        <ArtistListItem key={i} artist={artist}/>
    );
  })}
*/


  switchLanguage(language, year) {
    api.getArtistsForCurrentYear(language, year)
        .then((artists) => {
          this.setState({artists: artists.data.results.bindings})
        })
  }
}

class ArtistList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {dataSource: ds};
  }
  componentWillReceiveProps(nextProps) {
    // Alert.alert('and the resoponse is:', nextProps.artists)
    this.setState({
      dataSource: this.getDataSource(nextProps.artists)
    })
  }
  getDataSource(artists) {
    return this.state.dataSource.cloneWithRows(artists);
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <ArtistListItem artist={rowData}/>}
      />
    );
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
