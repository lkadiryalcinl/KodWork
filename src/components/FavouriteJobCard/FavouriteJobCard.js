import React,{useContext,useEffect} from 'react'
import { View,Text,TouchableWithoutFeedback } from 'react-native';
import styles from './FavouriteJobCard.style'
import Button from '../Button';
import { Context } from '../../Context/Context';

export default({Job,onClick}) => {

    const {lastData,setLastData,favoriteJobsId,setFavoriteJobsId} = useContext(Context);

    const onChange = () => {
            const newLastData = lastData.filter(
                data => data !== Job
            )
            setLastData(newLastData);

            const newFavoriteJobsId = favoriteJobsId.filter(
                item => item !== Job.id
            )
            setFavoriteJobsId(newFavoriteJobsId)
    }
    
    return(
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <Text style={styles.h1}>{Job.name.length>30 ? Job.name.slice(0,35)+'..' : Job.name}</Text>
                <Text style={{color:'black',marginBottom:3}}>Sprinklr</Text>
                <View style={styles.text_inner_container}><Text style={styles.h2_left}>{Job.locations[0].name}</Text></View>
                <Text style={styles.h2_right}>{Job.levels[0].name}</Text>
                <Button title={'Remove'} iconName='remove' onClick={onChange}/>
            </View>
                
        </TouchableWithoutFeedback>
    )
}