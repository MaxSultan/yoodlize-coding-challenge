import React, { useState } from 'react';
import {
    View,
    Image,
    Text,
    TextInput,
    StyleSheet,
    SafeAreaView,
    KeyboardAvoidingView,
  } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import profile from '../assets/IMG_7767.psd'
import UserStore from '../store/UserStore'

interface Props {

}


  const Profile: React.FC<Props> = () =>  {
    const { user } = UserStore 
    const [firstName, setFirstName] = useState(user[0].firstName)
    const [lastName, setLastName] = useState(user[0].lastName)
    const [location, setLocation] = useState(user[0].location)
    const [description, setDescription] = useState(user[0].description)
    const userObj = {
      firstName: firstName,
      lastName: lastName,
      location: location,
      description: description
    }

    return (
      <SafeAreaView style={styles.blue}>
        <KeyboardAvoidingView>
          <ScrollView>
            <View style={styles.center}>
                <View style={styles.head}>
                  <Text style={styles.headText}>Profile Details</Text>
                </View>
                <View style={styles.shadow}>
                  <Image source={profile} style={styles.profileImage}/>
                </View>
                <View style={styles.formField}>
                  <Text style={styles.formText}>First Name</Text>
                  <TextInput 
                  style={styles.textInput} 
                  value={firstName} 
                  onChangeText={text => setFirstName(text)}
                  />
                </View>
                <View style={styles.formField}>
                  <Text style={styles.formText}>Last Name</Text>
                  <TextInput 
                  style={styles.textInput}
                  value={lastName} 
                  onChangeText={text => setLastName(text)}
                  />
                </View>
                <View style={styles.formField}>
                  <Text style={styles.formText}>Location</Text>
                  <TextInput 
                  style={styles.textInput}
                  value={location} 
                  onChangeText={(text) => setLocation(text)}
                  />
                </View>
                <View style={styles.formField}>
                  <Text style={styles.formText}>Description</Text>
                  <TextInput 
                  style={styles.textArea}
                  value={description} 
                  onChangeText={text => setDescription(text)}
                  />
                </View>
                <TouchableOpacity style={styles.mainButton} onPress={()=> user[0].update(userObj)}>
                  <Text style={styles.mainButtonText}>Save</Text>
                </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  profileImage:{
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  shadow:{
    height:150,
    width:150,
    shadowColor: '#00ADEE',
    shadowOpacity: 0.6,
    shadowRadius: 10,
    shadowOffset: { height:0, width: 0 },
    elevation: 10,
    borderRadius: 75,
    backgroundColor: '#fff',
    position: "relative",
    top: -75,
  },
  head:{
    height: 200,
    width: 450,
    backgroundColor: "#085D9B",
    justifyContent: "center",
    alignItems: "center",
  },
  headText:{
    fontSize: 24,
    color: "#ffffff"
  },
  mainButton:{
    padding: 10,
    backgroundColor: '#00ADEE',
    borderRadius: 10,
    paddingHorizontal: 70,
    marginBottom: 50,
  },
  mainButtonText:{
    color: '#ffffff',
    fontSize: 18,
  },
  center:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  formField:{
    width: 400,
  },
  formText:{
    fontSize: 18,
  },
  textInput:{
    borderBottomColor: '#ebebeb',
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 30,
  },
  textArea:{
    height:50,
  },
   blue:{
     backgroundColor: "#085D9B",
   }
})
export default Profile