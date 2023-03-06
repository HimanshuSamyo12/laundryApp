import React from 'react';
import { FlatList, View, Dimensions, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
import { EvilIcons, Ionicons, FontAwesome, SimpleLineIcons, Entypo, MaterialCommunityIcons, MaterialIcons, AntDesign } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {

    const navigation = useNavigation();

    const Logout = () =>
        Alert.alert(
            "Logout",
            "Coming Soon",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );

    const cancleaccount = () =>
        Alert.alert(
            "Cancle Account",
            "Coming Soon",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );


    return (
        <View style={{ backgroundColor: 'white', height: '100%' }}>
            <ScrollView>
                <View>
                    <Image source={require('../assets/Images/Blazer5.jpeg')} style={{ width: '100%', height: 200, resizeMode: 'cover', }} />
                    <Image source={require('../assets/Images/profilemain.jpeg')} style={{ width: 120, height: 120, alignSelf: 'center', resizeMode: 'stretch', bottom: 50, borderColor: 'black', borderWidth: 1, borderRadius: 100 }} />
                    <View style={{ height: 40, justifyContent: 'center', width: 40, backgroundColor: '#909090', borderRadius: 100, alignSelf: 'center', left: 60, bottom: 100 }}>
                        <TouchableOpacity>
                            <FontAwesome name="camera" size={20} style={{ alignSelf: 'center', color: 'white' }} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center', bottom: 90 }}>ankit</Text>
                </View>

                <View style={{ backgroundColor: '#dedede', height: 55, justifyContent: 'center', bottom: 50 }}>
                    <Text style={{ left: 20, fontSize: 20, color: '#A0A0A0', }}>Account</Text>
                </View>

                <View style={{ bottom: 32 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('UpdateProfile')}><EvilIcons name='user' size={40} style={{ color: '#A0A0A0', left: 10 }} />
                        <Text style={{ left: 60, bottom: 30, fontSize: 20, color: '#A0A0A0', }}>Profile</Text></TouchableOpacity>
                </View>

                <View style={{ bottom: 40 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}><SimpleLineIcons name='lock' size={26} style={{ color: '#A0A0A0', left: 15 }} />
                        <Text style={{ left: 60, bottom: 30, fontSize: 20, color: '#A0A0A0', }}>Change Password</Text></TouchableOpacity>
                </View>

                <View style={{ bottom: 45 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('FirstScreen')}><Entypo name='language' size={26} style={{ color: '#A0A0A0', left: 15 }} />
                        <Text style={{ left: 60, bottom: 30, fontSize: 20, color: '#A0A0A0', }}>Choose Language</Text></TouchableOpacity>
                </View>

                <View style={{ bottom: 49 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Booking')}><MaterialCommunityIcons name='notebook-edit-outline' size={26} style={{ color: '#A0A0A0', left: 15 }} />
                        <Text style={{ left: 60, bottom: 30, fontSize: 20, color: '#A0A0A0', }}>My Order</Text></TouchableOpacity>
                </View>

                <View style={{ bottom: 55 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}><Ionicons name='notifications-outline' size={30} style={{ color: '#A0A0A0', left: 15 }} />
                        <Text style={{ left: 60, bottom: 30, fontSize: 20, color: '#A0A0A0', }}>Notification</Text></TouchableOpacity>
                </View>

                <View style={{ bottom: 60 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')}><MaterialIcons name='chat' size={30} style={{ color: '#A0A0A0', left: 15 }} />
                        <Text style={{ left: 60, bottom: 30, fontSize: 20, color: '#A0A0A0', }}>Chat</Text></TouchableOpacity>
                </View>

                <View style={{ bottom: 64 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Support')}><MaterialIcons name='support-agent' size={30} style={{ color: '#A0A0A0', left: 15 }} />
                        <Text style={{ left: 60, bottom: 30, fontSize: 20, color: '#A0A0A0', }}>Support</Text></TouchableOpacity>
                </View>

                <View style={{ bottom: 71 }}>
                    <TouchableOpacity onPress={cancleaccount}><AntDesign name='delete' size={30} style={{ color: '#A0A0A0', left: 15 }} />
                        <Text style={{ left: 60, bottom: 30, fontSize: 20, color: '#A0A0A0', }}>Cancle Account</Text></TouchableOpacity>
                </View>

                <View style={{ bottom: 73 }}>
                    <TouchableOpacity onPress={Logout}><MaterialCommunityIcons name='logout' size={30} style={{ color: '#A0A0A0', left: 15 }} />
                        <Text style={{ left: 60, bottom: 30, fontSize: 20, color: '#A0A0A0', }}>Logout</Text></TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    TouchableContainer: {
        top: 120,
        height: 40,
        justifyContent: 'center',
        width: Dimensions.get('window').width * 0.4,
        left: 32,
        borderRadius: 32,
        backgroundColor: '#147fdc'
    },
})

export default Profile;