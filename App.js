/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLink:
        'https://oneappcdnedgeserverendpoint.azureedge.net/djoicons/tick.png',
      imageLink1:
        'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    };
    FastImage.preload([
      {
        uri: 'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
    ]);
  }
  componentDidMount() {
    // this.setState({
    //   imageLink:
    //     'https://oneappcdnedgeserverendpoint.azureedge.net/djoicons/tick.png',
    // });
  }
  render() {
    return (
      <React.Fragment>
        <FastImage
          style={{width: 700, height: 700}}
          source={{
            uri: this.state.imageLink1,
            cache: FastImage.cacheControl.web,
          }}
        />
        <FastImage
          style={{width: 700, height: 700}}
          source={{
            uri: this.state.imageLink1,
            cache: FastImage.cacheControl.cacheOnly,
          }}
        />
      </React.Fragment>
    );
  }
}
export default App;
