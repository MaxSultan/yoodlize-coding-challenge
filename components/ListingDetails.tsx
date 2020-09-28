import React from 'react';
import goat from '../assets/goat.psd'
import genie from '../assets/genie.psd'
import boat from '../assets/648147.psd'
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
import { gql, useQuery } from '@apollo/client'
interface Props {
  name: string;
  price: string;
  description: string;
  rules: string[];
  navigation: any;
  image: string;
  id: number;
  route: any;
}



const ListingDetails: React.FC<Props> = ({ route }) =>  {
  const { id } = route.params;
  function imageInfo(){
    switch(id){
        case 1:
        return goat
        break;
        case 4:
        return genie
        break;
        case 2:
        return boat
        break;
        default: 
        return null;
    }
}
  const getListingDetails = gql`
  query getListing {
    Listing(where: {id: {_eq: ${id}}}) {
      name
      price
      description
      rules
      image
    }
    User(limit: 1) {
      location
      firstName
      lastName
      description
      image
      id
      memberSince
    }
  }
  `
  const { loading, error, data } = useQuery(getListingDetails);

  if (loading) return <Text>'Loading...'</Text>;
  if (error) return <Text>`Error! ${error.message}`</Text>;

  if (data) return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={styles.scrollView}
          >
          <View>
            <Image source={imageInfo()} style={styles.image}/>
            <View>
              <Text style={styles.itemName}>{data.Listing[0].name}</Text>
              <Text style={styles.price}>${data.Listing[0].price} per day</Text>
              <Text style={styles.subHeading}>Description</Text>
              <Text style={styles.description}>{data.Listing[0].description}</Text>
              <Text style={styles.subHeading}>Rental Rules</Text>
              <Unorderedlist>
              <Text style={styles.description}>{data.Listing[0].rules}</Text>
              </Unorderedlist>
            </View>
            <OwnerCard user={data.User}/>
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