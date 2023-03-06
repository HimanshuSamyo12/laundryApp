import React from 'react';
import { Image, SafeAreaView } from "react-native";
import About from './Screens/About';
import Services from './Screens/Services';
import OffersTopTabScreen from './Screens/OffersTopTabScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {

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
                <Tab.Screen name="About" component={About} />
                <Tab.Screen name="Services" component={Services} />
                <Tab.Screen name="Offers" component={OffersTopTabScreen} />

            </Tab.Navigator>
        </SafeAreaView>
    )
};

export default TopTabNavigator;