import React from 'react';
import { useDispatch } from 'react-redux';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomText from '../custom_text/CustomText';

import { setUserMode } from '../../../store/user';

const ArrowButton = props => {

    const { userMode, textContent } = props;
    const dispatch = useDispatch();

    const color = userMode === 'returning' ? '#6930c3' : '#009af3'; 

    return (
        <TouchableOpacity style={styles.arrow_button} onPress={() => dispatch(setUserMode(userMode))}>
            <Icon name="arrow-right-bold-hexagon-outline" size={35} color={color}/>
            <CustomText type="header" size={18} content={textContent} style={{paddingLeft: 10, color: color}} />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    arrow_button: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 190
    }
});

export default ArrowButton;