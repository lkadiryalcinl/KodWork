import React from 'react'
import { View,Text,TouchableWithoutFeedback } from 'react-native';
import styles from './JobCard.style'

export default({Job,onClick}) => {

    return(
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <Text style={styles.h1}>{Job.name.length>30 ? Job.name.slice(0,35)+'..' : Job.name}</Text>
                <Text style={{color:'black',marginBottom:3}}>Sprinklr</Text>
                <View style={styles.text_inner_container}><Text style={styles.h2_left}>{Job.locations[0].name}</Text></View>
                <Text style={styles.h2_right}>{Job.levels[0].name}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}