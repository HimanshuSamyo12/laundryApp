import { React, useEffect, useState } from 'react';
import { FlatList, View, Dimensions, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import Button1 from '../Components/Button';
import { useNavigation } from '@react-navigation/native';
import * as ServiceAPI from '../Api/Constant';

const Services = () => {

    const navigation = useNavigation();

    const [data, setData] = useState();

    const Api = async () => {
        try {

            const res = await fetch(ServiceAPI.Services,
                {
                    method: 'POST',
                    headers: {
                        "Accept": 'application/json',
                        "Content_Type": 'application/json'
                    },

                }
            );
            const myData = await res.json();
            console.log(myData);
            setData(myData);
        }
        catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        Api();
    }, [])


    return (
        <View>
            
            <FlatList
                data={Api}
                renderItem={({ item, index }) => {
                    console.log(item.service_name)
                    return

                }} />


        </View>
    )


}