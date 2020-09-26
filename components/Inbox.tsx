import React, { useState } from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    SafeAreaView,
  } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

  const Inbox: React.FC = (props) =>  {

    return (
        <>
            <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <View>
                        <Text style={styles.header}>EXCHANGES</Text>
                        <Text style={styles.text}>No active exchanges</Text>
                        <Text style={styles.header}>PENDING</Text>
                        <Text style={styles.text}>You have no pending requests</Text>
                        <Text style={styles.header}>INQUIRIES</Text>
                        <Text style={styles.text}>No questions have been asked</Text>
                        <Text style={styles.header}>APPROVED</Text>
                        <Text style={styles.text}>No approved reservations</Text>
                        <Text style={styles.header}>COMPLETED</Text>
                        <Text style={styles.text}>No completed reservations</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    header:{
        color: '#00ADEE',
        fontSize: 24,
        fontWeight: "400",
        margin: 10,
    },
    text:{
        margin: 10,
        fontSize:20,
    }
})

export default Inbox;