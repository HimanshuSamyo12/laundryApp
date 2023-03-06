import React from 'react';
import { FlatList, View, Dimensions, Text, StyleSheet, Image, TouchableOpacity, } from "react-native";
import { FlatListSlider } from 'react-native-flatlist-slider';

const images = [
    {
        banner: require('../assets/Images/image1.jpg'),
        desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
        banner: require('../assets/Images/image2.jpg'),
        desc:
            'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
    {
        banner: require('../assets/Images/image3.jpg'),
        desc:
            'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },

];

const Demo = () => {

    return (
        <View>
            <FlatListSlider
                data={images}
                imageKey={'banner'}
                item={'desc'}
                local
                contentContainerStyle={{ paddingHorizontal: 16, top: 150, height: 450, }}
                indicatorContainerStyle={{ position: 'absolute', top: 450 }}
                indicatorActiveWidth={10}
                animation
            />
        </View>
    )
};


export default Demo;