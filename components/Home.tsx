import React from 'react';
import {
    View,
    StatusBar,
    SafeAreaView,
  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListingList from './ListingList';


  const Home: React.FC = () =>  {
    return (
        <>
            <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <View>
                        <ListingList />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}
export default Home;