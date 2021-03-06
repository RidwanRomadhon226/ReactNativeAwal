import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import BasicJavaScript from './pages/BasicJavaScript';
import CallApiAxios from './pages/CallApiAxios';
import CallApiValinlaJs from './pages/CallApiValinlaJs';
import Comunication from './pages/Comunication';
import FlexBox from './pages/FlexBox';
import PositionReactNative from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import ReactNatveSvg from './pages/ReactNatveSvg';
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
        {/* <Comunication /> */}
        {/* <PositionReactNative /> */}
        {/* <BasicJavaScript /> */}
        {/* <ReactNatveSvg /> */}
        {/* <CallApiValinlaJs /> */}
        <CallApiAxios />
      </ScrollView>
    </View>
  );
};

export default App;
