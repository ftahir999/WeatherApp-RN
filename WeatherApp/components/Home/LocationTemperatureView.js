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
import DaysListView from './DaysListView';



export default LocationTemperatureView = (props) => {
    const {height, width} = Dimensions.get('window');
    const itemWidth = (width - 20);
    return (
        <View style={{ flex: 1, margin: 10, backgroundColor: '#ddd', minWidth: itemWidth, maxWidth: itemWidth, justifyContent: 'space-between'}}>
              <Text> {props.title} </Text>
              <DaysListView/>
              
        </View>
    )
}


