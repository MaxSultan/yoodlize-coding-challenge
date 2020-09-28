import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import goat from '../assets/goat.psd'
import genie from '../assets/genie.psd'
import boat from '../assets/648147.psd'
interface Props {
    name: string;
    price: string;
    description: string;
    rules: string[];
    navigation: string;
    image: string;
    id: number;
}


  const Listing: React.FC<Props> = (props) =>  { 

    function imageInfo(){
        switch(props.id){
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

    
    const navigation = useNavigation()
    return (
        <View style={styles.card}>
            <Image source={imageInfo()} style={styles.profileImage}/>
            <View style={styles.textContainer}>
                <TouchableOpacity onPress={()=> {
                    navigation.navigate('ListingDetails', {
                            id: props.id
                        });
                    }}><Text>{props.name}</Text></TouchableOpacity>
                <Text> ${props.price} per day</Text>
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