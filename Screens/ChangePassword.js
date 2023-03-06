import React from 'react';
import { FlatList, View, Dimensions, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import InputField from '../Components/InputComponent';
import Button1 from '../Components/Button';
import { EvilIcons, Ionicons, FontAwesome, Entypo } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';


const ChangePassword = () => {

    const navigation = useNavigation();

    return (

        <View style={styles.MainContainer}>

            <View style={styles.fieldOne}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}><Ionicons name='arrow-back' size={32} style={styles.icons} /></TouchableOpacity>
                <Text style={styles.txt1}>Change Password</Text>
            </View>

            <Image source={require('../assets/Images/Lock.jpeg')} style={styles.img1} />

            <View style={styles.box1}>
                <View style={styles.box2}>
                    <Text style={styles.txt2}>Old Password</Text>

                    <TextInput
                        secureTextEntry={true}
                        textContentType='password'
                        style={styles.inputtxt1}
                    />
                </View>

                <View style={styles.box3}>
                    <Text style={styles.txt2}>New Password</Text>

                    <TextInput
                        secureTextEntry={true}
                        textContentType='password'
                        style={styles.inputtxt1}
                    />
                </View>

                <View style={styles.box4}>
                    <Text style={styles.txt2}>Retype Password</Text>

                    <TextInput
                        secureTextEntry={true}
                        textContentType='password'
                        style={styles.inputtxt1}
                    />
                </View>
            </View>


            <View style={styles.btn}><Button1
                value={'Change Password'} /></View>

        </View>

    )
}

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: 'white', height: '100%'
    },
    fieldOne: {
        height: Dimensions.get('window').height * 0.12,
        justifyContent: 'center'
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
    },
    img1: {
        width: 150,
        height: 150,
        alignSelf: 'center'
    },
    box1: {
        top: 23
    },
    box2: {
        top: 15
    },
    txt2: {
        left: 20,
        fontSize: 16,
        color: '#A0A0A0',
    },
    inputtxt1: {
        left: 15,
        height: 23,
        borderBottomColor: '#147fdc',
        borderBottomWidth: 1,
        width: Dimensions.get('window').width * 0.9,
        top: 15
    },
    box3: {
        top: 40
    },
    box4: {
        top: 73
    },
    btn: {
        top: 40
    }

})

export default ChangePassword;