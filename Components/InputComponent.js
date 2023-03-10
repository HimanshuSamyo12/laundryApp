import { validateYupSchema } from 'formik';
import React from 'react';
import { StyleSheet, View, Text, TextInput, Dimensions } from 'react-native';

const InputField = (props) => {

    const styles = StyleSheet.create({
        InputBox: {
            color: 'red',
            top: props.t,
            backgroundColor: 'white',
            elevation: 4,
            width: Dimensions.get('window').width * 0.93,
            left: 15,
            borderRadius: 5,
            marginBottom: 23,
            height: props.height
        },
        txtInput: {
            left: 5,
            color: '#909090',
            marginBottom: 5
        },
        Input: {
            fontSize: 18,
            left: 5,
            color: '#909090',
            marginBottom: 4
        }
    })

    return (

        <View style={styles.InputBox}>
            <Text style={styles.txtInput}>{props.txt1}</Text>
            <TextInput
                style={styles.Input}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                onBlur={props.onBlur}
                value={props.value}
            />
        </View>


    )
}



export default InputField;