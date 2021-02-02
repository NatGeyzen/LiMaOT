import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { useFonts, RussoOne_400Regular } from '@expo-google-fonts/russo-one';
import { Roboto_400Regular, Roboto_500Medium_Italic, Roboto_700Bold } from '@expo-google-fonts/roboto';


import store from './store/store';


export default function App() {

	let [fontsLoaded] = useFonts({
		RussoOne_400Regular,
		Roboto_400Regular,
		Roboto_500Medium_Italic,
		Roboto_700Bold
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<Text>App.js</Text>
					<StatusBar style="auto" />
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	backgroundColor: 'lightgrey'
  },
});
