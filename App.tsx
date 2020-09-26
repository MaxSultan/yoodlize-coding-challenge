import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import Icons from 'react-native-vector-icons/Ionicons'
import Inbox from './components/Inbox';
import Add from './components/Add';
import Profile from './components/Profile';
import StackNavigator from './components/StackNavigator';

const client = new ApolloClient({
  uri: 'https://postgresql-and-graphql.herokuapp.com/v1/graphql',
  cache: new InMemoryCache()
});

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#00ADEE'
        }}>
            <Tab.Screen 
              name="Listings" 
              component={StackNavigator}
              options={{
                tabBarIcon: ({color, size}) => (
                  <Icons name='list' color={color} size={size} />
                )
              }}
            />
            <Tab.Screen 
              name="Inbox" 
              component={Inbox}
              options={{
                tabBarIcon: ({color, size}) => (
                  <Icons name='ios-mail' color={color} size={size} />
                )
              }}
            />
            <Tab.Screen 
              name="Add" 
              component={Add}
              options={{
                tabBarIcon: ({color, size}) => (
                  <Icons name='ios-add' color={color} size={size} />
                )
              }}
            />
            <Tab.Screen 
              name="Profile" 
              component={Profile}
              options={{
                tabBarIcon: ({color, size}) => (
                  <Icons name='ios-person' color={color} size={size} />
                )
              }}
            />
          </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App

