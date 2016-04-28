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
        <ArtistList artists={this.state.artists}/>
      </View>
    );
  }
}

class ArtistList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {dataSource: ds.cloneWithRows([{humanLabel:{value:"Linda"}, country:"Suomiiii!"}])};
  }
  componentWillReceiveProps(nextProps) {
    Alert.alert('got', nextProps)
    this.setState({
      dataSource: nextProps.artists
    });
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
});

AppRegistry.registerComponent('eventapp', () => eventapp);
