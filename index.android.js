import React, {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  Alert,
  TouchableHighlight,
  AppRegistry,
  View,
  ListView,
} from 'react-native';

class eventapp extends React.Component {
  constructor(props){
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      selectedLanguage: "English",
      languages: ds.cloneWithRows([
          {key: 'English'},
          {key: 'Suomi'},
          {key: 'svenska'},
          {key: 'norjaksi'},
          {key: 'islanti'},
          {key: 'tanskaksi'}
        ])
    };
  }

  selectLanguage(lang) {
    this.setState({selectedLanguage: lang});
  }

  _renderRow(data, sectionID, rowID) {
    const style = (data.key == this.state.selectedLanguage) ? { color: '#00B4C8'} : {};

    return (
        <TouchableHighlight onPress={() => this.selectLanguage(data.key)}>
        <Text style={style}>{data.key}</Text>
        </TouchableHighlight>
        );
  }
  _renderHeader() {
    return (<Text style={styles.header}>CHOOSE{"\n"}LANGUAGE</Text>);
  }
  render() {
    return(
        <View
        visibility={() => this.state.selectedLanguage == "English"}
        style={styles.container}>
        <Text>Debug selected language:{this.state.selectedLanguage}</Text>
        <View style={{flex:0.2}}></View>
        <ListView
        style={styles.listViewContainer}
        dataSource={this.state.languages}
        renderRow={this._renderRow.bind(this)}
        renderHeader={this._renderHeader.bind(this)}
        initialListSize={5}/>
        </View>
        )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 40,
    textAlign: 'left',
    flex: 0.8
  },
  buttonContainer: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
});

AppRegistry.registerComponent('eventapp', () => eventapp);
