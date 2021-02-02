import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Template = () => {
    return (
        <View style={styles.component}>
            <Text>text no styling</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    component: { }
});

export default Template;