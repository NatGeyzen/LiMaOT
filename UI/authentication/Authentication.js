import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import StartAuth from './StartAuth';

const Authentication = () => {

    const { isReturningUser } = useSelector(state => state.user);
    const [ step, setStep ] = useState(<StartAuth />);

    return (
        <View style={styles.component}>
            {step}
        </View>
    )
};

const styles = StyleSheet.create({
    component: {
        height: '100%',
        width: '100%'
    } 
});

export default Authentication;