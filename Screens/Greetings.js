import React from 'react';
import { FlatList, View, Dimensions, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import InputField from '../Components/InputComponent';
import Button1 from '../Components/Button';
import { EvilIcons, Ionicons, FontAwesome, Entypo, AntDesign, MaterialIcons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';



const Greetings = () => {

    const navigation = useNavigation();

    return (

        <View style={{ height: '100%', backgroundColor: 'white' }}>

            <ScrollView style={{ height: '100%', backgroundColor: 'white' }}>
                <View style={{ height: Dimensions.get('window').height * 0.12, justifyContent: 'center', elevation: 5, backgroundColor: 'white' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('PreviewOrder')}><Ionicons name='arrow-back' size={32} style={{ top: 32, left: 10, width: Dimensions.get('window').width * 0.1, }} /></TouchableOpacity>
                    <Text style={{ fontSize: 23, fontWeight: 'bold', alignSelf: 'center' }}>Schedule Pickup</Text>
                </View>

                <View style={{ borderWidth: 0.5, top: 55, width: Dimensions.get('window').width * 0.9, left: 20 }}></View>

                <View style={{
                    top: 30, left: 10, height: Dimensions.get('window').height * 0.09,
                }}>


                    <View style={{
                        backgroundColor: '#147fdc', width: Dimensions.get('window').width * 0.12, height: Dimensions.get('window').height * 0.06,
                        left: 10, borderRadius: 50, justifyContent: 'center'
                    }}>
                        <Entypo name='location-pin' size={32} style={{ alignSelf: 'center', color: 'white' }} />
                    </View>

                    <View style={{
                        backgroundColor: '#147fdc', width: Dimensions.get('window').width * 0.12, height: Dimensions.get('window').height * 0.06,
                        borderRadius: 50, bottom: 48, justifyContent: 'center', left: 110,
                    }}>
                        <Ionicons name='calendar-sharp' size={30} style={{ alignSelf: 'center', color: 'white' }} />
                    </View>

                    <View style={{
                        backgroundColor: '#147fdc', width: Dimensions.get('window').width * 0.12, height: Dimensions.get('window').height * 0.06,
                        left: 215, borderRadius: 50, bottom: 95, justifyContent: 'center'
                    }}>
                        <Entypo name='wallet' size={30} style={{ alignSelf: 'center', color: 'white' }} />
                    </View>

                    <View style={{
                        backgroundColor: '#147fdc', width: Dimensions.get('window').width * 0.12, height: Dimensions.get('window').height * 0.06,
                        left: 320, borderRadius: 50, bottom: 142, justifyContent: 'center'
                    }}>
                        <AntDesign name='wallet' size={27} style={{ alignSelf: 'center', color: 'white' }} />
                    </View>
                </View>

                <Image source={require('../assets/Images/Greeting.jpg')} style={{ width: '100%', height: 200, top: 23, resizeMode: 'cover' }} />


                <Text style={{ fontSize: 21, top: 32, alignSelf: 'center' }}>Thank You For Choosing Us!</Text>

                <Text style={{ fontSize: 16, top: 45, alignSelf: 'center', color: '#A0A0A0' }}>Your Pickup Has Been Confirmed</Text>

                <View style={{ height: Dimensions.get('window').height * 0.5, top: 15 }}>
                    <Text style={{ fontSize: 20, left: 10, top: 64 }}>Shop Name</Text>
                    <Text style={{ fontSize: 20, color: '#A0A0A0', alignSelf: 'flex-end', right: 10, top: 40 }}>WhiteRose Laundry</Text>

                    <Text style={{ fontSize: 20, left: 10, top: 64 }}>Order No.</Text>
                    <Text style={{ fontSize: 20, color: '#A0A0A0', alignSelf: 'flex-end', right: 10, top: 40 }}>4667611316</Text>

                    <Text style={{ fontSize: 20, left: 10, top: 64 }}>Final Amount</Text>
                    <Text style={{ fontSize: 20, color: '#A0A0A0', alignSelf: 'flex-end', right: 10, top: 40 }}>$ 5.0</Text>

                    <Text style={{ fontSize: 20, left: 10, top: 64 }}>Pickup Date & Time</Text>
                    <Text style={{ fontSize: 20, color: '#A0A0A0', top: 92, left: 10 }}>12-jan-2023 05:27 PM</Text>

                    <Text style={{ fontSize: 20, left: 10, top: 125 }}>Payment Method</Text>
                    <Text style={{ fontSize: 20, color: '#A0A0A0', top: 150, left: 10 }}>Cash On Delivery</Text>


                </View>

                <View style={{ marginBottom: 100, bottom: 23 }}>
                    <Button1 value={'Go To Order Status'} onPress={() => navigation.navigate('Booking')} />
                </View>
            </ScrollView>
        </View>


    )
}
export default Greetings;