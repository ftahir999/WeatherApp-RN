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
  Dimensions,
  Button,
  Modal
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LocationListView from './LocationListView';


export default Locations = (props) => {
    const {height, width} = Dimensions.get('window');
    const itemWidth = (width);
    
    return (
        <Modal
          animationType="slide"
          transparent={false}
          visible={props.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
       <StatusBar barStyle="dark-content" />
       <SafeAreaView style = {{ flex: 1 }}>
        <View style = {{ flex: 1, backgroundColor: Colors.dark}}>
        <FlatList 
            pagingEnabled
            data={[{title: 'Lahore', key: 'item1'}, {title: 'Karachi', key: 'item2'}, {title: 'Peshawar', key: 'item3'}, {title: 'Islamabad', key: 'item4'}, {title: 'Multan', key: 'item5'}]}
            renderItem={({item, index, separators}) => (
            <LocationListView title = {item.title} />
        )}/>
        </View>
        </SafeAreaView>
        </Modal>
        
    )
}
