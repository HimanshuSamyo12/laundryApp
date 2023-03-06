import React from 'react';
import { FlatList, View, Dimensions, Text, StyleSheet, Image, TouchableOpacity, } from "react-native";
import InputField from '../Components/InputComponent';
import Button1 from '../Components/Button';
import { EvilIcons, Ionicons, FontAwesome, MaterialCommunityIcons, FontAwesome5 } from 'react-native-vector-icons';

const BookingComponent = (props) => {
    return (

        <View style={{ backgroundColor: 'white', height: Dimensions.get('window').height * 0.34, marginBottom: 15 }}>
            <View style={{ top: 5, borderBottomWidth: 0.5 }}>

                <Text style={{ fontSize: 20, color: '#A0A0A0', left: 15, top: 5 }}>WhiteRose Laundry</Text>
                <Text style={{ fontSize: 20, color: '#A0A0A0', alignSelf: 'flex-end', bottom: 23, right: 10 }}>$ 10000.0</Text>

                <Text style={{ fontSize: 15, color: '#A0A0A0', left: 20, bottom: 5 }}>8072887925</Text>
                <Text style={{ fontSize: 15, color: '#147fdc', alignSelf: 'flex-end', bottom: 23, right: 15 }}>cancel</Text>

            </View>

            <View style={{ top: 18, left: 10, backgroundColor: '#e5e5e5', height: 80, width: Dimensions.get('window').width * 0.95, }}>
                <View style={{ top: 9, left: 5 }}>
                    <Image source={require('../assets/Images/Notify.jpg')} style={{ width: 45, height: 45, borderRadius: 32, left: 10 }} />
                    <Text style={{ fontSize: 14, color: '#A0A0A0', }}>Confirmed</Text>

                    <View style={{ left: 75, bottom: 64, }}>
                        <MaterialCommunityIcons name='truck-fast' size={45} style={{ color: 'green' }} />
                        <Text style={{ fontSize: 14, color: '#A0A0A0', }}>Picked Up</Text>
                    </View>

                    <View style={{ left: 155, bottom: 127 }}>
                        <MaterialCommunityIcons name='truck-check-outline' size={41} style={{ color: 'red' }} />
                        <Text style={{ fontSize: 14, color: '#A0A0A0', right: 5 }}>In Process</Text>
                    </View>

                    <View style={{ left: 230, bottom: 178 }}>
                        <FontAwesome5 name='truck-loading' size={30} style={{ color: 'skyblue' }} />
                        <Text style={{ fontSize: 14, color: '#A0A0A0', }}>Shipped</Text>
                    </View>


                    <View style={{ left: 300, bottom: 237 }}>
                        <MaterialCommunityIcons name='truck-outline' size={40} style={{ color: 'blue' }} />
                        <Text style={{ fontSize: 14, color: '#A0A0A0', }}>Delivered</Text>
                    </View>
                </View>
            </View>

            <View style={{ borderBottomWidth: 0.5, top: 32 }}></View>

            <View style={{ top: 55, width: Dimensions.get('window').width * 0.3, justifyContent: 'center', left: 50, backgroundColor: 'white', elevation: 5, height: Dimensions.get('window').height * 0.03, }}>
                <TouchableOpacity><Text style={{ alignSelf: 'center', color: '#A0A0A0' }}>Cancle Order</Text></TouchableOpacity>
            </View>

            <View style={{ top: 32, width: Dimensions.get('window').width * 0.3, justifyContent: 'center', alignSelf: 'flex-end', backgroundColor: 'white', elevation: 5, right: 32, height: Dimensions.get('window').height * 0.03, }}>
                <TouchableOpacity onPress={props.onPress}><Text style={{ alignSelf: 'center', color: '#A0A0A0' }}>View Details</Text></TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    TouchableContainer: {
        top: 120,
        height: 40,
        justifyContent: 'center',
        width: Dimensions.get('window').width * 0.4,
        left: 32,
        borderRadius: 32,
        backgroundColor: '#147fdc'
    },
})

export default BookingComponent;