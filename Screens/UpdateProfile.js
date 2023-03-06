import React from 'react';
import { FlatList, View, Dimensions, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import InputField from '../Components/InputComponent';
import Button1 from '../Components/Button';
import { EvilIcons, Ionicons, FontAwesome } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';

const UpdateProfile = () => {

    const navigation = useNavigation();

    return (

        <View>

            <View style={{ backgroundColor: '#147fdc', height: Dimensions.get('window').height * 0.12, justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}><Ionicons name='arrow-back' size={32} style={{ top: 32, left: 10, width: Dimensions.get('window').width * 0.1, }} /></TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', alignSelf: 'center' }}>Profile</Text>
            </View>

            <View style={{ top: 32 }}>
                <InputField
                    txt1={'Full Name'}
                    placeholder={'Full Name'}
                    height={64}
                />

                <InputField
                    txt1={'Phone Number'}
                    placeholder={'Phone Number'}
                    height={64}
                />

                <InputField
                    txt1={'Email'}
                    placeholder={'Email'}
                    height={64}
                />

                <InputField
                    txt1={'Address'}
                    placeholder={'Address'}
                    height={64}
                />
            </View>

            <View style={{ bottom: 50 }}><Button1
                value={'UPDATE'} name={'chevron-right'} /></View>

        </View>
    )
}

export default UpdateProfile;