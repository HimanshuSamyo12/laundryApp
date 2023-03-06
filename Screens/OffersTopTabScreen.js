import React from 'react';
import { FlatList, View, Dimensions, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import InputField from '../Components/InputComponent';
import Button1 from '../Components/Button';
import { EvilIcons, Ionicons, FontAwesome, Entypo } from 'react-native-vector-icons';


const OffersTopTabScreen = () => {


    return (

        <View style={{ height: '100%', }}>

            <View style={{ top: 10, height: 164, width: Dimensions.get('window').width * 0.95, alignSelf: 'center', borderRadius: 5, backgroundColor: '#147fdc' }}>
                <Text style={{ color: 'white', left: 10, fontSize: 19, top: 5 }}>Special offer for product </Text>
                <Text style={{ color: 'white', fontWeight: 'bold', width: 140, left: 10, fontSize: 19, top: 5 }}>Get 20 % off on Laundry</Text>
                <Image source={require('../assets/Images/bluelaundry.jpeg')} style={{ width: 140, height: 140, resizeMode: 'stretch', alignSelf: 'flex-end', bottom: 64, borderRadius: 32 }} />
                <TouchableOpacity style={{ position: 'absolute', borderWidth: 2.8, borderColor: 'white', width: 100, left: 10, top: 100, height: 32, justifyContent: 'center', borderRadius: 32 }}><Text style={{ color: 'white', fontSize: 15, alignSelf: 'center' }}>6A9RA6</Text></TouchableOpacity>
            </View>

        </View>

    )
}
export default OffersTopTabScreen;