import React from "react";
import { Ionicons, Entypo, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "./Screens/Home";
import NearBy from "./Screens/NearBy";
import Booking from "./Screens/Booking";
import Offers from "./Screens/Offers";
import Profile from "./Screens/Profile";

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarOptions: {
                activeTintColor: "blue",
            },
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons
                        name="md-home"
                        size={24}
                        color={tabInfo.focused ? "#147fdc" : "#606160"}
                    />
                );
            },
        },
    },
    second: {
        screen: NearBy,
        navigationOptions: {
            tabBarLabel: "Near By",
            tabBarOptions: {
                activeTintColor: "#006600",
            },
            tabBarIcon: (tabInfo) => {
                return (
                    <Entypo
                        name="location-pin"
                        size={24}
                        color={tabInfo.focused ? "#147fdc" : "#606160"}
                    />
                );
            },
        },
    },
    third: {
        screen: Booking,
        navigationOptions: {
            tabBarLabel: "Booking",
            tabBarOptions: {
                activeTintColor: "#006600",
            },
            tabBarIcon: (tabInfo) => {
                return (
                    <FontAwesome5
                        name="shopping-basket"
                        size={24}
                        color={tabInfo.focused ? "#147fdc" : "#606160"}
                    />
                );
            },
        },
    },

    fourth: {
        screen: Offers,
        navigationOptions: {
            tabBarLabel: "Offers",
            tabBarOptions: {
                activeTintColor: "#006600",
            },
            tabBarIcon: (tabInfo) => {
                return (
                    <MaterialCommunityIcons
                        name="brightness-percent"
                        size={24}
                        color={tabInfo.focused ? "#147fdc" : "#606160"}
                    />
                );
            },
        },
    },

    five: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: "profile",
            tabBarOptions: {
                activeTintColor: "#006600",
            },
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons
                        name="person"
                        size={24}
                        color={tabInfo.focused ? "#147fdc" : "#606160"}
                    />
                );
            },
        },
    },


});

const Navigator = createAppContainer(TabNavigator);

const BottomTab = ({ navigation }) => {

    return (
        <Navigator >
            <Home />
        </Navigator>
    );
};

export default BottomTab;