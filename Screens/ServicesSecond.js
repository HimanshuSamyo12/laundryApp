import React from 'react';
import { FlatList, View, Dimensions, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import Button1 from '../Components/Button';
import { useNavigation } from '@react-navigation/native';

const ServicesSecond = () => {

    const navigation = useNavigation();



    return (
        <ScrollView>
            <View style={{ height: '100%', backgroundColor: 'white' }}>

                <View style={{ backgroundColor: 'white', elevation: 5, width: Dimensions.get('window').width * 0.94, alignSelf: 'center', borderRadius: 10, height: Dimensions.get('window').height * 0.23, top: 15, marginBottom: 15 }}>
                    <Text style={{ fontSize: 23, fontWeight: 'bold', color: '#A0A0A0', left: 10, top: 15 }}>Laundry</Text>
                    <Text style={{ fontSize: 19, color: '#A0A0A0', left: 10, top: 15 }}>My service is to good</Text>
                    <TouchableOpacity style={{ position: 'absolute', borderWidth: 1.5, borderColor: '#147fdc', width: 120, left: 10, top: 100, height: 50, justifyContent: 'center', borderRadius: 5 }}><Text style={{ color: '#147fdc', fontSize: 15, alignSelf: 'center', }}>24 HOURS</Text></TouchableOpacity>
                    <Image source={require('../assets/Images/services.jpeg')} style={{ height: 130, width: 130, borderRadius: 100, alignSelf: 'flex-end', bottom: 40 }} />
                </View>

                <View style={{ backgroundColor: 'white', elevation: 5, width: Dimensions.get('window').width * 0.94, alignSelf: 'center', borderRadius: 10, height: Dimensions.get('window').height * 0.23, top: 15, marginBottom: 23 }}>
                    <Text style={{ fontSize: 23, fontWeight: 'bold', color: '#A0A0A0', left: 10, top: 15 }}>Dry Cleaning</Text>
                    <Text style={{ fontSize: 19, color: '#A0A0A0', left: 10, top: 15, marginBottom: 5, width: Dimensions.get('window').width * 0.55 }}>Dry cleaning is any cleaning process for</Text>
                    <TouchableOpacity style={{ position: 'absolute', borderWidth: 1.5, borderColor: '#147fdc', width: 120, left: 10, top: 110, height: 50, justifyContent: 'center', borderRadius: 5 }}><Text style={{ color: '#147fdc', fontSize: 15, alignSelf: 'center', }}>24 HOURS</Text></TouchableOpacity>
                    <Image source={require('../assets/Images/services.jpeg')} style={{ height: 130, width: 130, borderRadius: 100, alignSelf: 'flex-end', bottom: 82 }} />
                </View>

                <View style={{ marginBottom: 30, bottom: 90 }}>
                    <Button1
                        value={'SCHEDULE A PICKUP'}
                        onPress={() => navigation.navigate('TopTabThird')}
                    />
                </View>
            </View>
        </ScrollView>
    )
}
export default ServicesSecond;