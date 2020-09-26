import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import Home from './components/Home';
import Inbox from './components/Inbox';
import Add from './components/Add';
import ListingDetails from './components/ListingDetails';
import Profile from './components/Profile';


const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <ApolloProvider>
      <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Search" component={Home}/>
            <Tab.Screen name="Inbox" component={Inbox}/>
            <Tab.Screen name="Add" component={Add}/>
            <Tab.Screen name="Listings" component={ListingDetails}/>
            <Tab.Screen name="Profile" component={Profile}/>
          </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App

