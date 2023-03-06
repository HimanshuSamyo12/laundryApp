import React from 'react';
import { FlatList, View, Dimensions, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { EvilIcons, Ionicons, FontAwesome, MaterialCommunityIcons, FontAwesome5 } from 'react-native-vector-icons';
import BookingComponent from '../Components/BookingComponent';
import { useNavigation } from '@react-navigation/native';

const Booking = () => {

    const navigation = useNavigation();

    return (

        <ScrollView>
            <View style={styles.box1}>

                <Text style={styles.txt1}>Booking</Text>
                <TouchableOpacity style={styles.TouchableContainer}><EvilIcons name="search" size={40} style={styles.icon} /></TouchableOpacity>

            </View>

            <View style={styles.box2}>
                <BookingComponent onPress={() => navigation.navigate('OrderDetails')} />
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    TouchableContainer: {
        height: 40,
        width: Dimensions.get('window').width * 0.15,
        alignSelf: 'flex-end',
        bottom: 15
    },
    box1: { top: 23 },
    txt1: { fontSize: 23, top: 15, alignSelf: 'center', },
    icon: { color: '#909090', alignSelf: 'flex-end', right: 10 },
    box2: { top: 5 }
})

export default Booking;