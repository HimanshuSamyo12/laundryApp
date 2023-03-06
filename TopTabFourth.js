import React from 'react';
import { Image, SafeAreaView } from "react-native";
import AboutSecond from './Screens/AboutSecond';
import ServicesSecond from './Screens/ServicesSecond';
import OffersTopTabScreen from './Screens/OffersTopTabScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const TopTabFourth = () => {

    return (


        <SafeAreaView style={{ flex: 1 }}>
            <Image source={require('./assets/Images/TopNavigator.jpeg')} style={{ width: '100%', height: 245, resizeMode: 'stretch' }} />
            <Tab.Navigator
                barStyle={{ elevation: 0, borderBottomWidth: 0, }}
                tabBarIndicatorStyle={{ color: 'red', }}

                screenOptions={{
                    labelStyle: { fontSize: 15, color: "black", elevation: 0 },
                    tabStyle: { width: 130 },
                    activeTintColor: 'red',
                    pressOpacity: 0.5,
                    indicatorStyle: 'false',
                    pressColor: 'white',
                    style: { elevation: 1 }
                }}
            >
                <Tab.Screen name="About" component={AboutSecond} />
                <Tab.Screen name="Services" component={ServicesSecond} />
                <Tab.Screen name="Offers" component={OffersTopTabScreen} />

            </Tab.Navigator>
        </SafeAreaView>
    )
};

export default TopTabFourth;