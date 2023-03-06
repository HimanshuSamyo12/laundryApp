import React from 'react';
import { FlatList, View, Dimensions, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { EvilIcons, Ionicons, FontAwesome, Entypo } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import NotifyComponent from '../Components/NotificationComponent';

const Notification = () => {

    const navigation = useNavigation();

    return (

        <View style={{ height: '100%' }}>

            <View style={{ height: Dimensions.get('window').height * 0.12, justifyContent: 'center', elevation: 5, backgroundColor: 'white' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}><Ionicons name='arrow-back' size={32} style={{ top: 32, left: 10, width: Dimensions.get('window').width * 0.1, }} /></TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center' }}>Notification</Text>
            </View>

            <View style={{ top: 15 }}>
                <NotifyComponent />
                <NotifyComponent />
                <NotifyComponent />
                <NotifyComponent />
                <NotifyComponent />
            </View>
        </View>

    )
}
export default Notification;