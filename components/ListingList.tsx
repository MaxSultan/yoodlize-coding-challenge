import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
  } from 'react-native';
import Listing from './Listing';

interface props {
    listings: any[];
}

  const ListingList: React.FC<props> = (props) =>  {

      const renderListings = () => {
          return props.listings.map(l => <Listing key={l.name} image={l.image} name={l.name}  price={l.price} description={l.description}  rules={l.rules} />)
      }

    return (
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