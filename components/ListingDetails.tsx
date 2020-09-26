import React from 'react';
import goat from '../assets/goat.psd'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Unorderedlist from 'react-native-unordered-list';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import OwnerCard from './OwnerCard';


const ListingDetails: React.FC = (props) =>  {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={styles.scrollView}
          >
          <View>
            <Image source={goat} style={styles.image}/>
            <View>
              <Text style={styles.itemName}>Autonomous Lawn Mower</Text>
              <Text style={styles.price}>$10 per day</Text>
              <Text style={styles.subHeading}>Description</Text>
              <Text style={styles.description}>Mows your lawn. No gas or effort required. Food included</Text>
              <Text style={styles.subHeading}>Rental Rules</Text>
              <Unorderedlist>
                <Text style={styles.description}>Must be have verified Yoodilize profile</Text>
              </Unorderedlist>
            </View>
            <OwnerCard/>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>Message Owner</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.mainButton}>
                <Text style={styles.mainButtonText}>Request</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
    itemName: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    image:{
      height: 300,
      width: 250,
      alignSelf: "center",
      marginTop: 50,
      marginBottom: 30,
    },
    price:{
      marginBottom: 30,
    },
    subHeading:{
      fontSize: 18,
      fontWeight: '500',
      marginBottom: 10,
    },
    description: {
      marginBottom: 10,
      fontSize: 14,
    },
    scrollView:{
      justifyContent: "center",
      alignItems: "center",
    },
    buttonContainer:{
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      margin: 30,
    },
    mainButton:{
      padding: 20,
      backgroundColor: '#00ADEE',
      borderRadius: 10,
      paddingHorizontal: 40,
    },
    mainButtonText:{
      color: '#ffffff',
    },
    secondaryButton:{
      padding: 20,
      borderColor: '#00ADEE',
      borderWidth: 2,
      borderRadius: 40,
      
    },
    secondaryButtonText:{
      color: '#00ADEE',
    }
  });
  
  export default ListingDetails;