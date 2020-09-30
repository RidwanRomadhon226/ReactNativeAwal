import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import Comunication from './pages/Comunication';
import FlexBox from './pages/FlexBox';
import PositionReactNative from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';

const App = () => {
  const [isShow, setIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShow(false);
    }, 6000);
  });
  return (
    <View>
      <ScrollView>
        {/* <StylingComponent /> */}
        {/* <SampleComponent /> */}
        {/* <FlexBox /> */}
        {/* <PropsDinamis /> */}
        <Comunication />
        {/* <PositionReactNative /> */}
      </ScrollView>
    </View>
  );
};

export default App;
