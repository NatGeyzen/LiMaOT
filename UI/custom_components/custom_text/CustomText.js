import React from 'react';
import { StyleSheet, Text } from 'react-native';

const CustomText = props => {

    const { type, size, content, align, style } = props;

    const font_family = 
        type === 'header' ? 'RussoOne_400Regular' 
            : type === 'body-italics' ? 'Roboto_500Medium_Italic'
                : type === 'body-bold' ? 'Roboto_700Bold'
                    : 'Roboto_400Regular';

    const styles = StyleSheet.create({
        customFont: { fontFamily: font_family, fontSize:  size, textAlign: align, lineHeight: 27.5}
    });

    return (
        <Text style={[styles.customFont, style]}>{content.toString()}</Text>
    );
}

export default CustomText;