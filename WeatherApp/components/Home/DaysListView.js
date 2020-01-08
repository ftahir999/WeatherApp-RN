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
import DayView from './DayView';


export default DaysListView => {
    const {height, width} = Dimensions.get('window');
    const itemWidth = ((width - 20)/ 7);
    return (
        <FlatList 
        style = {{ flex: 1, backgroundColor: Colors.dark, flexDirection: 'row', maxHeight: 80, justifyContent: 'space-between'}}
        horizontal
        pagingEnabled
        data={[{title: 'Monday', key: 'item1'}, {title: 'Tuesday', key: 'item2'}, {title: 'Wednesday', key: 'item3'}, {title: 'Thursday', key: 'item4'}, {title: 'Friday', key: 'item5'}, {title: 'Saturday', key: 'item6'}, {title: 'Sunday', key: 'item7'}]}
        renderItem={({item, index, separators}) => (
            <DayView day = {item.title} width =  {itemWidth - 4} />
        )}
     />
    )
}


