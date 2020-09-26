import React, { useState } from 'react';
import {
    View,
    Image,
    Text,
    StatusBar,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
  } from 'react-native';
import boat from '../assets/648147.psd';
import goat from '../assets/goat.psd';
import genie from '../assets/genie.psd';
import { ScrollView } from 'react-native-gesture-handler';
import ListingList from './ListingList';


  const Home: React.FC = () =>  {
    const [listings, setListings] = useState([
        {image: goat, name: 'Autonomous Lawn Mower', price: '$10', description: 'Mows your lawn. No gas or effort required. Food included', rules: ['Must be have verified Yoodilize profile']},
        {image: genie, name: 'Genie in a bottle', price: '$20', description: '3 wishes. No wishing for more wishes.', rules:['Must be have verified Yoodilize profile']},
        {image: boat, name: 'A boat', price: '$250', description: 'aqatic sport recreation vehicle', rules: ['Must be have verified Yoodilize profile']}
    ])
    return (

        <>
            <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <View>
                        <ListingList listings={listings}/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}
export default Home;