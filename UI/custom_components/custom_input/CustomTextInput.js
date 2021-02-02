import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomTextInput = props => {

    const { placeholder, value, storeInput } = props;
    return (
        <TextInput 
            style={styles.custom_textinput} 
            placeholder={placeholder} 
            value={value}
            onChangeText={input => storeInput(input)} 
        />
    )
};

const styles = StyleSheet.create({
    linear_gradient_border: { 
        width: '100%',
        height: 50,
        borderRadius: 30,
        marginTop: 25
    },
    custom_textinput: {
        width: '98%',
        height: 46,
        borderRadius: 30,
        margin: 1.5,
        backgroundColor: 'lightgrey',
        paddingLeft: 15,
        borderWidth: 2,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    }
});

export default CustomTextInput;