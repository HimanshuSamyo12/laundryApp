import React from 'react';
import { FlatList, View, Dimensions, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import InputField from '../Components/InputComponent';
import Button1 from '../Components/Button';
import { EvilIcons, Ionicons, FontAwesome, Entypo } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';



const OrderDetails = () => {

    const navigation = useNavigation();

    return (

        <View style={{ height: '100%', backgroundColor: 'white' }}>
            <ScrollView>
                <View style={{ height: Dimensions.get('window').height * 0.12, justifyContent: 'center', elevation: 5, backgroundColor: 'white' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Booking')}><Ionicons name='arrow-back' size={32} style={{ top: 32, left: 10, width: Dimensions.get('window').width * 0.1, }} /></TouchableOpacity>
                    <Text style={{ fontSize: 20, color: '#A0A0A0', alignSelf: 'center' }}>Order Details</Text>
                </View>

                <View>
                    <Text style={{ fontSize: 23, color: '#A0A0A0', top: 46, left: 10 }}>Cloth List</Text>
                    <TouchableOpacity style={{ height: Dimensions.get('window').height * 0.08, justifyContent: 'center', width: Dimensions.get('window').width * 0.3, borderRadius: 10, backgroundColor: '#147fdc', alignSelf: 'flex-end', right: 10 }}><Text style={{ color: 'white', alignSelf: 'center', fontSize: 20, }}>Rate Now</Text></TouchableOpacity>
                    <Text style={{ fontSize: 21, left: 10, top: 23 }}>1 X testing</Text>
                    <Text style={{ fontSize: 20, alignSelf: 'flex-end', right: 15 }}>$ 14000</Text>
                    <Text style={{ fontSize: 15, color: '#A0A0A0', left: 23 }}>Laundry</Text>
                </View>
                <View style={{ top: 105 }}>
                    <View style={{ borderBottomWidth: 0.5, bottom: 10, borderBottomColor: '#A0A0A0' }}></View>
                    <Text style={{ fontSize: 16, left: 10 }}>Sub Total</Text>
                    <Text style={{ fontSize: 16, alignSelf: 'flex-end', bottom: 23, right: 10 }}>$ 14000.0</Text>
                    <Text style={{ fontSize: 16, bottom: 23, left: 10 }}>Discount Amount</Text>
                    <Text style={{ fontSize: 16, alignSelf: 'flex-end', bottom: 46, right: 10 }}>$ 0</Text>
                    <Text style={{ fontSize: 16, bottom: 46, left: 10 }}>Tax</Text>
                    <Text style={{ fontSize: 16, alignSelf: 'flex-end', bottom: 69, right: 10 }}>$ 0</Text>
                    <View style={{ borderBottomWidth: 0.5, bottom: 60, borderBottomColor: '#A0A0A0' }}></View>
                    <Text style={{ fontSize: 16, color: '#147fdc', bottom: 50, left: 10 }}>
                        Paid Via
                    </Text>
                    <Text style={{ fontSize: 16, alignSelf: 'flex-end', bottom: 69, right: 10, color: '#147fdc' }}>$ 5.0</Text>
                </View>

                <View style={{
                    top: 64, backgroundColor: 'white', elevation: 1, height: Dimensions.get('window').height * 0.3,
                }}>
                    <Text style={{ color: '#A0A0A0', fontSize: 18, left: 10, }}>Picked Up</Text>
                    <Text style={{ color: '#A0A0A0', fontSize: 18, alignSelf: 'center', bottom: 23 }}>Delivery</Text>
                    <Text style={{ left: 10 }}>12-jan-2023</Text>
                    <Text style={{ alignSelf: 'center', bottom: 20 }}>13-jan-2023</Text>
                    <Text style={{ left: 10 }}>05:27 PM</Text>
                    <Text style={{ alignSelf: 'center', bottom: 20 }}>06:27 PM</Text>
                    <Text style={{ fontSize: 18, color: '#A0A0A0', top: 23, left: 10 }}>Pickup Address</Text>
                    <Text style={{ fontSize: 14, width: Dimensions.get('window').width * 0.9, color: '#A0A0A0', top: 30, left: 10 }}>HXV&+F5C,Khattalwada,Wadagaon,Maharashtra 442305,India</Text>
                </View>

                <View style={{ marginBottom: 150, top: 73, backgroundColor: 'white', elevation: 5, height: Dimensions.get('window').height * 0.14, justifyContent: 'center' }}>
                    <TouchableOpacity><View>
                        <FontAwesome name='wechat' size={32} style={{ color: '#147fdc', top: 20, left: 23, }} />
                    </View>

                        <Text style={{ left: 73, bottom: 15 }} >Message The Delivery Agent</Text>
                        <Text style={{ color: '#A0A0A0', left: 73, bottom: 10 }} >If Any Issue So Message Delivery Agent</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

    )
}
export default OrderDetails;