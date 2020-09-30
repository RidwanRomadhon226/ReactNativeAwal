import React, {Component, useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';

// class FlexBox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('==> Ini Constrictor');
//     this.state = {
//       subcriber: 200,
//     };
//   }

//   componentDidMount() {
//     console.log('==> Ini Component DidMount');
//     setTimeout(() => {
//       this.setState({
//         subcriber: 300,
//       });
//     }, 4000);
//   }

//   componentDidUpdate() {
//     console.log('==> Ini componentDidUpdate');
//   }

//   componentWillUnmount() {
//     console.log('==> Ini componentDidUnmpunt');
//   }

//   render() {
//     console.log('==> Ini Render');
//     return (
//       <View>
//         <View
//           style={{
//             flexDirection: 'row',
//             backgroundColor: '#f2f2f2',
//             alignItems: 'center',
//             justifyContent: 'space-around',
//           }}>
//           <View style={{backgroundColor: 'red', width: 50, height: 50}}></View>
//           <View
//             style={{backgroundColor: 'yellow', width: 50, height: 50}}></View>
//           <View style={{backgroundColor: 'blue', width: 50, height: 50}}></View>
//           <View style={{backgroundColor: 'pink', width: 50, height: 50}}></View>
//         </View>
//         <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//           <Text>Home</Text>
//           <Text>Beranda</Text>
//           <Text>Tetang</Text>
//           <Text>Contact</Text>
//         </View>

//         <View
//           style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
//           <Image
//             source={{uri: 'https://placeimg.com/640/480/people'}}
//             style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
//           />
//           <View style={{alignItems: 'flex-start'}}>
//             <Text style={{fontSize: 20, fontWeight: 'bold'}}>
//               Ridwan Romadhon
//             </Text>
//             <Text>{this.state.subcriber} Subscrible</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

const FlexBox = () => {
  const [subcrber, setSubcribre] = useState(20);

  useEffect(() => {
    console.log('dd mound');
    setTimeout(() => {
      setSubcribre(2000);
    }, 2000);
    return () => {
      console.log('dd Update');
    };
  }, [subcrber]);

  // useEffect(() => {
  //   console.log('dd update');
  //   setTimeout(() => {
  //     setSubcribre(2000);
  //   }, 2000);
  // });

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#f2f2f2',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <View style={{backgroundColor: 'red', width: 50, height: 50}}></View>
        <View style={{backgroundColor: 'yellow', width: 50, height: 50}}></View>
        <View style={{backgroundColor: 'blue', width: 50, height: 50}}></View>
        <View style={{backgroundColor: 'pink', width: 50, height: 50}}></View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text>Home</Text>
        <Text>Beranda</Text>
        <Text>Tetang</Text>
        <Text>Contact</Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <Image
          source={{uri: 'https://placeimg.com/640/480/people'}}
          style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
        />
        <View style={{alignItems: 'flex-start'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Ridwan Romadhon
          </Text>
          <Text>{subcrber} Subscrible</Text>
        </View>
      </View>
    </View>
  );
};

export default FlexBox;
