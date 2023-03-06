import React from 'react';
import { View, Dimensions, Text, TouchableOpacity, } from "react-native";
import { EvilIcons, Ionicons, FontAwesome, Entypo } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import TopServicesComponent from '../Components/TopServicesComponent';


const TopServices = () => {

    const navigation = useNavigation();

    return (

        <View style={{ height: '100%', backgroundColor: 'white' }}>

            <View style={{ height: Dimensions.get('window').height * 0.12, justifyContent: 'center', elevation: 5, backgroundColor: 'white' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}><Ionicons name='arrow-back' size={32} style={{ top: 32, left: 10, width: Dimensions.get('window').width * 0.1, }} /></TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center' }}>Top Services</Text>
            </View>
            <View style={{ top: 15 }}>

                <TopServicesComponent onPress={() => navigation.navigate('TopTabFourth')} />

            </View>

        </View>

    )
}
export default TopServices;