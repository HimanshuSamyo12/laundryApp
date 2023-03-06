import React from 'react';
import { FlatList, View, Dimensions, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import InputField from '../Components/InputComponent';
import Button1 from '../Components/Button';
import { EvilIcons, Ionicons, FontAwesome, Entypo } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';



const Support = () => {

    const navigation = useNavigation();

    return (

        <View style={{ height: '100%' }}>

            <View style={{ height: Dimensions.get('window').height * 0.12, justifyContent: 'center', elevation: 5, backgroundColor: 'white' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}><Ionicons name='arrow-back' size={32} style={{ top: 32, left: 10, width: Dimensions.get('window').width * 0.1, }} /></TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center' }}>Support</Text>
            </View>

        </View>

    )
}
export default Support;