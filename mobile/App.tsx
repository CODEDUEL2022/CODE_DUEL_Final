/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <WebView source={{uri: 'https://code-duel.onrender.com/'}}/>
    </View>
  );
};

export default App;
