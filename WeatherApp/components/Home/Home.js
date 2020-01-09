import React, { useState } from 'react';
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
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LocationTemperatureView from './LocationTemperatureView';
import PageControl from 'react-native-page-control';
import Locations from '../Location/Locations';


export default Home => {
    const [showLocation, setShowLocation] = useState(false);

    const {height, width} = Dimensions.get('window');
    const itemWidth = (width);
    return (
        <View style = {{ flex: 1, backgroundColor: Colors.dark}}>
        <FlatList style = {{ marginBottom: 24 }}
            horizontal
            pagingEnabled
            data={[{title: 'Title Text', key: 'item1'}, {title: 'Title Text', key: 'item2'}, {title: 'Title Text', key: 'item3'}, {title: 'Title Text', key: 'item4'}, {title: 'Title Text', key: 'item5'}]}
            renderItem={({item, index, separators}) => (
            <LocationTemperatureView title = {item.title} />
        )}/>
        <View style = {{ justifyContent: 'space-between', flexDirection: 'row-reverse'}}>
        <PageControl
                style={{position:'absolute', left:0, right:0, bottom:12}}
                numberOfPages={3}
                currentPage={1}
                hidesForSinglePage
                pageIndicatorTintColor='gray'
                currentPageIndicatorTintColor='white'
                indicatorStyle={{borderRadius: 5}}
                currentIndicatorStyle={{borderRadius: 5}}
                indicatorSize={{width:8, height:8}}
                onPageIndicatorPress={this.onItemTap}/>
        <Button title ="Done" onPress = {() => setShowLocation(true)}/>
        <Locations modalVisible = {showLocation} />
        </View>
        </View>
        
    )
}
