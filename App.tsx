import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import CameraScreen from './src/screens/Camera';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CameraScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
  },
});

export default App;
