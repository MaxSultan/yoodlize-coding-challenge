import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
  } from 'react-native';
  import profile from '../assets/IMG_7767.psd'
  import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import UserStore from '../store/UserStore'
import { observer } from "mobx-react";

interface Props {
    user:any
  }

  const OwnerCard: React.FC<Props> = observer(props =>  {
    const navigation = useNavigation()
    const { user } = UserStore
    return (
        <View style={styles.card}>
            <Image source={profile} style={styles.profileImage}/>
            <View>
    <TouchableOpacity onPress={()=> navigation.navigate('Profile')}><Text>{UserStore.user[0].firstName} {UserStore.user[0].lastName}</Text></TouchableOpacity>
                <Text>Member Since {user[0].memberSince}</Text>
                <Text>4 Stars 19</Text>
            </View>
        </View>
    )
})

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
    }
})
export default OwnerCard