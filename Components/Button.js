import React from 'react';
import { StyleSheet, View, Text, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { EvilIcons } from 'react-native-vector-icons';

const Button1 = (props) => {
    return (

        <View>

            <TouchableOpacity onPress={props.onPress} style={styles.TouchableContainer}>
                <Text style={{ fontSize: 23, alignSelf: 'center', color: 'white', top: 20 }}>{props.value}</Text>
                {/* Arrow name = name={'chevron-right'} */}
                <EvilIcons name={props.name} size={46} style={{ left: 280, bottom: 15, width: 50, height: 40, color: 'white' }} />
            </TouchableOpacity>

        </View>


    )
}

const styles = StyleSheet.create({
    TouchableContainer: {
        top: 100,
        height: 50,
        justifyContent: 'center',
        width: Dimensions.get('window').width * 0.85,
        left: 32,
        borderRadius: 32,
        backgroundColor: '#147fdc'
    }
})

export default Button1;