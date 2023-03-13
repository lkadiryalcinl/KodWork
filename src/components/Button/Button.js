import React from 'react'
import { TouchableOpacity,View,Text } from 'react-native'
import styles from './Button.style'
import Icon from 'react-native-vector-icons/Ionicons'

export default({title,onClick,iconName}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={onClick}>
                <Text><Icon name={iconName} size={25} color={'white'}/></Text>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};