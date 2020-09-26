import React, { useState } from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
import { ScrollView } from 'react-native-gesture-handler';

  const Add: React.FC = (props) =>  {

    return (
        <>
            <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                <ScrollView>
                    <View style={styles.center}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>Add a Listing</Text>
                        </View>
                        <Text>Hi! Let's make use of your unused stuff.</Text>
                        <Text>We can guide you through step-by-step. Along the way you will:</Text>
                        <Unorderedlist>
                             <Text>Take great photos</Text>
                        </Unorderedlist>
                        <Unorderedlist>
                             <Text>Describe your item</Text>
                        </Unorderedlist>
                        <Unorderedlist>
                             <Text>Set your price</Text>
                        </Unorderedlist>
                        <Unorderedlist>
                             <Text>Add rules to protect your item</Text>
                        </Unorderedlist>
                        <Text>These things are key to being a top lender on Yoodlize</Text>
                        <TouchableOpacity style={styles.startButton}>
                            <Text style={styles.startButtonText}>Get Started</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    startButton:{
        backgroundColor:'red',
        paddingHorizontal: 40,
        width: 300,
        borderRadius: 30,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
     startButtonText:{
         color: "#ffffff",
         fontWeight: "600",
     },
     header:{
         paddingTop: 30,
         paddingBottom: 10,
         alignItems: "center",
         backgroundColor: "#ebebeb",
         width: 450,
     }, 
     headerText:{
        fontSize: 20,
     },
     center:{
        justifyContent: "center",
        alignItems: "center",
     }
})

export default Add;