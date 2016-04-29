import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';



export default class ArtistListItem extends Component {
  render() {

    var twitterText;
    if (this.props.artist.twitter) {
      twitterText = '@' + this.props.artist.twitter;
    } else {
      twitterText = '';
    }

    return(
      <View style={styles.container}>
        <Image
            source={{uri: this.props.artist.pictureLabel.value}}
            style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.artistCountry}>{this.props.artist.country}</Text>
          <Text style={styles.artistName}>{this.props.artist.name}</Text>
          <Text style={styles.artistTwitter}>{twitterText}</Text>
          <Image
              source={{uri: this.props.artist.flagUrl}}
              style={styles.flag}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
  flag: {
    resizeMode: 'contain',
  },
  artistCountry: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 8,
  },
  artistName: {
    textAlign: 'center',
  },
  artistTwitter: {
    textAlign: 'center',
  },
});