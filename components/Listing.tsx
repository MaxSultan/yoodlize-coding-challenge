import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface Props {
    name: string;
    image: string;
    price: string;
    description: string;
    rules: string[];
    navigation: any;
}


  const Listing: React.FC<Props> = (props) =>  {
    const navigation = useNavigation()
    return (
        <View style={styles.card}>
            <Image source={props.image} style={styles.profileImage}/>
            <View style={styles.textContainer}>
                <TouchableOpacity onPress={()=> navigation.navigate('Listings')}><Text>{props.name}</Text></TouchableOpacity>
                <Text>{props.price} per day</Text>
                <Text>{props.description}</Text>
            </View>
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
    textContainer:{
        maxWidth: 200,
    }
})
export default Listing