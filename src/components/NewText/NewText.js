import React from 'react'
import { View,Text } from 'react-native'
import styles from './NewText.style'

export default({type,text})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.Type}>{type}: </Text>
            <Text style={styles.Text}>{text}</Text>
        </View>
    );
};