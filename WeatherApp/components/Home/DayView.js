import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableHighlight,
  Dimensions
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


export default DayView = (props) => {
    const {height, width} = Dimensions.get('window');
    const itemWidth = (width);
    return (
        <View style={{backgroundColor: '#ddd', width: props.width}}>
              <Text> {props.day} </Text>
        </View>
    )
}


