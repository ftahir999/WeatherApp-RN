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
        <View style = {{ flex: 1, backgroundColor: Colors.dark}}>
        <FlatList style = {{ marginBottom: 24 }}
            horizontal
            pagingEnabled
            data={[{title: 'Title Text', key: 'item1'}, {title: 'Title Text', key: 'item2'}, {title: 'Title Text', key: 'item3'}, {title: 'Title Text', key: 'item4'}, {title: 'Title Text', key: 'item5'}]}
            renderItem={({item, index, separators}) => (
            <LocationListView title = {item.title} />
        )}/>
        </View>
        </Modal>
        
    )
}
