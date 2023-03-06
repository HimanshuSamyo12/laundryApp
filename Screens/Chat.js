import React from 'react';
import { FlatList, View, Dimensions, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import InputField from '../Components/InputComponent';
import Button1 from '../Components/Button';
import { EvilIcons, Ionicons, FontAwesome, Entypo } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';



const Chat = () => {

    const navigation = useNavigation();

    return (

        <View style={styles.MainContainer}>

            <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}><Ionicons name='arrow-back' size={32} style={styles.icons} /></TouchableOpacity>
                <Text style={styles.txt1}>Chat</Text>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    MainContainer: {
        height: '100%',
    },
    box: {
        height: Dimensions.get('window').height * 0.12,
        justifyContent: 'center',
        elevation: 5,
        backgroundColor: 'white'
    },
    icons: {
        top: 32,
        left: 10,
        width: Dimensions.get('window').width * 0.1,
    },
    txt1: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    }

})


export default Chat;