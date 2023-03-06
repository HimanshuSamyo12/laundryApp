import React from 'react';
import { View, Text, Dimensions, Image } from 'react-native';

const NotifyComponent = (props) => {
    return (

        <View style={{ marginBottom: 15, elevation: 5, backgroundColor: 'white', width: Dimensions.get('window').width * 0.95, left: 10, height: 110 }}>
            <View style={{}}>
                <Image source={require('../assets/Images/Notify.jpg')} style={{ width: 100, height: 100, left: 10, borderRadius: 32, top: 5 }} />
                <View style={{ left: 115, bottom: 90, }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }} >Order submitted successfully.</Text>
                    <Text style={{ width: Dimensions.get('window').width * 0.7, }}>Thank you ankit Your order has been submitted successfully.</Text>
                    <Text style={{ left: 100, top: 15 }}>05 Jan,2023 12:09 pm</Text>
                </View>
            </View>
        </View>

    )
}

export default NotifyComponent;