import React from 'react';
import { FlatList, View, Dimensions, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import InputField from '../Components/InputComponent';
import Button1 from '../Components/Button';
import { EvilIcons, Ionicons, FontAwesome, Entypo, MaterialIcons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';



const PreviewOrder = () => {

    const navigation = useNavigation();

    return (

        <View style={{ height: '100%', }}>

            <View style={{ height: Dimensions.get('window').height * 0.12, justifyContent: 'center', elevation: 5, backgroundColor: 'white' }}>
                <TouchableOpacity onPress={() => navigation.navigate('TopTabNavigatorSecond')}><Ionicons name='arrow-back' size={32} style={{ top: 32, left: 10, width: Dimensions.get('window').width * 0.1, }} /></TouchableOpacity>
                <Text style={{ fontSize: 20, alignSelf: 'center', color: '#A0A0A0', }}>Preview Order</Text>
            </View>
            <View style={{
                height: Dimensions.get('window').height * 0.35, backgroundColor: 'white',
            }}>
                <Text style={{ fontSize: 20, color: '#A0A0A0', left: 10 }}>Your Clothes</Text>
                <TouchableOpacity onPress={() => navigation.navigate('TopTabNavigatorSecond')}><Text style={{ fontSize: 20, color: '#147fdc', alignSelf: 'flex-end', bottom: 23, right: 10 }}>Edit</Text></TouchableOpacity>
                <Text style={{ fontSize: 21, left: 10 }}>1 X testing</Text>
                <Text style={{ fontSize: 20, alignSelf: 'flex-end', bottom: 23, right: 10 }}>$ 14000</Text>
                <Text style={{ fontSize: 15, color: '#A0A0A0', bottom: 23, left: 10 }}>Dry Cleaning </Text>
                <TouchableOpacity onPress={() => navigation.navigate('TopTabNavigatorSecond')}><Text style={{ fontSize: 16, color: '#147fdc', top: 60, left: 10 }}>Add More</Text></TouchableOpacity>
            </View>

            <View style={{
                height: Dimensions.get('window').height * 0.36, backgroundColor: 'white', top: 64
            }}>
                <MaterialIcons name='local-offer' size={32} style={{ color: '#147fdc', top: 10, left: 10 }} />
                <Text style={{ fontSize: 20, color: '#147fdc', left: 50, bottom: 23 }}>Have A PromoCode?</Text>
                <View style={{ borderBottomWidth: 0.5, bottom: 10, borderBottomColor: '#A0A0A0' }}></View>
                <Text style={{ fontSize: 16, color: '#A0A0A0', left: 10 }}>Sub Total</Text>
                <Text style={{ fontSize: 16, color: '#A0A0A0', alignSelf: 'flex-end', bottom: 23, right: 10 }}>$ 14000.0</Text>
                <Text style={{ fontSize: 16, color: '#A0A0A0', bottom: 23, left: 10 }}>Tax</Text>
                <Text style={{ fontSize: 16, color: '#A0A0A0', alignSelf: 'flex-end', bottom: 46, right: 10 }}>0</Text>
                <Text style={{ fontSize: 16, color: '#A0A0A0', bottom: 46, left: 10 }}>Discount</Text>
                <Text style={{ fontSize: 16, color: '#A0A0A0', alignSelf: 'flex-end', bottom: 69, right: 10 }}>0</Text>
                <View style={{ borderBottomWidth: 0.5, bottom: 60, borderBottomColor: '#A0A0A0' }}></View>
                <Text style={{ fontSize: 16, color: '#147fdc', bottom: 50, left: 10 }}>
                    Payable Amount
                </Text>
                <Text style={{ fontSize: 16, color: '#A0A0A0', alignSelf: 'flex-end', bottom: 72, right: 10 }}>$ 14000.0</Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('SchedulePickup')} style={styles.TouchableContainer}>
                <Text style={{ fontSize: 20, alignSelf: 'center', color: 'white', }}>SCHEDULE A PICKUP</Text>
                {/* Arrow name = name={'chevron-right'} */}

            </TouchableOpacity>

        </View>

    )
}

const styles = StyleSheet.create({
    TouchableContainer: {
        bottom: 32,
        height: 50,
        justifyContent: 'center',
        backgroundColor: '#147fdc'
    }
})

export default PreviewOrder;