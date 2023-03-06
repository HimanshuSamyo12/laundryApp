import { React, useState } from 'react';
import { FlatList, View, Dimensions, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Laundry from './Screens/Laundry';
import DryCleaning from './Screens/DryCleaning';
import WashAndIron from './Screens/WashAndIron';
import SpotWashAndDry from './Screens/SpotWashAndDry';
import {  AntDesign } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import LaundryComponent from './Components/LaundryComponent';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigatorSecond = (props) => {

    const navigation = useNavigation();

    return (

        <SafeAreaView style={{ flex: 1, top: 32, backgroundColor: 'white' }}>
            <TouchableOpacity onPress={() => navigation.navigate('TopTabNavigator')} style={{ width: Dimensions.get('window').width * 0.1, }}><AntDesign name='arrowleft' size={40} style={{ top: 3, left: 5 }} /></TouchableOpacity>
            <Tab.Navigator
                barStyle={{ elevation: 0, borderBottomWidth: 0, backgroundColor: '#f2f2f2' }}


                screenOptions={{
                    labelStyle: { fontSize: 13, color: "black", elevation: 0, marginTop: 23, },
                    tabStyle: { width: 100, backgroundColor: 'white' },
                    activeTintColor: 'red',
                    pressOpacity: 0.5,
                    indicatorStyle: 'false',
                    pressColor: 'white',
                    style: { elevation: 1 },
                    tabBarIndicatorStyle: { color: 'red' }
                }}
            >
                <Tab.Screen name="LAUNDRY" component={Laundry} />
                <Tab.Screen name="DRY CLEANING" component={DryCleaning} />
                <Tab.Screen name="WASH & IRON" component={WashAndIron} />
                <Tab.Screen name="SPOT WASH & DRY" component={SpotWashAndDry} />

            </Tab.Navigator>
            <View style={{ backgroundColor: '#147fdc', height: 123, justifyContent: 'center' }}>
                <Text style={{ borderRightWidth: 1, borderRightColor: 'white', paddingLeft: 20, paddingTop: 5, color: 'white', fontSize: 20, left: 5, height: 40, width: 150 }}>Total 0</Text>
                <Text style={{ color: 'white', fontSize: 20, bottom: 35, left: 160, }}>{props.items} Items Added</Text>
                <TouchableOpacity onPress={() => navigation.navigate('PreviewOrder')}><Text style={{ color: 'white', fontSize: 20, bottom: 60, alignSelf: 'flex-end', right: 32 }}>Next</Text>
                    <AntDesign name='right' size={20} style={{ color: 'white', position: 'absolute', alignSelf: 'flex-end', bottom: 61, right: 10 }} /></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

export default TopTabNavigatorSecond;