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


export default LocationListView = (props) => {
    const {height, width} = Dimensions.get('window');
    const itemWidth = (width - 20);
    return (
        <View style={{ flex: 1, backgroundColor: '#ddd', alignItems: 'center', justifyContent: 'center', minHeight: 80, marginBottom: 10}}>
              <Text> {props.title} </Text>
        </View>
    )
}


