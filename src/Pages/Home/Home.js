import React, {useState,useContext} from 'react'
import { FlatList,View,Text,TouchableOpacity} from 'react-native'
import JobCard from '../../components/JobCard';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import styles from './Home.style'
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import useFetchDetail from '../../hooks/useFetchDetail';

export default({navigation}) => {
    const {data,loading,error} = useFetchDetail("https://www.themuse.com/api/public/jobs?page=0")
    
    const onClick = (id) => {
        navigation.navigate('Detail',{id})
    }
    const renderItem = ({item}) => <JobCard Job={item} onClick={() => onClick(item.id)}/>

    if(loading) return <Loading/>
    if(error) return <Error/>
    
    return (
        <View style={{backgroundColor:'#c31432'}}>
            <FlatList 
            data={data.results} 
            renderItem={renderItem} 
            keyExtractor={item => item.id.toString()}
            />
        </View>
        );

};