import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Carousel from "./Screens/Carousal";
import Login from "./Screens/Login";
import FirstScreen from "./Screens/firstScreen";
import ForgotPassword from "./Screens/ForgotPassword";
import SignupScreen from "./Screens/Signup";
import BottomTab from "./BottomTabBar";
import Home from "./Screens/Home";
import NearBy from "./Screens/NearBy";
import Booking from "./Screens/Booking";
import Offers from "./Screens/Offers";
import Profile from "./Screens/Profile";
import UpdateProfile from "./Screens/UpdateProfile";
import ChangePassword from "./Screens/ChangePassword";
import Chat from "./Screens/Chat";
import Support from "./Screens/Support";
import Notification from "./Screens/Notification";
import TopServices from "./Screens/TopServices";
import AllServices from "./Screens/AllServices";
import TopTabNavigator from "./TopTabNavigator";
import TopTabNavigatorSecond from "./TopTabSecond";
import PreviewOrder from "./Screens/PreviewOrder";
import SchedulePickup from "./Screens/SchedulePickup";
import DateAndTime from "./Screens/DateAndTime";
import ConfirmOrder from "./Screens/ConfirmOrder";
import Greetings from "./Screens/Greetings";
import OrderDetails from "./Screens/OrderDetails";
import TopTabThird from "./TopTabThird";
import SearchBar from "./Screens/Search";
import TopTabFourth from "./TopTabFourth";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="FirstScreen" component={FirstScreen} />

        <Stack.Screen name="Carousel" component={Carousel} />

        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

        <Stack.Screen name="SignupScreen" component={SignupScreen} />

        <Stack.Screen name="BottomTab" component={BottomTab} />

        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="NearBy" component={NearBy} />

        <Stack.Screen name="Booking" component={Booking} />

        <Stack.Screen name="Offers" component={Offers} />

        <Stack.Screen name="Profile" component={Profile} />

        <Stack.Screen name="UpdateProfile" component={UpdateProfile} />

        <Stack.Screen name="ChangePassword" component={ChangePassword} />

        <Stack.Screen name="Chat" component={Chat} />

        <Stack.Screen name="Support" component={Support} />

        <Stack.Screen name="Notification" component={Notification} />

        <Stack.Screen name="TopServices" component={TopServices} />

        <Stack.Screen name="AllServices" component={AllServices} />

        <Stack.Screen name="TopTabNavigator" component={TopTabNavigator} />

        <Stack.Screen name="TopTabNavigatorSecond" component={TopTabNavigatorSecond}/>

        <Stack.Screen name="PreviewOrder" component={PreviewOrder} />

        <Stack.Screen name="SchedulePickup" component={SchedulePickup} />

        <Stack.Screen name="DateAndTime" component={DateAndTime} />

        <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} />

        <Stack.Screen name="Greetings" component={Greetings} />

        <Stack.Screen name="OrderDetails" component={OrderDetails} />

        <Stack.Screen name="TopTabThird" component={TopTabThird} />

        <Stack.Screen name="TopTabFourth" component={TopTabFourth} />

        <Stack.Screen name="SearchBar" component={SearchBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
