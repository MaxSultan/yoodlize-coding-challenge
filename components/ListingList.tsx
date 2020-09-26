import React from 'react';
import {
    View,
    StyleSheet,
    Text,
  } from 'react-native';
import Listing from './Listing';
import { gql, useQuery } from '@apollo/client'

  const ListingList: React.FC = (props) =>  {

    const getListings = gql`
    query getListings {
        Listing{
    	    name
            price
    	    description
    	    rules
        }
    }
    `
    
    const { loading, error, data } = useQuery(getListings);

    if (loading) return <Text>'Loading...'</Text>;
    if (error) return <Text>`Error! ${error.message}`</Text>;

      const renderListings = () => {
          return data.Listing.map(({ name, price, description, rules }) => <Listing key={name} name={name}  price={price} description={description} rules={rules} />)
      }

    if (data) return (
        <View style={styles.center}>
            <Text>Popular</Text>
            {renderListings()}
        </View>
    )
}
const styles = StyleSheet.create({
    profileImage:{
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#085D9B',
    },
    card:{
        borderColor: '#ebebeb',
        borderWidth: 2,
        width: 380,
        justifyContent: "space-around",
        alignItems:"center",
        flexDirection: "row",
        paddingRight: 40,
        paddingLeft: 10,
        paddingVertical: 10,
        marginTop: 20,
    },
    center:{
        justifyContent: "center",
        alignItems: "center",
    }
})
export default ListingList