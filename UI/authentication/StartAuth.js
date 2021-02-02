import React from 'react';
import { View, StyleSheet } from 'react-native';

import CustomText from '../custom_components/custom_text/CustomText';
import ArrowButton from '../custom_components/custom_buttons/ArrowButton';

const StartAuth = () => {

    const text = [
        [42.5, 'Welcome, stranger'],
        [22.5, 'Those who wish to continue must first identify themselves'],
        [22.5, 'Have you been here before?']
    ];

    const Text = text.map(
        (component, index) => 
            <CustomText key={`line${index+1}`} type="header" size={component[0]} content={component[1]} align="center" style={{paddingVertical: 27.5}} />
    );

    return (
        <View style={styles.component}>
            <View style={styles.text_wrapper}>
                {Text}
            </View>
            <View style={styles.buttons_wrapper}>
                <ArrowButton userMode="returning" textContent="Yep!" />
                <ArrowButton userMode="new" textContent="No, first time" />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    component: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        paddingHorizontal: 50
    },
    text_wrapper: {
        height: '50%',
        marginVertical: '17.5%'
    },
    buttons_wrapper: {
        height: 100,
        justifyContent: 'space-around'
    }
});

export default StartAuth;