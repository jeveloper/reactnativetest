/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';



class drivetimereact extends Component {
   MOCKED_MOVIES_DATA = [
  {title: 'Cool', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}}
];

  locateme() {
    // 

  }


  render() {
    

    var movie = this.MOCKED_MOVIES_DATA[0];
    
    return (
      <View style={styles.container}>

       <MapView style={styles.map} initialRegion={{latitude: 37.78825,longitude: -122.4324,latitudeDelta: 0.0922,longitudeDelta: 0.0421}}/>
          <Text>{movie.title}</Text>
 

      </View>
    );

     // <View style={styles.container}>
        
     //    <Text>{movie.title}</Text>
     //    <Text>{movie.year}</Text>
     //    <Image style={styles.thumbnail} source={{uri: movie.posters.thumbnail}} ></Image>
     
     //  </View>

    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.welcome}>
    //       Welcome to React Native Serge!
    //     </Text>
    //     <Text style={styles.instructions}>
    //       To get started, edit index.ios.js
    //     </Text>
    //     <Text style={styles.instructions}>
    //       Press Cmd+R to reload,{'\n'}
    //       Cmd+D or shake for dev menu
    //     </Text>
    //   </View>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  thumbnail: {
    width: 53,
    height: 81,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

AppRegistry.registerComponent('drivetimereact', () => drivetimereact);
